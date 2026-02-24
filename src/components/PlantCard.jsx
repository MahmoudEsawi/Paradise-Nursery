import React from 'react';
import { useCart } from '../context/CartContext';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
    const { cartItems, addToCart } = useCart();

    // Check if plant is already in the cart
    const isAdded = cartItems.some((item) => item.id === plant.id);

    return (
        <div className="plant-card">
            <div className="image-container">
                <img src={plant.thumbnail} alt={plant.name} className="plant-image" />
            </div>
            <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
                <p className="plant-description">{plant.description}</p>
                <button
                    className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                    onClick={() => addToCart(plant)}
                    disabled={isAdded}
                >
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default PlantCard;
