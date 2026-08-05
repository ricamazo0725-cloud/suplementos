import React, { useState, useEffect } from 'react';
import { 
  Plus, Edit, Trash2, Database, CheckCircle2, AlertTriangle, 
  Search, RefreshCw, Package, Tag, DollarSign, Layers, Eye, X, Copy, Check
} from 'lucide-react';
import { getProducts, createProduct, updateProduct, deleteProduct, formatCurrency } from '@/api/EcommerceApi';
import { isSupabaseConfigured } from '@/lib/supabase';
import { isMedusaConfigured } from '@/lib/medusa';

const CATEGORIES = ["Proteínas", "Creatinas", "Pre-Entreno", "Aminoácidos", "Vitaminas y Salud", "Accesorios"];

const EMPTY_FORM = {
  title: '',
  subtitle: '',
  category: 'Proteínas',
  price: '',
  image: '',
  ribbon_text: '',
  stock: '25',
  description: '',
  purchasable: true
};

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  // Modales
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [showSqlModal, setShowSqlModal] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const fetchProductList = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProducts();
      setProducts(res.products || []);
    } catch (err) {
      setError(err.message || 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const handleOpenCreateModal = () => {
    setEditingId(null);
    setFormData(EMPTY_FORM);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setEditingId(product.id);
    const priceInPesos = Math.round(product.price_in_cents / 100);
    setFormData({
      title: product.title || '',
      subtitle: product.subtitle || '',
      category: product.category || 'Proteínas',
      price: priceInPesos ? String(priceInPesos) : '',
      image: product.image || '',
      ribbon_text: product.ribbon_text || '',
      stock: product.variants?.[0]?.inventory_quantity ? String(product.variants[0].inventory_quantity) : '20',
      description: product.description || '',
      purchasable: product.purchasable ?? true
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("Ingresa el título del producto");
      return;
    }
    const priceNumber = parseFloat(formData.price.replace(/[^0-9.]/g, '')) || 0;
    const priceInCents = Math.round(priceNumber * 100);

    setSubmitting(true);
    try {
      const payload = {
        title: formData.title,
        subtitle: formData.subtitle,
        category: formData.category,
        price_in_cents: priceInCents,
        image: formData.image || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800',
        ribbon_text: formData.ribbon_text || null,
        stock: parseInt(formData.stock) || 20,
        description: formData.description,
        purchasable: formData.purchasable
      };

      if (editingId) {
        await updateProduct(editingId, payload);
      } else {
        await createProduct(payload);
      }

      setIsModalOpen(false);
      fetchProductList();
    } catch (err) {
      alert(`Error al guardar: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`¿Estás seguro de eliminar el producto "${title}"?`)) return;
    try {
      await deleteProduct(id);
      fetchProductList();
    } catch (err) {
      alert(`Error al eliminar: ${err.message}`);
    }
  };

  const sqlCode = `-- Copia y pega en el SQL Editor de tu proyecto en Supabase:
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
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lectura publica" ON public.products FOR SELECT USING (true);
CREATE POLICY "Escritura publica" ON public.products FOR INSERT WITH CHECK (true);
CREATE POLICY "Actualizacion publica" ON public.products FOR UPDATE USING (true);
CREATE POLICY "Eliminacion publica" ON public.products FOR DELETE USING (true);`;

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(sqlCode);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalStock = products.reduce((acc, p) => acc + (p.variants?.[0]?.inventory_quantity || 20), 0);
  const avgPrice = products.length ? Math.round(products.reduce((acc, p) => acc + p.price_in_cents, 0) / products.length) : 0;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-foreground p-4 sm:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/80 pb-6">
          <div>
            <h1 className="font-display text-3xl font-extrabold tracking-wide text-foreground">
              ADMINISTRADOR DE <span className="text-primary">PRODUCTOS</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Gestiona el catálogo de suplementos, precios, stock y sincronización con Supabase.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSqlModal(true)}
              className="flex items-center gap-2 rounded border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition"
            >
              <Database size={16} className="text-accent" /> Configurar Supabase SQL
            </button>
            <button
              onClick={handleOpenCreateModal}
              className="flex items-center gap-2 rounded bg-primary px-5 py-2.5 font-display font-bold text-primary-foreground hover:opacity-90 transition active:scale-95"
            >
              <Plus size={18} /> Nuevo Producto
            </button>
          </div>
        </div>

        {/* Database Status Notification Banner */}
        <div className={`flex items-center justify-between rounded-lg border p-4 text-sm ${
          isMedusaConfigured
            ? 'border-blue-500/30 bg-blue-950/20 text-blue-300'
            : isSupabaseConfigured 
              ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300'
              : 'border-amber-500/30 bg-amber-950/20 text-amber-300'
        }`}>
          <div className="flex items-center gap-3">
            {isMedusaConfigured ? (
              <Database size={20} className="text-blue-400 shrink-0" />
            ) : isSupabaseConfigured ? (
              <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
            ) : (
              <AlertTriangle size={20} className="text-amber-400 shrink-0" />
            )}
            <div>
              <p className="font-bold">
                {isMedusaConfigured 
                  ? 'MedusaJS Conectado' 
                  : isSupabaseConfigured 
                    ? 'Supabase Conectado' 
                    : 'Modo Datos Locales Activo'}
              </p>
              <p className="text-xs opacity-90 mt-0.5">
                {isMedusaConfigured
                  ? 'Cargando y sincronizando catálogo directamente desde tu servidor de MedusaJS.'
                  : isSupabaseConfigured 
                    ? 'Los cambios de productos se sincronizan en tiempo real con la base de datos Supabase.' 
                    : 'Para conectar una base de datos, añade VITE_SUPABASE_URL (Supabase) o VITE_MEDUSA_BACKEND_URL (MedusaJS) en tus variables de entorno.'}
              </p>
            </div>
          </div>
          <button 
            onClick={fetchProductList}
            className="flex items-center gap-1.5 rounded bg-background/40 px-3 py-1.5 text-xs font-semibold hover:bg-background/80 transition"
          >
            <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Actualizar
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="glass-card rounded-lg p-5">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs uppercase font-semibold">Total Productos</span>
              <Package size={18} className="text-primary" />
            </div>
            <p className="font-display text-3xl font-extrabold text-foreground mt-2">{products.length}</p>
          </div>
          <div className="glass-card rounded-lg p-5">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs uppercase font-semibold">Inventario Total</span>
              <Layers size={18} className="text-accent" />
            </div>
            <p className="font-display text-3xl font-extrabold text-foreground mt-2">{totalStock} unidades</p>
          </div>
          <div className="glass-card rounded-lg p-5">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs uppercase font-semibold">Categorías</span>
              <Tag size={18} className="text-blue-400" />
            </div>
            <p className="font-display text-3xl font-extrabold text-foreground mt-2">{CATEGORIES.length}</p>
          </div>
          <div className="glass-card rounded-lg p-5">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs uppercase font-semibold">Precio Promedio</span>
              <DollarSign size={18} className="text-emerald-400" />
            </div>
            <p className="font-display text-2xl font-extrabold text-foreground mt-2">
              {formatCurrency(avgPrice)}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Buscar producto por nombre o categoría..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded border border-border bg-card pl-9 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('Todas')}
              className={`rounded px-3 py-1.5 text-xs font-bold transition ${
                selectedCategory === 'Todas' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              Todas
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded px-3 py-1.5 text-xs font-bold transition ${
                  selectedCategory === cat 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Table */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {loading ? (
            <div className="p-12 text-center text-muted-foreground">
              <RefreshCw className="mx-auto h-8 w-8 animate-spin text-primary mb-2" />
              Cargando catálogo...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <Package className="mx-auto h-10 w-10 text-muted-foreground/50 mb-3" />
              <p className="font-bold text-foreground">No se encontraron productos</p>
              <p className="text-xs mt-1">Prueba cambiando el filtro o agrega un nuevo suplemento.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-muted/40 font-display text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3.5">Producto</th>
                    <th className="px-4 py-3.5">Categoría</th>
                    <th className="px-4 py-3.5">Precio (COP)</th>
                    <th className="px-4 py-3.5 text-center">Stock</th>
                    <th className="px-4 py-3.5 text-center">Estado</th>
                    <th className="px-4 py-3.5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-muted/20 transition">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="h-12 w-12 rounded object-cover border border-border/80 bg-background"
                          />
                          <div>
                            <p className="font-bold text-foreground line-clamp-1">{p.title}</p>
                            {p.ribbon_text && (
                              <span className="inline-block rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                                {p.ribbon_text}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="rounded border border-border bg-background px-2.5 py-1 text-xs font-semibold">
                          {p.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-display font-bold text-foreground text-base">
                        {formatCurrency(p.price_in_cents)}
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-foreground">
                        {p.variants?.[0]?.inventory_quantity ?? 20}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          p.purchasable 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          {p.purchasable ? 'Disponible' : 'Agotado'}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditModal(p)}
                            className="rounded p-2 text-muted-foreground hover:bg-primary/20 hover:text-primary transition"
                            title="Editar producto"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(p.id, p.title)}
                            className="rounded p-2 text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition"
                            title="Eliminar producto"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Modal Crear/Editar Producto */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-lg border border-border bg-card p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-display text-xl font-bold text-foreground">
                {editingId ? 'EDITAR PRODUCTO' : 'NUEVO PRODUCTO'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                  Nombre del Producto *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ej. Creatina Monohidratada 500g"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                    Categoría
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                    Precio en COP * ($)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="ej. 145000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-display font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                    Etiqueta Destacada
                  </label>
                  <input
                    type="text"
                    placeholder="ej. MÁS VENDIDO, 20% OFF"
                    value={formData.ribbon_text}
                    onChange={(e) => setFormData({ ...formData, ribbon_text: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                    Stock / Unidades
                  </label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                  URL de Imagen
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-muted-foreground mb-1">
                  Descripción Corta / Especificaciones
                </label>
                <textarea
                  rows={3}
                  placeholder="Detalles sobre beneficios, porciones y modo de uso..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="purchasable"
                  checked={formData.purchasable}
                  onChange={(e) => setFormData({ ...formData, purchasable: e.target.checked })}
                  className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary"
                />
                <label htmlFor="purchasable" className="text-xs font-semibold text-foreground">
                  Disponible para la venta en el catálogo
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded border border-border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded bg-primary px-5 py-2 text-xs font-display font-bold text-primary-foreground hover:opacity-90 transition disabled:opacity-50"
                >
                  {submitting ? 'Guardando...' : editingId ? 'Guardar Cambios' : 'Crear Producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal SQL Supabase */}
      {showSqlModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-lg border border-border bg-card p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <Database className="text-accent" size={18} /> CONFIGURACIÓN SQL SUPABASE
              </h3>
              <button onClick={() => setShowSqlModal(false)} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Ingresa a tu proyecto en **Supabase** -> **SQL Editor**, pega el siguiente código y presiona **Run** para crear la tabla de productos:
            </p>

            <div className="relative rounded border border-border bg-[#050505] p-4 text-xs font-mono text-muted-foreground overflow-x-auto max-h-64">
              <pre>{sqlCode}</pre>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={copySqlToClipboard}
                className="flex items-center gap-2 rounded bg-primary/20 px-4 py-2 text-xs font-bold text-primary hover:bg-primary/30 transition"
              >
                {copiedSql ? <Check size={14} /> : <Copy size={14} />}
                {copiedSql ? '¡Copiado al portapapeles!' : 'Copiar Código SQL'}
              </button>

              <button
                onClick={() => setShowSqlModal(false)}
                className="rounded border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPage;
