import { defineType } from "sanity";

export const FeatureProduct = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'title', // Use 'title' instead of 'name'
      },
    },
    {
      name: "department",
      title: "Department",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Original price of the product",
    },
    {
      name: "discountedPrice",
      title: "Discounted Price",
      type: "number",
      description: "Price after discount",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
      description: "List of available colors (e.g., Blue, Green, etc.)",
    },
  ],
});







// import { defineType } from "sanity";

//   export const FeatureProduct = defineType({
//    name: "product",
//     title: "Product",
//     type: "document",
//     fields: [
//       {
//         name: "title",
//         title: "Product Title",
//         type: "string",
//       },
//       {
//         name: 'slug',
//         type: 'slug',
//         title: 'Product Slug',
//         options: {
//           source: 'name',
//         },
//       },
//       {
//         name: "department",
//         title: "Department",
//         type: "string",
//       },
//       {
//         name: "price",
//         title: "Price",
//         type: "number",
//         description: "Original price of the product",
//       },
//       {
//         name: "discountedPrice",
//         title: "Discounted Price",
//         type: "number",
//         description: "Price after discount",
//       },
//       {
//         name: "image",
//         title: "Product Image",
//         type: "image",
//         options: {
//           hotspot: true,
//         },
//       },
//       {
//         name: "colors",
//         title: "Available Colors",
//         type: "array",
//         of: [{ type: "string" }],
//         description: "List of available colors (e.g., Blue, Green, etc.)",
//       },
//     ],
//   });
  