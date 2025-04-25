import { useState, useEffect } from 'react';

export const useFeaturedProductsById = (id) => {
                const [product, setProduct] = useState([]);
                const [loading, setLoading] = useState(true);
                const [error, setError] = useState(null);
            
            
                useEffect(() => {
                    const ProductsById = async () => {
                        try {
                            const response = await fetch(`http://localhost:8080/product/${id}`,
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
                            setProduct(data.product);
                        } catch (err) {
                            setError(err instanceof Error ? err.message : 'Unknown error');
                        } finally {
                            setLoading(false);
                        }
                    };
            
                    ProductsById();
                }, [id]);
            
                return { product, loading, error };
            };