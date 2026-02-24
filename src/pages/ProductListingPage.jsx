import React, { useMemo } from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { plantsData } from '../data/plants';
import './ProductListingPage.css';

const ProductListingPage = () => {
    // Group plants by category
    const categories = useMemo(() => {
        const grouped = {};
        plantsData.forEach(plant => {
            plant.categories.forEach(category => {
                if (!grouped[category]) {
                    grouped[category] = [];
                }
                grouped[category].push(plant);
            });
        });
        return grouped;
    }, []);

    return (
        <div className="product-listing-page">
            <Header />

            <main className="product-main-content">
                <h2 className="page-title">Our Plants</h2>

                {Object.entries(categories).map(([category, plants]) => (
                    <section key={category} className="category-section">
                        <h3 className="category-title">{category}</h3>
                        <div className="plants-grid">
                            {plants.map(plant => (
                                <PlantCard key={plant.id} plant={plant} />
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default ProductListingPage;
