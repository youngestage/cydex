import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const fetchUserRole = async (userId: string) => {
  try {
    console.log("Fetching user role for:", userId);
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching user role:', error);
      throw error;
    }
    
    console.log("Fetched user role:", data?.role);
    return data?.role;
  } catch (error) {
    console.error('Error in fetchUserRole:', error);
    return null;
  }
};

export const handleRoleBasedRedirection = (role: string | null, navigate: (path: string) => void) => {
  console.log("Handling role-based redirection for role:", role);
  switch (role) {
    case 'vendor':
      navigate('/vendor');
      break;
    case 'rider':
      navigate('/rider');
      break;
    case 'customer':
      navigate('/store');
      break;
    default:
      navigate('/');
  }
};

export const handleAuthStateChange = async (
  event: string,
  currentSession: any,
  setSession: (session: any) => void,
  setUser: (user: any) => void,
  setUserRole: (role: string | null) => void,
  setLoading: (loading: boolean) => void,
  navigate: (path: string) => void
) => {
  console.log("Auth state changed:", event, currentSession);
  
  try {
    if (currentSession) {
      setSession(currentSession);
      setUser(currentSession.user);
      
      const role = await fetchUserRole(currentSession.user.id);
      console.log("Setting user role to:", role);
      setUserRole(role);
      
      if (event === 'SIGNED_IN') {
        handleRoleBasedRedirection(role, navigate);
      }
    } else {
      console.log("No session found, clearing auth state");
      setSession(null);
      setUser(null);
      setUserRole(null);
    }
  } catch (error) {
    console.error("Error handling auth state change:", error);
    toast.error("Error loading user data");
  } finally {
    setLoading(false);
  }
};