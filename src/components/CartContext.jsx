import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setCurrentUser(user);

    if (user) {
      const userCart = localStorage.getItem(`cart_${user}`);
      setCartItems(userCart ? JSON.parse(userCart) : []);
    } else {
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser}`, JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

  const addToCart = (product) => {
    if (!currentUser) {
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

  const clearCart = () => {
    if (currentUser) {
      localStorage.removeItem(`cart_${currentUser}`);
    }
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      <>
        {children}
        <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />
      </>
    </CartContext.Provider>
  );
};
