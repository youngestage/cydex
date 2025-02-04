import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { AuthContextType } from "./auth/types";
import { fetchUserRole, handleAuthStateChange } from "./auth/utils";
import { signIn as authSignIn, signUp as authSignUp, signOut as authSignOut } from "./auth/operations";
import { toast } from "sonner";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true);
        console.log("Initializing auth state...");
        
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        console.log("Initial session:", initialSession);
        
        if (initialSession) {
          setSession(initialSession);
          setUser(initialSession.user);
          const role = await fetchUserRole(initialSession.user.id);
          console.log("Initial user role:", role);
          setUserRole(role);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        toast.error("Error loading user data");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        await handleAuthStateChange(
          event,
          currentSession,
          setSession,
          setUser,
          setUserRole,
          setLoading,
          navigate
        );
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      await authSignIn(email, password, navigate);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName: string, phoneNumber: string, role: string) => {
    setLoading(true);
    try {
      await authSignUp(email, password, fullName, phoneNumber, role);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await authSignOut(setSession, setUser, setUserRole, navigate);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    session,
    user,
    userRole,
    signIn,
    signUp,
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}