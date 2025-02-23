import { Session, User } from "@supabase/supabase-js";

export interface AuthContextType {
  session: Session | null;
  user: User | null;
  userRole: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, phoneNumber: string, role: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export type UserRole = 'customer' | 'vendor' | 'rider';