import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

export default function ArrivalTrail({products}) {
  return (
    <>
      <div>
 <section className='py-12 bg-white sm:py-16 lg:py-20 font-light'>
  <div className='grid grid-cols-2 mt-10 gap-5 lg-mt-16 lg:gap-4 lg:grid-cols-4'>
                {products.map(product => (
                 <div
                  key={product.id}
                   className='relative group mb-12 md:mb-12'>
                                   <div className="overflow-hidden aspect-w-1 aspect-h-1 h-4/5">
                                    <img
                                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                        src={product.imageurl}
                                        alt={product.name}
                                    />
                                                </div>
                                                                  <Link
                                                                                  to={`/product/${product.id}`}
                                                                                  title={product.name}>
                                                                                  <div className="items-start justify-between mt-4 space-x-4 font-mono">
                                        <div>
                                            <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base ">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center mt-2.5 space-x-px">
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, index) => (
                                                        <svg
                                                            key={index}
                                                            className={`w-3 h-6 border-black ${index < Math.floor(Math.random() * 5 + 4) ? 'text-yellow-400' : 'text-red-300'} sm:w-4 sm:h-4`}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ),
                                                )}
                                            </div>
                                                                                                  </div>
                                                                                                  <div>
                                    <p className='text-xl font-bold font-serif mb-10'>GH₵{ product.price}</p>
                                                                                                  </div>
                                                                                                  </div>
                                                                  </Link>
                                                                                  
                                                  </div>
                ))}
                                                                  </div>
      </section>
    </div>
    </>
  )
}


