const medusaUrl = import.meta.env.VITE_MEDUSA_BACKEND_URL || 'http://localhost:9000';

export const isMedusaConfigured = Boolean(import.meta.env.VITE_MEDUSA_BACKEND_URL);

export const medusa = {
  products: {
    list: async () => {
      const res = await fetch(`${medusaUrl}/store/products`);
      if (!res.ok) throw new Error(`Medusa API Error: ${res.status}`);
      return res.json();
    },
    retrieve: async (id) => {
      const res = await fetch(`${medusaUrl}/store/products/${id}`);
      if (!res.ok) throw new Error(`Medusa API Error: ${res.status}`);
      return res.json();
    }
  },
  collections: {
    list: async () => {
      const res = await fetch(`${medusaUrl}/store/collections`);
      if (!res.ok) throw new Error(`Medusa API Error: ${res.status}`);
      return res.json();
    }
  }
};
