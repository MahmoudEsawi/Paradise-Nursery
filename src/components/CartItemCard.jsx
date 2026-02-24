import React from 'react';
import { useCart } from '../context/CartContext';
import './CartItemCard.css';

const CartItemCard = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    const handleIncrement = () => {
        updateQuantity(item.id, 1);
    };

    const handleDecrement = () => {
        updateQuantity(item.id, -1);
    };

    return (
        <div className="cart-item-card">
            <img src={item.thumbnail} alt={item.name} className="cart-item-image" />

            <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-controls">
                <button onClick={handleDecrement} className="qty-btn">-</button>
                <span className="qty-display">{item.quantity}</span>
                <button onClick={handleIncrement} className="qty-btn">+</button>
            </div>

            <div className="cart-item-subtotal">
                <p>Subtotal: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
            </div>

            <button
                className="delete-item-btn"
                onClick={() => removeFromCart(item.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default CartItemCard;
