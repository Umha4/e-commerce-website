'use client';

import { useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const {
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice,
    redirectToCheckout,
    clearCart,
  } = useShoppingCart();

  // Convert cartDetails object to an array
  const cartItems = Object.values(cartDetails || {});

  // Handle checkout
  const handleCheckout = async () => {
    console.log('Checkout button clicked'); // Debugging

    try {
      console.log('Calling /api/checkout endpoint'); // Debugging

      // Call backend API to create Stripe Checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartDetails }),
      });

      console.log('API Response:', response); // Debugging

      const { id: sessionId } = await response.json();
      console.log('Stripe Session ID:', sessionId); // Debugging

      // Redirect to Stripe Checkout
      const result = await redirectToCheckout(sessionId);
      if (result?.error) {
        console.error('Checkout error:', result.error); // Debugging
      }
    } catch (error) {
      console.error('Checkout failed:', error); // Debugging
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            href="/product"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-200 py-6"
              >
                {/* Product Image */}
                <div className="relative w-32 h-32">
                  <Image
                    src={item.image || '/placeholder-product.jpg'}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <p className="text-gray-600">{item.quantity}</p>
                    <button
                      onClick={() => incrementItem(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-semibold">${totalPrice?.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="font-semibold">Free</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Total</p>
                <p className="font-semibold">${totalPrice?.toFixed(2)}</p>
              </div>
            </div>

            {/* Checkout Button */}
            <button
            
              onClick={handleCheckout}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 mt-6"
            >
              Proceed to Checkout
            </button>

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700 mt-4"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}