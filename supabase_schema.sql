-- Script para crear la tabla de productos en Supabase (SQL Editor)
-- Copia y pega este contenido en el SQL Editor de tu proyecto en Supabase

CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  price_in_cents BIGINT NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'COP',
  image TEXT,
  category TEXT DEFAULT 'Proteínas',
  ribbon_text TEXT,
  purchasable BOOLEAN DEFAULT true,
  stock INT DEFAULT 50,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública (cualquier usuario puede ver los productos)
CREATE POLICY "Permitir lectura publica de productos" 
  ON public.products FOR SELECT 
  USING (true);

-- Políticas de escritura (permite insertar, actualizar y eliminar)
CREATE POLICY "Permitir creacion de productos" 
  ON public.products FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Permitir actualizacion de productos" 
  ON public.products FOR UPDATE 
  USING (true);

CREATE POLICY "Permitir eliminacion de productos" 
  ON public.products FOR DELETE 
  USING (true);

-- Insertar productos iniciales de prueba (Colombia)
INSERT INTO public.products (title, subtitle, description, price_in_cents, currency, image, category, ribbon_text, purchasable, stock)
VALUES 
  ('100% Whey Protein Isolate 5lb', 'Proteína aislada de máxima pureza 25g proteína por servida', 'Proteína de suero de leche de digestión rápida con cero azúcar añadida y perfil completo de aminoácidos.', 32000000, 'COP', 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800', 'Proteínas', 'MÁS VENDIDO', true, 35),
  ('Creatina Monohidratada 500g Ultra Pura', '100 dosis sin sabor micronizada 100% pura', 'Aumenta tu fuerza, potencia muscular y aceleración en entrenamientos de alta intensidad.', 14500000, 'COP', 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800', 'Creatinas', 'OFERTA TOP', true, 50),
  ('Pre-Workout Nitro Explosion 30 Servidas', 'Fórmula avanzada de energía focalizada y bombeo', 'Increíble enfoque mental, resistencia prolongada y vasodilation con beta-alanina y cafeína pura.', 16000000, 'COP', 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=800', 'Pre-Entreno', 'NUEVO', true, 20),
  ('BCAA 2:1:1 Recuperador Muscular 400g', 'Aminoácidos ramificados sabor Frutos Rojos', 'Previene el catabolismo muscular durante el entrenamiento y acelera la recuperación magra.', 11500000, 'COP', 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800', 'Aminoácidos', NULL, true, 40),
  ('Mass Gainer Hyper Bulk 10lb', 'Ganador de masa hipercalórico con 50g proteína', 'Formulado para atletas que buscan incrementar peso corporal y masa muscular de forma efectiva.', 28000000, 'COP', 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800', 'Proteínas', 'RECOMENDADO', true, 15);
