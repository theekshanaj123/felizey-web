// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// const supabaseUrl="https://votcesciwpymmsijdcvm.supabase.co"
// const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdGNlc2Npd3B5bW1zaWpkY3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMTM3MTIsImV4cCI6MjA0Njg4OTcxMn0.DbmusW50_WzvSeWDmF2XeB1PR6bMIbiAg4_cqSjKv5c"

export const supabase = createClient(supabaseUrl, supabaseKey);
