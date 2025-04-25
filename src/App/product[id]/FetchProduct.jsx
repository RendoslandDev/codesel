'use client'

import React from 'react'
import LinkedProductById from './LinkedProductById'
import { useFeaturedProductsById } from '../../hooks/useFeaturedProductsId'

const FetchProduct = ({ id }) => {
    const { product, loading, error } = useFeaturedProductsById(id)

    if (loading) {
        return <div className="text-center my-20">Loading...</div>;
    }

    if (error) {
        return <div>Error fetching product details: {error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return <LinkedProductById product={product}/>
}

export default FetchProduct