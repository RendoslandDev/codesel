import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgSoftwareDownload } from "react-icons/cg";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isActive , setIsActive] = useState(false)
    const [modal , setModal ] = useState(false)


    const toggleModal = () => {
        setModal(!modal)
    }

    const linkClasses = `
    uppercase block px-3 py-1 mb-1 uppercase font-serif font-2xl rounded-md text-lg font-bold border-b-2 border-red-300 pb-[1px] text-red-300  hover:text-[#f6d00c] hover:border-[#f6d00c] dark:hover:text-white
  `;

  return (
   <>
          <div
              onClick={()=> setIsOpen(!isOpen)}
              className='bg-[#f9fbfd] border-b-4 border-red-500 text-black fixed top-0 w-full dark:bg-gray-50 transition-colors duration-300 ease-in-out z-50 pt-3 pb-14 md:pb-2 mb-8 shadow-lg'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 '>
               <div className='flex flex-wrap items-center justify-between h-14  mb-5'>
            <div className="md:hidden">
                                <button  className="inline-flex items-center justify-center p-2 text-gray-800 dark:text-gray-200 rounded-md focus:outline-none">
                                <svg
                                                                className="h-6 w-6"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="red"
                                                                aria-hidden="true">
                                                                {isOpen ? (
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M6 18L18 6M6 6l12 12"
                                                                    />
                                                                ) : (
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M4 6h16M4 12h16M4 18h16"
                                                                    />
                                                                )}
                                               </svg>
              </button>
                      </div>
                      <SearchInput/>
                      <a
                    //   onClick={toggleModal}
                    href='/Login'
                        className='text-md font-serif text-black flex shadow px-4 py-2'>
                      login
                          {/* <CgSoftwareDownload/> */}
                      </a>

                      {
                        modal &&
                        <div className='modal '>
                            <div className=' h-[400px] items-center mt-50 border-2 w-1/2 flex justify-center m-auto'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam consectetur commodi obcaecati sint, minus ex. Molestiae ab perferendis ex eos sint ipsam officiis aspernatur. Delectus est incidunt repellendus corrupti ut.
                            </div>
                        </div>
                      }
               </div>
        </div>

        <div className='hidden md:block w-full'>
          <div className="text-lg ml-10 flex justify-around items-baseline space-x-8 !mx-auto">
            <button className='bg-red-600 inline-flex items-center justify-around m-2 p-2 text-gray-800 dark:text-gray-200 focus:outline-none font-extrabold'>CLOUDSALES</button>
            <div className='inline-flex justify-center gap-5'>
            <Link to="/" className="uppercase font-serif  rounded px-2 hover:border-b-2 border-red-500">
                        Home
                    </Link>
                    <Link to="/arrival" className="uppercase  rounded px-2">
                        arrivals
                    </Link>
                    <Link to="/offers" className="uppercase  rounded px-2">
                        offers
                    </Link>
                    <Link to="/about" className="uppercase  rounded px-2">
                        about
                    </Link>
                    <Link to="/contact" className="uppercase  rounded px-2">
                        contact
                    </Link>
            </div>
            <a
                href="./catalog.pdf"
                download="Catalogue.pdf"
             className='bg-red-600 inline-flex items-center justify-around m-2 p-2 text-ellipsis text-gray-800 dark:text-gray-200  focus:outline-none font-extralight'>
                <button className='text-white font-bold'>SEE CATALOG</button>
            </a>

                          </div>
              </div>
               {/* Mobile menu */}
             {isOpen && (
                <div className="md:hidden">
                    <div className="absolute px-2 pb-3 space-y-1 pt-2 z-10 bg-white w-[300px]">
                          {/* <NavbarLinks /> */}
                          <a href="/" className="uppercase hover:text-[#f6d00c] hover:border-b dark:hover:text-white px-3 py-1 mb-1 rounded-md text-lg font-bold block !text-red-300 border-b-2 border-red-300 !pb-[1px]">
                        Home
                          </a>
                          <a href="/contact  " className="uppercase hover:border-b dark:hover:text-white px-3 py-1 mb-1 rounded-md text-lg font-bold block !text-red-300 border-b-2 border-red-300 !pb-[1px]">
                        Contact
                          </a>
                          <a href="/offers  " className="uppercase hover:text-[#f6d00c] hover:border-b dark:hover:text-white px-3 py-1 mb-1 rounded-md text-lg font-bold block !text-red-300 border-b-2 border-red-300 !pb-[1px]">
                        Offer
                          </a>
                          <a href="/about  " className="uppercase hover:text-[#f6d00c] hover:border-b dark:hover:text-white px-3 py-1 mb-1 rounded-md text-lg font-bold block !text-red-300 border-b-2 border-red-300 !pb-[1px]">
                        About
                    </a>
                    </div>
                </div>
              )}

              {/* ended mobile menu */}
      </div>
   </>
  )
}


function FlagIcon(props) {
    return (
        <img src="download.jpeg" {...props} xmlns="http://www.w3.org/2000/svg" />
    )
}


const SearchInput = () => {
    return(
<div className="order-1 sm:order-none pt-2 mx-auto mb-4 relative text-gray-600">
            <form >
                <input
                    className="border-2 font-mono font-bold  border-gray-300 bg-[#f8f8f8] h-10 w-80 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                    type="search"
                    // value={query}
                    // onChange={}
                    name="search"
                    placeholder="Search"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4 pb-4">
                    <svg
                        className="text-gray-800 h-6 w-7 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                        xmlSpace="preserve"
                        width="512px"
                        height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </form>
        </div>
    )
}
