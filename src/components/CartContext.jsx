import React, { createContext, useState, useEffect } from 'react';

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
  const existingItem = cartItems.find(item =>
    item.id === product.id &&
    item.category === product.category &&
    item.weight === product.weight
  );

  if (existingItem) {
    setCartItems(prev =>
      prev.map(item =>
        item.id === product.id &&
        item.category === product.category &&
        item.weight === product.weight
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  } else {
    setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
  }
};


  const removeFromCart = (id) => {
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
      {children}
    </CartContext.Provider>
  );
};
