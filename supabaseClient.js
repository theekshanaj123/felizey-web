// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Lazy initialization to avoid build-time errors
let supabaseInstance = null;

export const supabase = (() => {
  if (!supabaseInstance && supabaseUrl && supabaseKey) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey);
  }
  return supabaseInstance || createClient(supabaseUrl, supabaseKey);
})();
