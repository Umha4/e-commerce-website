import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: Request) {
  const { cartDetails } = await request.json();

  // Convert cart items to Stripe line items
  const lineItems = Object.values(cartDetails || {}).map((item: any) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100, // Convert to cents
    },
    quantity: item.quantity,
  }));

  // Debugging: Log base URL
  console.log('Base URL:', process.env.NEXT_PUBLIC_BASE_URL);

  // Create Stripe Checkout session
  try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://localhost:3000/order-confirmation',
        cancel_url: 'https://localhost:3000/checkout-error',
      });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    return NextResponse.json(
      { error: 'Failed to create Stripe Checkout session' },
      { status: 500 }
    );
  }
}