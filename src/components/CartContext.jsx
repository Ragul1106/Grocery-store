import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
      toast.warning('Please login to continue');
      return;
    }

    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        )
      );
      toast.success(`${product.name} quantity increased`);
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      if (item.quantity === 1) {
        toast.info(`${item.name} removed from cart`);
      } else {
        toast.info(`Reduced quantity of ${item.name}`);
      }
    }

    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      <>
        {children}
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      </>
    </CartContext.Provider>
  );
};
