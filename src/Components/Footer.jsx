import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa"

export default function () {
                return (
       <footer className="z-10  bg-white border-t-5 border-red-500 flex flex-col md:flex-col  md:gap-0 py-8 text-white justify-evenly px-8 font-mono">
                            
                            <div className='h-15 text-center py-5 flex flex-row  justify-around font-serif text-black'>
                                  <p text-xl >Copyright ©2025 <strong>Cloudsales</strong></p>
                                  <div className='socila-icons text-2xl  flex flex-row gap-5 text-red-500'>
                                        <a href='#'><FaFacebook/></a>
                                        <a href='#'><FaTwitter/></a>
                                        <a href='#'><FaInstagram/></a>
                                        <a href='#'><FaLinkedin/></a>
                                    </div>
                                  <a href='/' className='text-red-500 font-serif font-bold'>Terms and Conditions</a>

             </div>
  

                            <div className='flex flex-row sm:flex-row justify-center '>
                                  <div className='lg:rounded-4xl border-2 p-10 '>
                                        <img  src="/sales.png"
                                          className="mx-auto "
                                          alt="image"
                                          loading="lazy"
                                          width={100}
                                          height={200}/>
                                  </div> 
                                 
                                 <span className='font-serif text-black p-15'>Leading the world with our way prepared product to our expertise</span>
                            </div>
                     </footer>
           )
}

