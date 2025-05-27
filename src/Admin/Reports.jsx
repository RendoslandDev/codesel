import React from 'react'

export default function Reports() {
  return (
    <>
        <Header />
        <div className='flex flex-row'>
          <SideBar />
          <section className='w-[75%] font-serif'>
            <div className='m-10 p-2 '>
              <h1 className='text-black text-2xl font-thin'>Reports</h1>
              <hr className='border-b-2 border-red-300 w-full my-5' />
              {/* <p className='text-black text-xl font-bold'>Sales Report</p>
              <p className='text-black text-xl font-bold'>Inventory Report</p>
              <p className='text-black text-xl font-bold'>Customer Report</p> */}

              <p className='font-mono'>Reports from the customer's about how good or bad the product purchased is!</p>


              <div className=' pl-2 w-1/2 rounded-md font-serif text-black '>
              <p className='py-4'>Rendosland Akwasi Agyapong 💹</p>
              <p className='pt-3'>products bought and how much it is!</p>
              <p className='pt-2 pb-4'>problem / recommendation</p>
              <span className="pt-6 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto praesentium minima beatae hic deserunt earum ipsa doloremque culpa, recusandae odit qui explicabo nisi ullam quam dicta, inventore quis animi soluta!</span>
              <p className='pt-6'>2024/04/21</p>
              </div>
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
                                href="/AddToProduct"
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
