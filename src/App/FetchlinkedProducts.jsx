// components/FetchFeaturedProducts.js
'use client';
import React from 'react';
import { useFeaturedProducts } from '@/hooks/useFeaturedProducts';
import LinkedProducts from './LinkedProducts';

const FetchlinkedProducts = ({ number }) => {
    const { products, loading, error } = useFeaturedProducts(number);

    if (error) {
        return <div>Error fetching product details: {error}</div>;
    }

    if (loading) {
        return <div className="text-center my-20">Loading...</div>;
    }

    return <LinkedProducts products={products} />;
};

export default FetchlinkedProducts;
