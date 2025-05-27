'use client'

import React from 'react'
import LinkedProductById from './LinkedProductById'
import { useFeaturedProductsById } from '../../hooks/useFeaturedProductsId'

const FetchProduct = ({ id }) => {
    const { product, loading, error } = useFeaturedProductsById(id)

    if (loading) {
        return <div className="text-center my-20">
                              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>

  </div>;
    }

    if (error) {
        return    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"       role="alert">
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{error}</span>
                </div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return <LinkedProductById product={product}/>
}

export default FetchProduct
