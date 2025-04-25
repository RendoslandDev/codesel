import { useState, useEffect } from 'react';

export const useRelatedProducts = (currentProductId, limit ) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                // 1. First get the current product to find its category
                const productResponse = await fetch(`http://localhost:8080/product/${currentProductId}`);
                if (!productResponse.ok) throw new Error('Failed to fetch product');
                const productData = await productResponse.json();
                
                if (!productData.success) {
                    throw new Error(productData.message || 'Product not found');
                }

                const currentProduct = productData.product;
                
                // 2. Then get other products in the same category (excluding current product)
                const response = await fetch(
                    `http://localhost:8080/product/category/${currentProduct.category}`
                );
                
                if (!response.ok) throw new Error('Failed to fetch related products');
                
                const data = await response.json();
                
                // Filter out the current product and limit results
                const filteredProducts = data.products
                    .filter(p => p.id !== currentProductId)
                    .slice(0, limit);
                
                setRelatedProducts(filteredProducts);
            } catch (err) {
                setError(err.message || 'Error loading related products');
            } finally {
                setLoading(false);
            }
        };

        if (currentProductId) {
            fetchRelatedProducts();
        }
    }, [currentProductId, limit]);

    return { relatedProducts, loading, error };
};