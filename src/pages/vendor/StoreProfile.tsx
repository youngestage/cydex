
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const StoreProfile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    store_name: "",
    store_description: "",
    business_email: "",
    business_phone: "",
    store_address: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from("profiles")
        .select("store_name, store_description, business_email, business_phone, store_address")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setProfile(data);
      }
    };

    fetchProfile();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from("profiles")
        .update(profile)
        .eq("id", user.id);

      if (error) throw error;
      
      toast.success("Store profile updated successfully!");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Store Profile</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="store_name">Store Name</Label>
            <Input
              id="store_name"
              name="store_name"
              value={profile.store_name || ""}
              onChange={handleChange}
              placeholder="Enter store name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="store_description">Store Description</Label>
            <Input
              id="store_description"
              name="store_description"
              value={profile.store_description || ""}
              onChange={handleChange}
              placeholder="Enter store description"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="business_email">Business Email</Label>
            <Input
              id="business_email"
              name="business_email"
              type="email"
              value={profile.business_email || ""}
              onChange={handleChange}
              placeholder="Enter business email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="business_phone">Business Phone</Label>
            <Input
              id="business_phone"
              name="business_phone"
              value={profile.business_phone || ""}
              onChange={handleChange}
              placeholder="Enter business phone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="store_address">Store Address</Label>
            <Input
              id="store_address"
              name="store_address"
              value={profile.store_address || ""}
              onChange={handleChange}
              placeholder="Enter store address"
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default StoreProfile;
