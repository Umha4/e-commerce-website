export const ProductH = {
    name: 'bestsellerProduct',
    title: 'Bestseller Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Product Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'originalPrice',
        title: 'Original Price',
        type: 'number',
      },
      {
        name: 'discountedPrice',
        title: 'Discounted Price',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  