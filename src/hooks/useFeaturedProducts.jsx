
import { useState, useEffect } from 'react';

export const useFeaturedProducts = (limit) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:8080/product/limit/${limit}`,
                    {
                        mode: 'cors',
                        headers: {
                            'Content-Type':'application/json',
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [limit]);

    return { products, loading, error };
};




