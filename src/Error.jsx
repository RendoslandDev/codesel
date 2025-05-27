import React from 'react'

export default function Error() {
  return (
    <>
        <div className='h-[500px] m-40 '>
             <div className=' rounded h-[250px] w-1/2 flex justify-center '>
                  <li className='text-red-900 font-bold font-serif'>~/Error.html</li>

                      <hr/>

                      <div className='flex justify-center mt-40 pl-40'>
                        <h1 className='uppercase text-2xl text-black font-bold'>404/</h1>
                        <p className='text-black text-xl'>This page could not be found</p>
                      </div>
             </div>

        </div>

    </>
  )
}
