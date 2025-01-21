"use client"; 
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// Define the type for the hero data
interface HeroData {
  name: string;
  title: string;
  description: string;
  slug: string;
  image: {
    asset: {
      url: string;
    };
  };
}

// Fetch data function
async function getData() {
  const query = `
    *[_type == "heroSection"][0]{
      name,
      title,
      description,
      slug,
      image{
        asset->{
          url
        }
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default function FetchHeroData({ children }: { children: (data: HeroData) => React.ReactNode }) {
  const [data, setData] = useState<HeroData | null>(null);
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

  if (!data) {
    return <div>No data available</div>;
  }

  return <>{children(data)}</>;
}