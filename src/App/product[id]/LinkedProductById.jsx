import React from 'react'
import UseRelatedProduct from '../useRelatedProduct'


export default function LinkedProductById({product}) {
  return (
    <>
    <div className='container mt-[190px] flex justify-center items-center px-6 text-gray-600 md:px-12 xl:px-6'>
    <div className="space-y-6 md:space-y-0 lg:flex justify-center md:gap-6 lg:items-center lg:gap-12">
    <div className="w-full lg:w-[45%] mb-6 shadow ">
                                          <img
                                              src={product.imageurl}
                                              className="mx-auto rounded-lg"
                                              alt="image"
                                              loading="lazy"
                                              width={500}
                                              height={800}
                                          />
      </div>
      
      <div className='w-full lg:w-[45%] m-2 font-serif'>
        <p className='text-xl font-bold font-serif p-5'>GH₵ { product.price}</p>
        
            <div className='space-y-6 mb-4'>
              <p>
              {product.description}
              </p>
        </div>

        <a
                              href="/"
                              className=" text-white font-extrabold font-mono text-xl border border-red-300 p-2 rounded uppercase bg-red-600">
                              add to basket
        </a>
        <hr className='mt-5'/>
        <div className='flex flex-row gap-3'>
        <p>categories :</p>
              <p>{ product.name}</p>
        </div>
      </div>
      
    </div>
    
    
  </div>
      <hr className='ml-50 mr-50' />
      <div className='flex flex-row justify-evenly text-black font-serif font-bold'>
        <p>Description</p>
        <p>Reviews (0)</p>
      </div>

      <div className='flex justify-start rounded font-serif'>
        <span className='ml-50  mr-50 space-x-1 font-mono text-black'>
          Introducing the {product.name} by  <strong>Cloudsales</strong>.
          <p>Transform your bedroom with the elegance of the {product.name}.</p>
          <p>Featuring a stunning upholstered headboard and footboard paired with sleek wooden side panels,this bed combines { product.description}</p>
        </span>

      </div>
      <div className='ml-50 mt-10'>
     <p className='font-mono text-4xl'>Related products</p>
      <UseRelatedProduct productId={3}/>
      </div>
      
    </>
  )
}
