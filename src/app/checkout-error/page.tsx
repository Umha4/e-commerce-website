'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CheckoutErrorPage() {
  return (
    <main>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout Error</h1>
        <p className="text-gray-600 mb-8">
          There was an error processing your payment. Please try again.
        </p>
        <Link
          href="/cart"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back to Cart
        </Link>
      </div>
      <Footer />
    </main>
  );
}