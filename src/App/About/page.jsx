import React from 'react'
import AboutPage from './AboutPage'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'

export default function page() {
  return (
                  <>
                                  <NavBar/>
                                  <main className='mt-[110px]'>
                                                  
      <AboutPage/>
                                  </main>
                                  <Footer/>
    </>
  )
}
