import { useEffect } from "react";
import { useNavigate, Link, Outlet, Routes, Route } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Package, ChartBar, Store, ShoppingCart, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Products from "./vendor/Products";

const VendorDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkVendorRole = async () => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user?.id)
        .single();

      if (profile?.role !== "vendor") {
        navigate("/");
      }
    };

    checkVendorRole();
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-card border-r">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Vendor Dashboard</h2>
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
        <main className="flex-1 p-6 pt-50">
          <Routes>
            <Route path="products" element={<Products />} />
            <Route path="*" element={<Outlet />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VendorDashboard;