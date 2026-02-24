import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItemCard from '../components/CartItemCard';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, totalCartItems, totalCartCost } = useCart();

    return (
        <div className="cart-page">
            <Header />

            <main className="cart-main-content">
                <h2 className="page-title">Your Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <div className="empty-cart-message">
                        <p>Your cart is empty.</p>
                        <Link to="/products" className="continue-shopping-btn">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="cart-container">
                        <div className="cart-items-list">
                            {cartItems.map((item) => (
                                <CartItemCard key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-row">
                                <span>Total Items:</span>
                                <span>{totalCartItems}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total Cost:</span>
                                <span>${totalCartCost.toFixed(2)}</span>
                            </div>

                            <div className="summary-actions">
                                <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>
                                    Checkout
                                </button>
                                <Link to="/products" className="continue-shopping-btn outline">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CartPage;
