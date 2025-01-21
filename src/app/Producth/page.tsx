import React from 'react'
import { PiGreaterThanThin } from 'react-icons/pi'
import Image from 'next/image'
import BlogsPage from './data'
import Header from '@/components/header'
import Footer from '@/components/footer'

const ProductHPage = () => {
  return (
    <main>
      <Header/>
    <div className="container mx-auto px-4 py-6">
      
          {/* Tabs Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 border-b border-gray-200 pb-4 mb-8">
            <button className="text-gray-800 font-medium border-b-2 border-blue-500 pb-1">
              Description
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-1">
              Additional Information
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-1">
              Reviews (0)
            </button>
          </div>
    
          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Image */}
            <div className="col-span-1 w-[316px] h-[372px] flex justify-center lg:justify-start">
              <Image
                src="/cool.png"
                alt="Example Image"
                width={700}
                height={500}
                className="w-full h-full max-w-sm lg:max-w-full rounded-md shadow-md object-cover"
              />
            </div>
    
            {/* Middle Column: Text */}
            <div className="col-span-1 flex flex-col space-y-4">
              <h2 className="text-lg md:text-xl font-bold">The quick fox jumps over</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Met minim Mollie non deserunt Alamo est sit aliquip dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Met minim Mollie non deserunt Alamo est sit aliquip dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Met minim Mollie non deserunt Alamo est sit aliquip dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.
              </p>
            </div>
    
            {/* Right Column: List */}
            <div className="col-span-1 flex flex-col space-y-6">
              <div>
                <h2 className="text-lg md:text-xl font-bold mb-4">The quick fox jumps over</h2>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold mb-4">The quick fox jumps over</h2>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <PiGreaterThanThin />
                    </span>
                    The quick fox jumps over the lazy dog
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <BlogsPage/>
          <Footer/>
        </div>
        </main>
        

  )
}

export default ProductHPage