import React from 'react'
import valuesCard from '../data/valuesData'
import ValuesCard from '../../Components/ValuesCard'
import valuesData from '../data/valuesData'

export default function AboutPage() {
    return (
        <>





            <div className="mt-[110px] py-16 bg-white font-mono">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">

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
                <blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-red-300">
                Best
                <span class="relative shadow-xl p-4 rounded border-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 m-2 before:bg-white ">
                    <span class="relative text-red-300 dark:text-gray-950 font-serif font-thin">SALES</span>
                </span>
                of all the time, people love it that we gave our best.
                </blockquote>
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
