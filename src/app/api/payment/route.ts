import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: Request) {
  const { cartDetails } = await request.json();

  try {
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents (e.g., $10.00)
      currency: 'usd',
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 });
  }
}