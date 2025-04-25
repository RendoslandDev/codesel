import React from 'react'

 function AdminPage() {
  return (
    <>
      <Header />
      

      <main className='container flex flex-row justify-center'>
        <SideBar />
        <section className='border-2 w-[75%]'>making things sure</section>
      </main>

                           
    </>
  )
}



function Header(props) {
                return(
                  <div className='container bg-white font-mono text-black font-bold md:px-12 w-full  md:flex flex-row justify-evenly m-10'>
                    <div className='flex flex-row'>
                    <h2 className='text-red-500 text-xl md:px-12 uppercase font-serif list:disc'>Cloud</h2>
                      <img src="./sale1.jpeg" alt="" sizes='10' />
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
                                Learn More <span aria-hidden="true">→</span>
                            </a>
                        </div>
                                </div>
                )
}

function SideBar() {
  return (
    <section className='border-2 w-[25%]'></section>
  )
}



export default AdminPage;