// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pjgziyhpxgpkfoopcyvi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZ3ppeWhweGdwa2Zvb3BjeXZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NDkzMzYsImV4cCI6MjA1MzIyNTMzNn0.Ad1cN15pszc1-UM9-lkZrI2FUHg0MD3FGGze9F-050E";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);