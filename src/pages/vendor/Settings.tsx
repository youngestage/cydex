
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface NotificationPreferences {
  orders: boolean;
  reviews: boolean;
  marketing: boolean;
  system: boolean;
}

interface StoreSettings {
  holiday_mode: boolean;
  auto_accept_orders: boolean;
  processing_time: number;
}

const Settings = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<NotificationPreferences>({
    orders: true,
    reviews: true,
    marketing: true,
    system: true,
  });
  const [settings, setSettings] = useState<StoreSettings>({
    holiday_mode: false,
    auto_accept_orders: true,
    processing_time: 60,
  });

  useEffect(() => {
    const fetchSettings = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from("profiles")
        .select("notification_preferences, store_settings")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching settings:", error);
        return;
      }

      if (data) {
        if (data.notification_preferences) {
          setNotifications(data.notification_preferences as NotificationPreferences);
        }
        if (data.store_settings) {
          setSettings(data.store_settings as StoreSettings);
        }
      }
    };

    fetchSettings();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from("profiles")
        .update({
          notification_preferences: notifications,
          store_settings: settings,
        })
        .eq("id", user.id);

      if (error) throw error;
      
      toast.success("Settings updated successfully!");
    } catch (error: any) {
      console.error("Error updating settings:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="orders">Order notifications</Label>
            <Switch
              id="orders"
              checked={notifications.orders}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, orders: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reviews">Review notifications</Label>
            <Switch
              id="reviews"
              checked={notifications.reviews}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, reviews: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing">Marketing notifications</Label>
            <Switch
              id="marketing"
              checked={notifications.marketing}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, marketing: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="system">System notifications</Label>
            <Switch
              id="system"
              checked={notifications.system}
              onCheckedChange={(checked) => 
                setNotifications(prev => ({ ...prev, system: checked }))
              }
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Store Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="holiday_mode">Holiday mode</Label>
            <Switch
              id="holiday_mode"
              checked={settings.holiday_mode}
              onCheckedChange={(checked) => 
                setSettings(prev => ({ ...prev, holiday_mode: checked }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="auto_accept">Auto-accept orders</Label>
            <Switch
              id="auto_accept"
              checked={settings.auto_accept_orders}
              onCheckedChange={(checked) => 
                setSettings(prev => ({ ...prev, auto_accept_orders: checked }))
              }
            />
          </div>
        </div>
      </Card>

      <Button onClick={handleSave} disabled={loading} className="w-full">
        {loading ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
};

export default Settings;
