// src/hooks/useWishlist.ts
import { useState, useEffect } from 'react';

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

export default function useWishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage on initial render (client-side only)
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes (client-side only)
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addItem = (product: Product) => {
    setWishlist((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some((item) => item._id === product._id);
      if (!isProductInWishlist) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  const removeItem = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== productId)
    );
  };

  return {
    wishlist,
    addItem,
    removeItem,
  };
}