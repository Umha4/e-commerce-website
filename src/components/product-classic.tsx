'use client'; // Marking this as a client component

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link"; // Import Link from Next.js

// Define the type for the data structure
interface FeaturePost {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
    hotspot: boolean;
  };
  title: string;
  description: string;
  slug: {
    current: string;
  };
}

// Helper to fetch data
const getData = async (): Promise<FeaturePost[]> => {
  const query = `*[_type == "featurePost"] {
    _id,
    name,
    image {
      asset -> {
        url
      },
      hotspot
    },
    title,
    description,
    slug
  }`;
  const data = await client.fetch(query);
  return data;
};

export default function HeroPage() {
  const [data, setData] = useState<FeaturePost[]>([]); // Change to an array to store all posts

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result); // Store all posts
    };

    fetchData();
  }, []);

  if (!data.length) return <div>Loading...</div>; // Show loading state if data is not available

  return (
    <main className="">
      {data.map((post) => (
        <Link
          key={post._id}
          href={`/products/${post.slug.current}`} // Link to the dynamic product page
          passHref
        >
          <div
            className="relative bg-red-500 bg-cover bg-center sm:bg-[top_center] lg:bg-center h-[400px] sm:h-[600px] lg:h-[716px] mb-8 cursor-pointer"
            style={{
              backgroundImage: `url(${urlFor(post.image).url()})`, // Use post.image
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="absolute top-40 lg:left-10 mt-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:text-left text-center text-white px-4">
              <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide mb-2 sm:mb-4">
                {post.name}
              </h2>
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold mb-4 sm:mb-6 leading-tight line-clamp-2">
                {post.title}
              </h1>
              <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed mb-4 sm:mb-8">
                {post.description}
              </p>
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
                ADD TO CART
              </button>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}