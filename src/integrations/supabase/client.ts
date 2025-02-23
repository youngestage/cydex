
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ekptavgjepxdexhanolf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrcHRhdmdqZXB4ZGV4aGFub2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NzAzNTMsImV4cCI6MjA1NDE0NjM1M30.dyEf62Aszpm3J2jQRGI9KCxz1GO2aSOO5mZQvShKqv4";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    storage: window.localStorage,
  },
});
