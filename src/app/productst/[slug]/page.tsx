// app/productst/[slug]/page.tsx
"use client"; // Ensure this is a Client Component
import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  department: string;
  price: number;
  discountedPrice: number;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  colors: string[];
  slug: {
    current: string;
  };
}

// Fetch product data based on slug
async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
    _id,
      title,
      department,
      price,
      discountedPrice,
      image {
        asset-> {
          _id,
          url
        }
      },
      colors,
      slug
    }
  `;
  const data = await client.fetch(query, { slug });
  return data || null;
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductBySlug(params.slug);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] mb-8">
          <Image
            src={product.image?.asset?.url}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <h2 className="text-xl font-semibold mb-2">{product.department}</h2>
        <p className="text-lg mb-4">
          Price: ${product.discountedPrice} <s>${product.price}</s>
        </p>

        <div className="flex items-center mt-3">
          {product.colors?.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="w-5 h-5 rounded-full border border-gray-300 mr-2"
            ></span>
          ))}
        </div>

        <button
          className="mt-6 w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}
