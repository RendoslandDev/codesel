import React from 'react'
import valuesCard from '../data/valuesData'
import ValuesCard from '../../Components/ValuesCard'
import valuesData from '../data/valuesData'

export default function AboutPage() {
    return (
        <>
            
            



            <div className="mt-[110px] py-16 bg-white font-mono">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">

                    {/* <div className='container  text-center m-auto text-gray-600 md:px-12 xl:px-6 bg-white  font-mono p-10 rounded'>
                        <h2 className='text-black font-serif uppercase font-bold mb-2'>our concepts</h2>
                        <span className='w-1/4'>We seek to offer customer's optimal accessibility to comfort and minority , via a quality / price ratio. Provding a complete 
                            , diverse range of furniture and decoration products that cater to our customer's lifestyle needs 
                            as they progress throughlife's through life's stages from baby to adulthood..
                          </span>
                    </div> */}

                   
                    
                                    <div className="space-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12">
                                        <div className="w-full lg:w-[50%] mb-6">
                                            <img
                                                src="/helpdesk2.jpg"
                                                className="mx-auto rounded-lg"
                                                alt="image"
                                                loading="lazy"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="lg:w-[50%]">
                                            <h2 className="animate-pulse uppercase text-2xl text-gray-900 font-serif md:text-center md:text-4xl">
                                                About Codesale
                                            </h2>
                                            <p className="mt-6 text-gray-700 font-mono">
                                                Welcome to Mattress Home, your ultimate sleep
                                                partner and solution. We specialize in providing
                                                high-quality new mattresses and offer expert
                                                restoration services for your old ones. Our mission
                                                is to ensure you get the best sleep possible,
                                                tailored to your unique needs.
                                            </p>
                                            <p className="mt-4 text-gray-700">
                                                At Mattress Home, we understand that a good night's
                                                sleep is essential for a healthy and productive
                                                life. That’s why we offer a diverse range of
                                                mattresses from top brands such as Royal Foam, Latex
                                                Foam, Ashfoam, and various foreign brands. Whether
                                                you're looking for a new mattress or need to
                                                rejuvenate your existing one, we've got you covered.
                                            </p>
                                            <p className="mt-4 text-gray-700 font-mono">
                                                We are here to solve your sleep needs. Give us a
                                                call or chat with us today to find the perfect
                                                mattress that suits you. Experience the difference
                                                with Mattress Home, where your comfort and
                                                satisfaction are our top priorities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
             </>   
  )
}
