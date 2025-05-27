import React from 'react'


export default function Customers() {
  return (
    <>

        <Header />
        <div className='flex flex-row'>
          <SideBar />
          <section className='w-[75%] font-serif'>
            <div className='m-10 p-2 '>
              <h1 className='text-black text-3xl font-thin font-serif'>Customers</h1>
              <hr className='border-b-2 border-black w-full my-5' />

            </div>
          </section>
          </div>

    </>
  )
}


function Header(props) {
                return(
                  <div className=' rounded-md container bg-white font-mono text-black font-bold md:px-12 w-full  md:flex flex-row justify-evenly m-10 float-start'>
                    <div className=' flex flex-row'>
                    <h2 className='text-black text-xl md:px-12 uppercase font-serif list:disc'>CloudSales</h2>
                    </div>

                 <div className="flex items-center gap-x-6 ">
                            <a
                                href="/contact"
                                className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                Customer care
                            </a>
                            <a
                                href="/about"
                                className="rounded-md  bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                ADD Products <span aria-hidden="true">+</span>
                            </a>
                        </div>
                                </div>
                )
}

function SideBar() {
  return (
    <section className=' w-[25%] font-serif '>
      <div className='m-10 p-2 '>
        <div className='list-none flex flex-col  px-3.5 py-2.5 rounded-md text-black my-15 '>
          <a href='/AdminPage' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Dashboard</a>
          <a href='/Products' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black mb-5'>Products</a>
          <a href='/Orders' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Orders</a>
          <a href='/Customers' className='rounded-md shadow px-2.5 w-1/2 py-2.5 text-sm  uppercase text-black mb-5'>Customers</a>
          <a  href='/Reports' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Reports</a>
          <a href='/Settings' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Settings</a>
        </div>
        <div className='flex flex-row justify-center'>
          <a href='/Logout' className='rounded-md bg-red-400 mr-10  px-10 py-2.5 text-sm font-semibold text-white shadow-sm font-serif uppercase'>Logout</a>
        </div>
        </div>
    </section>
  )
}
