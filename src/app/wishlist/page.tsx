'use client';

import { useWishlist } from '@/context/WishlistContext';
import Image from 'next/image';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-sm">
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
}