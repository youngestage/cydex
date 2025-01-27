import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { RiderLayout } from "@/components/rider/RiderLayout";
import { ActiveOrders } from "@/components/rider/ActiveOrders";
import { RiderProfile } from "@/components/rider/RiderProfile";
import { RiderStats } from "@/components/rider/RiderStats";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RiderDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkRiderRole = async () => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user?.id)
        .maybeSingle();

      if (profile?.role !== "rider") {
        navigate("/");
      }
    };

    checkRiderRole();
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <RiderLayout>
        <Routes>
          <Route path="/" element={<ActiveOrders />} />
          <Route path="/profile" element={<RiderProfile />} />
          <Route path="/stats" element={<RiderStats />} />
        </Routes>
      </RiderLayout>
      <Footer/>
    </div>
  );
};

export default RiderDashboard;