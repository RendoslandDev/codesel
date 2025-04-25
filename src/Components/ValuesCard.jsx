import React from 'react'

export default function ValuesCard({values}) {
  return (
    <div className={`sm:w-1/2 w-full lg:block rounded-lg text-center overflow-hidden border border-grey-light bg-white mt-2 mb-5 ${values.className}`}>
          
      
          <div className='h-70 sm:h-48 lg:h-auto  bg-cover bg-center'
            //    style={{ backgroundImage: `url(${values.imageUrl})` }}
         title={values.name}
          >
              {/* <img src={'$(values.imageUrl)'} alt="" /> */}
         <div className="flex flex-col  leading-normal">
            <div className="mb-20">
                <div className="text-black font-bold text-xl my-3">
                    {values.name}
                </div>
                <p className="text-grey-darker text-base text-center mx-auto">
                    {values.description}
                </p>
            </div>
            {/* <div className="flex items-center">
                <a
                    href={brand.url}
                    className="px-6 py-2 rounded-xl bg-white hover:bg-gray-600 text-black border !border-gray-600 !active:text-white hover:text-white font-bold">
                    {' '}
                   <button className='font-medium'>Explore Brand</button>
                </a>
            </div> */}
      </div>
      
      </div>
      </div>
  )
}
