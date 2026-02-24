import React, { createContext, useState, useContext, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add an item to the cart, starting with a quantity of 1 if it doesn't exist
    const addToCart = (plant) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === plant.id);
            if (existingItem) {
                return prevItems; // Already in cart, usually handled by disabling the button
            }
            return [...prevItems, { ...plant, quantity: 1 }];
        });
    };

    // Update quantity (increase or decrease)
    const updateQuantity = (plantId, amount) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === plantId) {
                    const newQuantity = item.quantity + amount;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(item => item.quantity > 0); // Crucial Logic: Automatically remove if quantity drops to 0 or below
        });
    };

    // Remove an item entirely regardless of quantity
    const removeFromCart = (plantId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== plantId));
    };

    // Computed total number of items
    const totalCartItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    // Computed total cost
    const totalCartCost = useMemo(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    const value = {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalCartItems,
        totalCartCost,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
