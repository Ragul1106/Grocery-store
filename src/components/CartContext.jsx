import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const getLoggedInUserEmail = () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    try {
      const user = JSON.parse(loggedInUser);
      return user.email;
    } catch {
      return null;
    }
  }
  return null;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const email = getLoggedInUserEmail();
    if (email) {
      const allCarts = JSON.parse(localStorage.getItem('userCarts')) || {};
      return allCarts[email] || [];
    }
    return [];
  });

  useEffect(() => {
    const email = getLoggedInUserEmail();
    if (email) {
      const allCarts = JSON.parse(localStorage.getItem('userCarts')) || {};
      allCarts[email] = cartItems;
      localStorage.setItem('userCarts', JSON.stringify(allCarts));
    }
  }, [cartItems]);

  useEffect(() => {
    const handleStorageChange = () => {
      const email = getLoggedInUserEmail();
      if (!email) {
        setCartItems([]);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const addToCart = (product) => {
    const email = getLoggedInUserEmail();
    if (!email) {
      toast.warning(`You need to be logged in to add "${product.name}" to your cart`);
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
        <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />
      </>
    </CartContext.Provider>
  );
};
