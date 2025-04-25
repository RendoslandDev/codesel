// components/FetchFeaturedProducts.js
'use client';
import React from 'react';
import { useRelatedProducts } from '@/hooks/useRelatedProducts';
import RelatedProduct from './RelatedProduct';

const UseRelatedProduct = ({ productId }) => {
                const { relatedProducts, loading, error } = useRelatedProducts(productId);

    if (error) {
        return <div>Error fetching product details: {error}</div>;
    }

    if (loading) {
        return <div className="text-center my-20">Loading...</div>;
    }

  // return <linkedProducts products={products} />;
                //     return <LinkedProducts products={products} />;
                return <RelatedProduct relatedProducts={ relatedProducts} />
};3

export default UseRelatedProduct;