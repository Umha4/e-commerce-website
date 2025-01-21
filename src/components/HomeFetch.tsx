// components/FetchData.js
"use client"; // Ensure this is a Client Component
import { useEffect, useState } from "react";
import client from "@/sanity/lib/client";

// Define the type for the item
interface HeroItem {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
}

// Fetch data function
async function getData() {
  try {
    const fetchData = await client.fetch(`
      *[_type == "Hero"] {
        _id,
        title,
        "imageUrl": image.asset->url,
        description
      }
    `);
    return fetchData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function FetchData({ children }: { children: (data: HeroItem[]) => React.ReactNode }) {
  const [data, setData] = useState<HeroItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return <>{children(data)}</>;
}