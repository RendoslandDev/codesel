import React from 'react'
import ContactForm from './Contact'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'

export default function page() {
  return (
                  <>
                                  <NavBar/>
                                  <main className='mt-[110px]'>

      <ContactForm/>
                                  </main>
                                  <Footer/>
    </>
  )
}
