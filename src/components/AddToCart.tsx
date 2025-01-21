'use client';

import { useShoppingCart } from 'use-shopping-cart';
import { LuShoppingCart } from 'react-icons/lu';
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

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useShoppingCart();

  const handleAddToCart = () => {
    addItem({
      name: product.title,
      id: product._id,
      price: product.price,
      currency: 'USD',
      image: product.productImage.asset.url,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="border-[1px] rounded-full p-3 hover:bg-gray-50"
    >
      <LuShoppingCart className="text-2xl" />
    </button>
  );
}