'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function OrderConfirmationPage() {
  return (
    <main>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your order! Your order has been successfully placed.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
      <Footer />
    </main>
  );
}