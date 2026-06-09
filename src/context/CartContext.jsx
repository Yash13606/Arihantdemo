import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'arihant-lights-cart';

const CartContext = createContext(null);

function normalizeItems(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => ({ ...item, quantity: Math.max(1, item.quantity ?? 1) }));
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(normalizeItems(JSON.parse(saved)));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const getQuantity = (id) => items.find((p) => p.id === id)?.quantity ?? 0;

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const incrementItem = (id) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decrementItem = (id) => {
    setItems((prev) => {
      const item = prev.find((p) => p.id === id);
      if (!item) return prev;
      if (item.quantity <= 1) return prev.filter((p) => p.id !== id);
      return prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setItems([]);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo(
    () => ({
      items,
      count,
      drawerOpen,
      setDrawerOpen,
      getQuantity,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
    }),
    [items, count, drawerOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
