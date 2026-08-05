import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { medusa, isMedusaConfigured } from '@/lib/medusa';

// Datos iniciales de respaldo para catálogo en Colombia (Evita errores HTTP 404)
const INITIAL_PRODUCTS = [
  {
    id: "prod-1",
    title: "100% Whey Protein Isolate 5lb",
    subtitle: "Proteína aislada de máxima pureza 25g proteína por servida",
    ribbon_text: "MÁS VENDIDO",
    description: "Proteína de suero de leche de digestión ultra rápida con cero azúcar añadida y perfil completo de aminoácidos esenciales.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800",
    price_in_cents: 32000000,
    currency: "COP",
    purchasable: true,
    category: "Proteínas",
    order: 1,
    images: [{ url: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800", order: 1, type: "main" }],
    options: [],
    variants: [{ id: "var-1", title: "Vainilla Gourmet 5lb", price_in_cents: 32000000, currency: "COP", inventory_quantity: 35, manage_inventory: true }],
    additional_info: [{ id: "info-1", order: 1, title: "Modo de Uso", description: "Mezclar 1 scoop (30g) en 250ml de agua o leche descremada después del entrenamiento." }]
  },
  {
    id: "prod-2",
    title: "Creatina Monohidratada 500g Ultra Pura",
    subtitle: "100 dosis sin sabor micronizada 100% pura",
    ribbon_text: "OFERTA TOP",
    description: "Aumenta la fuerza explosiva, la potencia muscular y acelera la recuperación magra en cada entrenamiento.",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800",
    price_in_cents: 14500000,
    currency: "COP",
    purchasable: true,
    category: "Creatinas",
    order: 2,
    images: [{ url: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800", order: 1, type: "main" }],
    options: [],
    variants: [{ id: "var-2", title: "Unflavored / Sin Sabor 500g", price_in_cents: 14500000, currency: "COP", inventory_quantity: 50, manage_inventory: true }],
    additional_info: [{ id: "info-2", order: 1, title: "Beneficios Clave", description: "Incremento comprobado de fuerza y volumen muscular sin retención de agua subcutánea." }]
  },
  {
    id: "prod-3",
    title: "Pre-Workout Nitro Explosion 30 Servidas",
    subtitle: "Fórmula avanzada de energía focalizada y bombeo",
    ribbon_text: "NUEVO",
    description: "Incrementa el enfoque mental, la resistencia muscular y el bombeo sanguíneo con Beta-Alanina y Citrulina Malato.",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=800",
    price_in_cents: 16000000,
    currency: "COP",
    purchasable: true,
    category: "Pre-Entreno",
    order: 3,
    images: [{ url: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=800", order: 1, type: "main" }],
    options: [],
    variants: [{ id: "var-3", title: "Blue Raspberry 30 Servidas", price_in_cents: 16000000, currency: "COP", inventory_quantity: 20, manage_inventory: true }],
    additional_info: [{ id: "info-3", order: 1, title: "Modo de Uso", description: "Tomar 1 scoop 20-30 minutos antes del entrenamiento intenso." }]
  },
  {
    id: "prod-4",
    title: "BCAA 2:1:1 Recuperador Muscular 400g",
    subtitle: "Aminoácidos ramificados sabor Frutos Rojos",
    ribbon_text: null,
    description: "Previene el catabolismo durante rutinas exigentes y estimula la síntesis proteica de manera rápida.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    price_in_cents: 11500000,
    currency: "COP",
    purchasable: true,
    category: "Aminoácidos",
    order: 4,
    images: [{ url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800", order: 1, type: "main" }],
    options: [],
    variants: [{ id: "var-4", title: "Fruit Punch 400g", price_in_cents: 11500000, currency: "COP", inventory_quantity: 40, manage_inventory: true }],
    additional_info: []
  },
  {
    id: "prod-5",
    title: "Mass Gainer Hyper Bulk 10lb",
    subtitle: "Ganador de masa hipercalórico con 50g proteína",
    ribbon_text: "RECOMENDADO",
    description: "Diseñado para atletas ectomorfos que requieren un aporte calórico limpio para aumentar peso de forma estructurada.",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800",
    price_in_cents: 28000000,
    currency: "COP",
    purchasable: true,
    category: "Proteínas",
    order: 5,
    images: [{ url: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800", order: 1, type: "main" }],
    options: [],
    variants: [{ id: "var-5", title: "Chocolate Rich 10lb", price_in_cents: 28000000, currency: "COP", inventory_quantity: 15, manage_inventory: true }],
    additional_info: []
  }
];

// Estado local reactivo en memoria
let localProducts = [...INITIAL_PRODUCTS];

export const formatCurrency = (priceInCents, currencyInfo) => {
  if (priceInCents === null || priceInCents === undefined) return "$0 COP";
  const amount = Math.round(priceInCents / 100);
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
};

// Formatea precio de variante
const formatVariantPrice = (priceInCents) => {
  if (!priceInCents) return null;
  const amount = Math.round(priceInCents / 100);
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
};

// Normaliza una variante con campos de formato
const normalizeVariant = (v, fallbackTitle, fallbackPrice, fallbackStock) => {
  const price = Number(v.price_in_cents || fallbackPrice || 0);
  const salePrice = v.sale_price_in_cents || null;
  return {
    id: v.id || `var-auto`,
    title: v.title || fallbackTitle || 'Default',
    image_url: v.image_url || null,
    sku: v.sku || null,
    price_in_cents: price,
    sale_price_in_cents: salePrice,
    currency: v.currency || 'COP',
    currency_info: v.currency_info || null,
    price_formatted: formatVariantPrice(price),
    sale_price_formatted: formatVariantPrice(salePrice),
    manage_inventory: v.manage_inventory ?? true,
    weight: v.weight || null,
    options: v.options || [],
    inventory_quantity: v.inventory_quantity ?? fallbackStock ?? 20,
  };
};

// Mapeador para estructurar los datos según el formato de la UI
const mapProductData = (item) => {
  const priceInCents = Number(item.price_in_cents || 0);
  const imageUrl = item.image || item.thumbnail || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800';

  const rawVariants = (item.variants && item.variants.length > 0)
    ? item.variants
    : [{ id: `var-${item.id}`, title: item.title, price_in_cents: priceInCents, inventory_quantity: item.stock ?? 20, manage_inventory: true }];

  return {
    id: String(item.id),
    title: item.title || "Producto Suplemento",
    subtitle: item.subtitle || "",
    ribbon_text: item.ribbon_text || null,
    description: item.description || "",
    image: imageUrl,
    price_in_cents: priceInCents,
    currency: item.currency || "COP",
    purchasable: item.purchasable ?? true,
    category: item.category || "Proteínas",
    order: item.order || 1,
    site_product_selection: null,
    images: Array.isArray(item.images) && item.images.length > 0 ? item.images : [{ url: imageUrl, order: 1, type: "main" }],
    options: item.options || [],
    variants: rawVariants.map(v => normalizeVariant(v, item.title, priceInCents, item.stock)),
    collections: item.collections || [],
    additional_info: item.additional_info || [],
    type: item.type || { value: '' },
    custom_fields: item.custom_fields || [],
    related_products: item.related_products || [],
    updated_at: item.updated_at || new Date().toISOString(),
  };
};

// Mapea la estructura de MedusaJS a la estructura esperada por nuestra UI
const mapMedusaProduct = (medusaProduct) => {
  const defaultVariant = medusaProduct.variants?.[0];
  const priceInCents = defaultVariant?.prices?.[0]?.amount || 0;
  
  return {
    id: medusaProduct.id,
    title: medusaProduct.title,
    subtitle: medusaProduct.subtitle || "",
    ribbon_text: medusaProduct.status === 'proposed' ? 'PRE-ORDEN' : null,
    description: medusaProduct.description || "",
    image: medusaProduct.thumbnail || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800',
    price_in_cents: priceInCents,
    currency: defaultVariant?.prices?.[0]?.currency_code?.toUpperCase() || 'COP',
    purchasable: true,
    category: medusaProduct.collection?.title || "Suplementos",
    order: 1,
    images: (medusaProduct.images || []).map((img, i) => ({ url: img.url, order: i + 1, type: "gallery" })),
    options: medusaProduct.options || [],
    variants: (medusaProduct.variants || []).map(v => ({
      id: v.id,
      title: v.title,
      price_in_cents: v.prices?.[0]?.amount || 0,
      currency: v.prices?.[0]?.currency_code?.toUpperCase() || 'COP',
      inventory_quantity: v.inventory_quantity || 10,
      manage_inventory: v.manage_inventory ?? true
    })).map(v => normalizeVariant(v, medusaProduct.title, priceInCents, 10)),
    collections: [],
    additional_info: []
  };
};

/**
 * Obtiene el listado de productos desde MedusaJS, Supabase o local
 */
export async function getProducts() {
  // 1. Intentar con MedusaJS si está configurado
  if (isMedusaConfigured && medusa) {
    try {
      const { products } = await medusa.products.list();
      if (products && products.length > 0) {
        return {
          count: products.length,
          offset: 0,
          limit: products.length,
          products: products.map(mapMedusaProduct)
        };
      }
    } catch (e) {
      console.warn("MedusaJS query failed, falling back to Supabase/Local:", e);
    }
  }

  // 2. Intentar con Supabase
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return {
          count: data.length,
          offset: 0,
          limit: data.length,
          products: data.map(mapProductData)
        };
      }
    } catch (e) {
      console.warn("Supabase query warning, falling back to local dataset:", e);
    }
  }

  // 3. Respaldo local
  return {
    count: localProducts.length,
    offset: 0,
    limit: localProducts.length,
    products: localProducts.map(mapProductData)
  };
}

/**
 * Obtiene un producto individual por ID
 */
export async function getProduct(id) {
  // 1. Intentar con MedusaJS
  if (isMedusaConfigured && medusa) {
    try {
      const { product } = await medusa.products.retrieve(id);
      if (product) {
        return mapMedusaProduct(product);
      }
    } catch (e) {
      console.warn("MedusaJS fetch single product failed:", e);
    }
  }

  // 2. Intentar con Supabase
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (!error && data) {
        return mapProductData(data);
      }
    } catch (e) {
      console.warn("Supabase single product fetch warning:", e);
    }
  }

  // 3. Local
  const found = localProducts.find((p) => String(p.id) === String(id));
  return mapProductData(found || localProducts[0]);
}

/**
 * Categorías disponibles
 */
export async function getCategories() {
  // 1. Intentar con MedusaJS
  if (isMedusaConfigured && medusa) {
    try {
      const { collections } = await medusa.collections.list();
      if (collections && collections.length > 0) {
        return {
          categories: collections.map(col => ({
            id: col.id,
            title: col.title,
            image_url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800'
          })),
          count: collections.length
        };
      }
    } catch (e) {
      console.warn("MedusaJS collections fetch failed:", e);
    }
  }

  const { products } = await getProducts();
  const categoriesMap = new Map();

  products.forEach((p) => {
    const cat = p.category || "Proteínas";
    if (!categoriesMap.has(cat)) {
      categoriesMap.set(cat, {
        id: cat.toLowerCase().replace(/\s+/g, '-'),
        title: cat,
        image_url: p.image
      });
    }
  });

  const categories = Array.from(categoriesMap.values());
  return { categories, count: categories.length };
}

/**
 * Crear un producto (Admin)
 */
export async function createProduct(productData) {
  const newProduct = {
    title: productData.title,
    subtitle: productData.subtitle || "",
    description: productData.description || "",
    price_in_cents: Number(productData.price_in_cents || 0),
    currency: "COP",
    image: productData.image || "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800",
    category: productData.category || "Proteínas",
    ribbon_text: productData.ribbon_text || null,
    purchasable: productData.purchasable ?? true,
    stock: Number(productData.stock || 20)
  };

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('products').insert([newProduct]).select().single();
    if (error) {
      throw new Error(`Error en Supabase: ${error.message}`);
    }
    return mapProductData(data);
  }

  // Guardar localmente si no hay Supabase aún
  const createdLocal = {
    ...newProduct,
    id: `prod-${Date.now()}`
  };
  localProducts.unshift(createdLocal);
  return mapProductData(createdLocal);
}

/**
 * Actualizar un producto (Admin)
 */
export async function updateProduct(id, productData) {
  const updateFields = {
    title: productData.title,
    subtitle: productData.subtitle,
    description: productData.description,
    price_in_cents: Number(productData.price_in_cents || 0),
    image: productData.image,
    category: productData.category,
    ribbon_text: productData.ribbon_text,
    purchasable: productData.purchasable,
    stock: Number(productData.stock || 20),
    updated_at: new Date().toISOString()
  };

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from('products').update(updateFields).eq('id', id).select().single();
    if (error) {
      throw new Error(`Error actualizando en Supabase: ${error.message}`);
    }
    return mapProductData(data);
  }

  const index = localProducts.findIndex((p) => String(p.id) === String(id));
  if (index !== -1) {
    localProducts[index] = { ...localProducts[index], ...updateFields };
    return mapProductData(localProducts[index]);
  }
  throw new Error("Producto no encontrado localmente.");
}

/**
 * Eliminar un producto (Admin)
 */
export async function deleteProduct(id) {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) {
      throw new Error(`Error eliminando en Supabase: ${error.message}`);
    }
    return true;
  }

  localProducts = localProducts.filter((p) => String(p.id) === String(id));
  return true;
}

/**
 * Obtiene cantidades de inventario para variantes de productos (compatibilidad hacia atrás)
 */
export async function getProductQuantities({ fields, product_ids }) {
  const { products } = await getProducts();
  const filteredProducts = product_ids
    ? products.filter(p => product_ids.includes(String(p.id)))
    : products;

  const variants = [];
  filteredProducts.forEach(p => {
    (p.variants || []).forEach(v => {
      variants.push({ id: v.id, inventory_quantity: v.inventory_quantity ?? 20 });
    });
  });

  return { variants };
}

export async function initializeCheckout({ items, successUrl, cancelUrl }) {
  return { url: successUrl || '#' };
}
