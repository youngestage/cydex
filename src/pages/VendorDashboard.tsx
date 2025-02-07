
import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet, Routes, Route } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Package, ChartBar, Store, ShoppingCart, Settings, Pencil } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Products from "./vendor/Products";
import StoreProfile from "./vendor/StoreProfile";
import Settings from "./vendor/Settings";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const VendorDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkVendorRole = async () => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role, store_name")
        .eq("id", user?.id)
        .single();

      if (profile?.role !== "vendor") {
        navigate("/");
      } else {
        setStoreName(profile.store_name || "");
      }
    };

    checkVendorRole();
  }, [user, navigate]);

  const handleUpdateStoreName = async () => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from("profiles")
        .update({ store_name: storeName })
        .eq("id", user?.id);

      if (error) throw error;
      
      setIsEditing(false);
      toast.success("Store name updated successfully!");
    } catch (error: any) {
      console.error("Error updating store name:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-card border-r">
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Vendor Dashboard</h2>
            {!isEditing ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {storeName || "Add store name"}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEditing(true)}
                  className="h-6 w-6"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Input
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="Enter store name"
                  className="h-8 text-sm"
                />
                <Button
                  onClick={handleUpdateStoreName}
                  disabled={loading}
                  size="sm"
                >
                  Save
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setIsEditing(false)}
                  size="sm"
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
          <nav className="space-y-1 px-3">
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link to="/vendor/products">
                <Package className="mr-2" />
                Products
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link to="/vendor/orders">
                <ShoppingCart className="mr-2" />
                Orders
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link to="/vendor/analytics">
                <ChartBar className="mr-2" />
                Analytics
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link to="/vendor/store">
                <Store className="mr-2" />
                Store Profile
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link to="/vendor/settings">
                <Settings className="mr-2" />
                Settings
              </Link>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 pt-20">
          <Routes>
            <Route path="products" element={<Products />} />
            <Route path="store" element={<StoreProfile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Outlet />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VendorDashboard;
