import ResponsivePage from '@/components/halmet-components/hero';
import Cards from '@/components/halmet-components/cards';
import Header from '@/components/header';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoEyeSharp } from 'react-icons/io5';
import Company from '@/components/products-components/company';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Shop() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8 ">
  {/* Breadcrumb */}
  <nav className="text-sm mb-4">
    <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
    <span className="mx-2">/</span>
    <span className="text-gray-800">Shop</span>
  </nav>

  {/* Product Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Product Image */}
    <div className="relative">
      <Image
        src="/sofa1.png"
        alt="Product Image"
        width={500}
        height={500}
        className="rounded-lg w-full h-auto object-cover"
      />
    </div>

    {/* Product Details */}
    <div className="space-y-4">
      <h1 className="text-xl sm:text-2xl font-semibold">Floating Phone</h1>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-2 text-gray-500 text-sm">10 Reviews</span>
        </div>
      </div>
      <p className="text-lg sm:text-xl font-bold text-gray-900">$1,139.33</p>
      <p className="text-green-500 text-sm">Availability: In Stock</p>
      <p className="text-gray-600">
        Met minim Mollie non deserunt. Alamo est sit aliquip dolor do amet sint.
      </p>

      {/* Color Options */}
      <div className="flex items-center gap-2 mb-6">
        {['#23A6F0', '#2DC071', '#E77C40', '#252B42'].map((color) => (
          <span
            key={color}
            className="w-6 sm:w-8 h-6 sm:h-8 rounded-full cursor-pointer border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full sm:w-auto">
          Select Options
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2">
          <FaRegHeart />
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2">
          <FiShoppingCart />
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2">
          <IoEyeSharp />
        </button>
      </div>
    </div>
  </div>
</div>


      <ResponsivePage />
      <Cards />
      <Company />
      <Footer />
    </main>
  );
}
