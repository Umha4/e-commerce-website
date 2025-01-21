// src/components/AddToWishlistButton.tsx
'use client';

import { FaRegHeart } from 'react-icons/fa';
import { useWishlist } from '@/context/WishlistContext';

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  };
}

export default function AddToWishlistButton({ product }: { product: Product }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = wishlist.some((item) => item._id === product._id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleWishlistClick}
      className="border-[1px] rounded-full p-3 hover:bg-gray-50"
    >
      <FaRegHeart className={`text-2xl ${isInWishlist ? 'text-red-500' : 'text-gray-800'}`} />
    </button>
  );
}