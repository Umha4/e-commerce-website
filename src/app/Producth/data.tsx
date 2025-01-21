"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  productImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  tags: string[];
  isNew: boolean;
  slug?: {
    current: string;
  };
}

const BestsellerProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        discountPercentage,
        productImage {
          asset-> {
            _id,
            url
          }
        },
        tags,
        isNew,
        slug {
          current
        }
      }`;

      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">BESTSELLER PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product._id} // Use product._id as key
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-md rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image Animation */}
            <motion.div
              className="rounded-md overflow-hidden mb-4"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              
              <div className='overflow-hidden'>
              <Image
                src={product.productImage.asset.url} // Use productImage.asset.url
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              </div>
            </motion.div>
            <Link href={`/product-detal/${product.slug?.current}`}><h3 className="text-lg font-semibold mb-2">{product.title}</h3></Link>
            <div className="flex justify-between items-center">
              <span className="line-through text-gray-500 text-sm">
                ${product.price} {/* Use price as originalPrice */}
              </span>
              <span className="text-green-600 font-bold text-lg">
                ${product.price - (product.price * product.discountPercentage) / 100} {/* Calculate discountedPrice */}
              </span>
            </div>
            {/* Display Tags */}
            <div className="flex  flex-wrap mt-2">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className=" text-sm bg-gray-100 px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {/* {tag} */}
                </span>
              ))}
            </div>
            {/* Display New Badge */}
            {product.isNew && (
              <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                New
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;