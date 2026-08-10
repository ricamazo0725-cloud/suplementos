import { createClient } from '@supabase/supabase-js';

// Respaldo directo: la anon key de Supabase está diseñada para ser pública
// (la seguridad real la dan las políticas RLS, no el secreto de esta llave),
// así que es seguro tenerla aquí como último recurso si las variables de
// entorno del hosting no llegan a estar disponibles en el build.
const FALLBACK_SUPABASE_URL = 'https://lejipsqguyjzryotljdu.supabase.co';
const FALLBACK_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlamlwc3FndXlqenJ5b3RsamR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4ODU2NjIsImV4cCI6MjEwMTQ2MTY2Mn0.ohWSbj9x3NucEgESVrJDDuKXVz1MPjuGtv70H-0s_S4';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || FALLBACK_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.error(
    'Faltan las variables de entorno VITE_SUPABASE_URL y/o VITE_SUPABASE_ANON_KEY. ' +
    'Crea un archivo .env en la raíz del proyecto (apps/web/.env) con esos valores. ' +
    'Revisa apps/web/.env.example.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
