'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { HiOutlineEye } from 'react-icons/hi';
import AddToWishlistButton from '@/components/AddToWishlist';
import AddToCartButton from '@/components/AddToCart';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
  description: string;
  category: string;
  rating: number;
  reviews: {
    name: string;
    comment: string;
    rating: number;
  }[];
}

async function getProductBySlug(slug: string): Promise<Product> {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
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
      description,
      category,
      rating,
      reviews[] {
        name,
        comment,
        rating
      }
    }
  `;
  const params = { slug };
  return await client.fetch<Product>(query, params);
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductBySlug(params.slug);
        setProduct(product);
      } catch (err) {
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.slug]);

  // Add review handler
  const handleAddReview = async () => {
    if (newReview.name && newReview.comment && newReview.rating > 0 && product) {
      const updatedProduct: Product = {
        ...product, // Spread existing product properties
        reviews: [...(product.reviews || []), newReview], // Add new review
      };
      setProduct(updatedProduct);
      setNewReview({ name: '', comment: '', rating: 0 });
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">{error}</h1>
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  // If product not found
  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">Product not found.</h1>
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Header />
      <div className="max-w-6xl mx-auto px-4 mt-14">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Product Image */}
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.productImage.asset.url}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="">
            <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
            <div className="flex mt-2 gap-3">
              <span className="text-yellow-500 text-lg flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-gray-600">(70 views)</span>
            </div>
            <div className="flex mt-3">
              <h1 className="text-1xl font-bold">Availability :</h1>
              <p className="text-blue-400 font-semibold ml-2">In Stock </p>
              <p className="text-blue-400 font-semibold ml-2">(200 available)</p>
            </div>
            <p className="text-gray-600 text-lg line-clamp-3 mt-7">{product.description}</p>

            {/* Price Section */}
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-xl font-bold text-green-600">
                ${product.price - (product.price * product.discountPercentage) / 100}
              </span>
              <span className="line-through text-gray-500">${product.price}</span>
              {product.isNew && (
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                  New
                </span>
              )}
            </div>
            <hr className="mt-3 text-2xl text-gray-200 font-bold" />
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {product.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Add to Cart and Wishlist Buttons */}
            <div className="flex gap-5 items-center mt-8">
              <button className="h-auto w-auto bg-blue-500 font-semibold text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Select Option
              </button>
              <div className="flex items-center gap-5">
                <AddToWishlistButton product={product} />
                <AddToCartButton product={product} />
                <span className="border-[1px] rounded-full p-3 hover:bg-gray-50">
                  <HiOutlineEye className="text-2xl" />
                </span>
              </div>
            </div>
          </div>
        </div>

       

        {/* Add Review Form */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800">Add Your Review</h3>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full p-2 border rounded-lg"
            />
            <textarea
              placeholder="Your Review"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full p-2 border rounded-lg"
              rows={4}
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              className="w-full p-2 border rounded-lg"
            >
              <option value={0}>Select Rating</option>
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
            <button
              onClick={handleAddReview}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>
        </div>

         {/* Reviews Section */}
         <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
          {product.reviews?.length > 0 ? (
            <div className="space-y-6 mt-6">
              {product.reviews.map((review, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-gray-600">({review.rating})</span>
                  </div>
                  <h3 className="text-lg font-semibold mt-2 text-gray-800">{review.name}</h3>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mt-6">No reviews yet.</p>
          )}
        </div>

        {/* Back to Products Link */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}