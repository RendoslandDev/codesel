import React from 'react'
import FetchProduct from './FetchProduct';

import { useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

export default function pages() {
  
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <main>
      <FetchProduct id={ id} />
      </main>
        <Footer/>                         
    </>
  )
}
