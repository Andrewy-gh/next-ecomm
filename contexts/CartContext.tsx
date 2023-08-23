"use client";
import {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  useCallback,
} from "react";

interface CartContextValue {
  items: CartItem[];
  addItem: (price: { id: string }) => void;
  removeOneItem: (id: string) => void;
  removeItem: (id: string) => void;
  resetCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null!);

export const useCart = () => useContext(CartContext);

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const key = `STRIPE_CART_ITEMS`;
  const firstRender = useRef(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      const localItems = loadJSON(key);
      localItems && setItems(localItems);
      return;
    }
    saveJSON(key, items);
  }, [key, items]);

  const addItem = useCallback(
    (price) =>
      setItems((prices) => {
        const existingItemIndex = prices.findIndex(
          (item) => item.price.id === price.id
        );
        if (existingItemIndex !== -1) {
          const updatedPrices = [...prices];
          updatedPrices[existingItemIndex] = {
            ...updatedPrices[existingItemIndex],
            quantity: updatedPrices[existingItemIndex].quantity + 1,
          };
          return updatedPrices;
        } else {
          return [...prices, { price, quantity: 1 }];
        }
      }),
    []
  );

  const removeOneItem = useCallback(
    (id) =>
      setItems((prices) =>
        prices.map((item) =>
          item.price.id === id ? { ...item, quantity: item.quantity-- } : item
        )
      ),
    []
  );

  const removeItem = useCallback(
    (id) => setItems((prices) => prices.filter((item) => item.price.id !== id)),
    []
  );

  const resetCart = useCallback(() => setItems([]), []);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeOneItem, removeItem, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
