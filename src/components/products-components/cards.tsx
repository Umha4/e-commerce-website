import React from "react";
import Image from "next/image";
import FetchFeatureProducts from "@/components/FetchFeatureProducts";

export default function FeatureProduct() {
  return (
    <FetchFeatureProducts>
      {(data) => (
        <div className="flex flex-col items-center max-w-screen-2xl mx-auto w-full bg-white justify-center text-center py-10">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full px-5">
            {data.map((product, index) => (
              <div
                key={index}
                className="group bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                {/* Product Image with Zoom Effect */}
                <div className="overflow-hidden">
                  <Image
                    src={product.image?.asset?.url}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.department}</p>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-lg font-bold text-green-600">${product.discountedPrice}</span>
                    <span className="text-sm line-through text-gray-400">${product.price}</span>
                  </div>

                  {/* Color Options */}
                  <div className="flex items-center mt-3">
                    {product.colors?.map((color, index) => (
                      <span
                        key={index}
                        style={{ backgroundColor: color }}
                        className="w-5 h-5 rounded-full border border-gray-300 mr-2 hover:scale-110 transition-transform"
                      ></span>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </FetchFeatureProducts>
  );
}






// import React from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";

// const getData = async () => {
//   const query = `
//   *[_type == "product"]{
//   title,
//   department,
//   price,
//   discountedPrice,
//   image{
//     asset->{
//       _id,
//       url
//     }
//   },
//   colors
// }
//   `;
//   const data = await client.fetch(query);
//   return data;
 
// };

// export default async function FeatureProduct() {
//   const data = await getData();

//   return (
//     <div className="flex flex-col items-center max-w-screen-2xl mx-auto w-full bg-white justify-center text-center py-10">
//       {/* <div>
//         <h3 className="text-[#737373] text-[20px]">Featured Products</h3>
//         <h2 className="text-[#252B42] text-[32px] font-bold mt-2">BESTSELLER PRODUCTS</h2>
//         <p className="text-[#737373] text-[14px] mt-2">Problems trying to resolve the conflict between</p>
//       </div> */}

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full px-5">
//         {data?.map((product: any, index: number) => (
//           <div
//             key={index}
//             className="group bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
//           >
//             {/* Product Image with Zoom Effect */}
//             <div className="overflow-hidden">
//               <Image
//                 src={product.image?.asset?.url}
//                 alt={product.title}
//                 width={400}
//                 height={400}
//                 className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4 text-left">
//               <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
//               <p className="text-sm text-gray-500">{product.department}</p>

//               {/* Price */}
//               <div className="flex items-center space-x-2 mt-2">
//                 <span className="text-lg font-bold text-green-600">${product.discountedPrice}</span>
//                 <span className="text-sm line-through text-gray-400">${product.price}</span>
//               </div>

//               {/* Color Options */}
//               <div className="flex items-center mt-3">
//                 {product.colors?.map((color: string, index: number) => (
//                   <span
//                     key={index}
//                     style={{ backgroundColor: color }}
//                     className="w-5 h-5 rounded-full border border-gray-300 mr-2 hover:scale-110 transition-transform"
//                   ></span>
//                 ))}
//               </div>

//               {/* Add to Cart Button */}
//               <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
