import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { productId, name, comment, rating } = await request.json();

    if (!productId || !name || !comment || !rating) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Fetch the product to ensure it exists
    const product = await client.fetch(
      `*[_type == "product" && _id == $productId][0]`,
      { productId }
    );

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found.' },
        { status: 404 }
      );
    }

    // Add the new review to the product's reviews array
    const updatedProduct = await client
      .patch(productId)
      .setIfMissing({ reviews: [] })
      .append('reviews', [
        {
          name,
          comment,
          rating: Number(rating),
        },
      ])
      .commit();

    return NextResponse.json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}