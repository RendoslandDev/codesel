'use client'

import React from 'react'
import { useAllProducts } from '../../hooks/useAllProducts'
import ArrivalTrail from './ArrivalTrail'


const FetchAllProductsArrivals = () => {
    const { products, loading, error } = useAllProducts()

    if (loading) {
        return <div className="text-center my-20">Loading...</div>;
    }

    if (error) {
        return <div>Error fetching product details: {error}</div>;
    }

    if (!products) {
        return <div>Product not found</div>;
    }

                return <ArrivalTrail products={products} />;
}

export default FetchAllProductsArrivals