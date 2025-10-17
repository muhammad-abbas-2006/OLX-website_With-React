import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://grdpokfywpqvporuxfry.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHBva2Z5d3BxdnBvcnV4ZnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzODc3NTEsImV4cCI6MjA2OTk2Mzc1MX0.vMX2To9Sa3ltrlnyOOZ_DGAO-tMhVumX08qiEQ2k6P8";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
