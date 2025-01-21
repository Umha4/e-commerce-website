"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";


// Define data structure
interface HeroPost {
  _id: string;
  title: string;
  description: string;
  date: string;
  image: {
    asset: {
      url: string;
    };
  };
  tags: string[];
  category: string;
  slug: {
    current: string;
  };
}

// Fetch data from Sanity
const getData = async (): Promise<HeroPost[]> => {
  const query = `*[_type == "newton"]{
    _id,
    title,
    description,
    date,
    image {
      asset -> {
        url
      }
    },
    tags,
    category,
    slug {
      current
    }
  }`;
  const data = await client.fetch(query);
  return data;
};

export default function HeroPage() {
  const [data, setData] = useState<HeroPost | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result[0]); // Display the first item
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <main className="flex flex-col lg:flex-row items-center gap-10 justify-center py-10 px-4 lg:px-24">
      {/* Left Side: Image */}
      <div className="w-[1600px] lg:w-1/2 ">
        <img
          src={data.image.asset.url}
          alt={data.title}
          className="w-[1800px] h-[600px] ml-10  object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:pl-12">
        <p className="text-sm font-medium text-gray-500 uppercase mb-2">
          {data.date}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {data.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="px-6 py-3 bg-[#2DC071] text-white font-semibold rounded-md hover:bg-green-700 transition-all">
            Buy Now
          </button>
          <button className="px-6 py-3 border border-[#2DC071] text-[#2DC071] font-semibold rounded-md hover:bg-[#2DC071] hover:text-white transition-all">
            Read More
          </button>
        </div>
      </div>
    </main>
  );
}
