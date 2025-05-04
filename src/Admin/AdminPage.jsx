import React from 'react'

 function AdminPage() {
  return (
    <>
      <Header />
      

      <main className='container flex flex-row justify-center'>
        <SideBar />
        <section className='w-[80%]  shadow'></section>
      </main>

                           
    </>
  )
}



function Header(props) {
                return(
                  <div className='container bg-white font-mono text-black font-bold md:px-12 w-full  md:flex flex-row justify-evenly m-10'>
                    <div className='flex flex-row'>
                    <h2 className='text-red-500 text-xl md:px-12 uppercase font-serif list:disc'>Cloud</h2>
                      <img src="./sale1.jpeg" alt="" width={200} />
                    </div>
                 <div className="flex items-center gap-x-6 mt-15">
                            <a
                                href="/contact"
                                className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                Contact Us
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
    <section className=' w-[25%] font-serif'>
      <div className='m-10 p-2 '>
        <div className='list-none flex flex-col  px-3.5 py-2.5 rounded-md text-black my-15 '>
          <a href='/' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Dashboard</a>
          <a href='/Products' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black mb-5'>Products</a>
          <a href='/Orders' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Orders</a>
          <a href='/Customers' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black mb-5'>Customers</a>
          <a  href='/Reports' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Reports</a>
          <a href='/Settings' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Settings</a>
        </div>
        <div className='flex flex-row justify-center'>
          <a href='/Logout' className='rounded-md bg-red-400 px-10 py-2.5 text-sm font-semibold text-white shadow-sm font-serif uppercase'>Logout</a>
        </div>
        </div>
    </section>
  )
}



export default AdminPage;