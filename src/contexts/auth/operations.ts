import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { fetchUserRole, handleRoleBasedRedirection } from "./utils";

export const signIn = async (
  email: string, 
  password: string,
  navigate: (path: string) => void
) => {
  try {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    const role = await fetchUserRole(data.user.id);
    if (role) {
      toast.success("Successfully signed in!");
      handleRoleBasedRedirection(role, navigate);
    }
  } catch (error: any) {
    console.error("Sign in error:", error);
    toast.error(error.message);
    throw error;
  }
};

export const signUp = async (
  email: string,
  password: string,
  fullName: string,
  phoneNumber: string,
  role: string
) => {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone_number: phoneNumber,
          role: role,
        },
      },
    });
    if (error) throw error;
    toast.success("Successfully signed up! Please check your email to verify your account.");
  } catch (error: any) {
    console.error("Sign up error:", error);
    toast.error(error.message);
    throw error;
  }
};

export const signOut = async (
  setSession: (session: any) => void,
  setUser: (user: any) => void,
  setUserRole: (role: any) => void,
  navigate: (path: string) => void
) => {
  try {
    console.log("Signing out...");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error:", error);
      throw error;
    }
    
    setSession(null);
    setUser(null);
    setUserRole(null);
    
    navigate("/");
    toast.success("Successfully signed out!");
  } catch (error: any) {
    console.error("Sign out error:", error);
    toast.error(error.message);
    throw error;
  }
};