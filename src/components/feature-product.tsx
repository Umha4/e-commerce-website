// components/feature-product.tsx
'use client'; // Ensure this is a Client Component

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

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

async function getData(): Promise<Product[]> {
  const query = `
    *[_type == "product"][0...12] {
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
    }
  `;
  return await client.fetch<Product[]>(query);
}

export default function FeatureProducts() {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: getData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products</div>;
  }

  if (!data || data.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="flex flex-col items-center max-w-screen-2xl mx-auto w-full bg-white justify-center text-center py-10">
      <div>
        <h3 className="text-[#737373] text-[20px]">Featured Products</h3>
        <h2 className="text-[#252B42] text-[32px] font-bold mt-2">BESTSELLER PRODUCTS</h2>
        <p className="text-[#737373] text-[14px] mt-2">Problems trying to resolve the conflict between</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full px-5">
        {data.map((product) => (
          <Link
            key={product._id}
            href={`/product-detal/${product.slug?.current}`} // Dynamic link
            className="group bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={product.productImage?.asset?.url}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold text-green-600">
                  ${product.price - (product.price * product.discountPercentage) / 100}
                </span>
                <span className="text-sm line-through text-gray-400">${product.price}</span>
              </div>
              <div className="flex items-center mt-3">
                {product.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 px-2 py-1 rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {product.isNew && (
                <span className="inline-block mt-3 px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                  New
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}