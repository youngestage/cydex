import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import { StoreLayout } from "@/components/store/StoreLayout";
import { ProductList } from "@/components/store/ProductList";
import { Cart } from "@/components/store/Cart";
import { OrderHistory } from "@/components/store/OrderHistory";
import { supabase } from "@/integrations/supabase/client";

const StorePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkCustomerRole = async () => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user?.id)
        .maybeSingle();

      if (profile?.role !== "customer") {
        navigate("/");
      }
    };

    checkCustomerRole();
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StoreLayout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </StoreLayout>
    </div>
  );
};

export default StorePage;