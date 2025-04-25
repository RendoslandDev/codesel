import React from 'react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import FetchProduct from './FetchAllProductsArrivals'

export default function page() {
  return (
                  <>
                                  <NavBar />
      <main className='m-[65px]'>
        <div className=' h-20 text-red-500 mt-[200px] text-center'>
          <h2 className='font-serif text-8xl flex justify-center'>NEW ARRIVALS</h2>
          <span className='font-serif text-black p-15'>Leading the world with our way prepared product to our expertise</span>

        </div>
                                <FetchProduct/>
                                  </main>
                                  <Footer/>
    </>
  )
}
