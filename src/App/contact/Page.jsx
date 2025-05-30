import React from 'react'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import ContactForm from './Contact'

export default function Page() {
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
