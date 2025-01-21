// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";


// // Helper to build image URLs

//     // GROQ Query
//     const getData = async() => {
//       const query = `*[_type == "heroSection"][0]{
//         name,
//         title,
//         description,
//         slug,
//         image{
//           asset->{
//             url
//           }
//         }
//       }`;
//       const data = await client.fetch(query);
//       console.log(data);
//       return data;
//       }
// export default async function HeroPage (){
//   const data = await getData();
//   return (
//     <main className="bg-white">
//       <div
//         className="relative bg-cover bg-center sm:bg-[top_center] lg:bg-center h-[400px] sm:h-[600px] lg:h-[716px]"
//         style={{
//           backgroundImage: `url(${urlFor(data.image.asset.url).url()})`,
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0"></div>

//         {/* Text Content */}
//         <div className="absolute top-40 lg:left-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:text-left text-center text-white px-4">
//           <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide mb-2 sm:mb-4">
//             {data.name}
//           </h2>
//           <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold mb-4 sm:mb-6 leading-tight line-clamp-2">
//             {data.title}
//           </h1>
//           <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed mb-4 sm:mb-8">
//             {data.description}
//           </p>
//           <button className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
//             SHOP NOW
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
 



















import React from "react";

const Hero = () => {
  return (
    <main className="bg-white">
    <div className="relative bg-[url('/hero.png')]  bg-cover bg-center sm:bg-[top_center] lg:bg-center h-[400px] sm:h-[600px] lg:h-[716px] ">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Text Content */}
      <div className="absolute top-40 lg:left-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:text-left text-center text-white px-4">
        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide mb-2 sm:mb-4">
          SUMMER 2020
        </h2>
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold mb-4 sm:mb-6 leading-tight">
          NEW COLLECTION
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed mb-4 sm:mb-8">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
          SHOP NOW
        </button>
      </div>
    </div>
    </main>
  );
};

export default Hero;