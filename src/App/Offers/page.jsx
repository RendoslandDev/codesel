import React from 'react'
import OfferPage from './OfferPage'
import NavBar from '@/Components/NavBar'
import Footer from '@/Components/Footer'

export default function page() {
  return (
                  <>
                                  <NavBar />
                                  
                                  <main className='mt-[110px]'>
                                                  
      <OfferPage/>
                                  </main>

                                  <Footer/>
    </>
  )
}
