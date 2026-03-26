// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Define el tipo de tu base de datos si tienes los tipos generados, 
// o déjalo genérico por ahora.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);