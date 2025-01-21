// components/editor-pics.tsx
"use client"; // Ensure this is a Client Component
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define the type for the editors pick data
interface EditorsPic {
  name: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

interface EditorsPicsProps {
  data?: EditorsPic[]; // Make data prop optional
}

export default function EditorsPics({ data }: EditorsPicsProps) {
  const [localData, setLocalData] = useState<EditorsPic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        const query = `
          *[_type == "editorsPic"]{
            name,
            image{
              asset->{
                _id,
                url
              }
            }
          }
        `;
        const result = await client.fetch(query);
        setLocalData(result);
        setLoading(false);
      };

      fetchData();
    } else {
      setLocalData(data);
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!localData || localData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col items-center overflow-x-hidden max-w-screen-2xl mx-auto w-full justify-center text-center  bg-[#FAFAFA] pt-3">
      <div>
        <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
          EDITOR&apos;S PICK 
        </h2>
        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
        {/* Men Image with Fixed Size White Div */}
        <div className="relative">
          <Image src={"/men.png"} alt="men" width={509} height={500} />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">MEN</span>
          </div>
        </div>

        {/* Women Image with Fixed Size White Div */}
        <div className="relative">
          <Image src={"/women.png"} alt="women" width={240} height={500} />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
          </div>
        </div>

        {/* Accessories and Kids Image with Fixed Size White Divs */}
        <div className="flex flex-col gap-6">
          {/* Accessories Image with Fixed Size White Div */}
          <div className="relative">
            <Image src={"/accessories.png"} alt="accessories" width={240} height={242} />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids Image with Fixed Size White Div */}
          <div className="relative">
            <Image src={"/kids.png"} alt="kids" width={240} height={242} />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">KIDS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">
        {/* Men Image with Fixed Size White Div */}
        <div className="relative w-[90%] sm:w-full">
          <Image src={"/men.png"} alt="men" width={509} height={500} />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">MEN</span>
          </div>
        </div>

        {/* Women Image with Fixed Size White Div */}
        <div className="relative w-full md:ml-24 h-auto">
          <Image src={"/women.png"} alt="women" width={240} height={500} 
          className="w-full mx-4 md:mx-0 md:w-[240px] md:h-[500px] object-cover"/>
          <div className="absolute bottom-4 left-4 w-full md:w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
          </div>
        </div>

        {/* Accessories and Kids Image with Fixed Size White Divs */}
        <div className="flex flex-col gap-6 w-[90%] sm:w-full">
          {/* Accessories Image with Fixed Size White Div */}
          <div className="relative ml-12">
            <Image src={"/accessories.png"} alt="accessories" width={240} height={242}
             />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids Image with Fixed Size White Div */}
          <div className="relative ml-12">
            <Image src={"/kids.png"} alt="kids" width={240} height={242} />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import React from "react";

// const getData = async() => {
//       const query = `*[_type == "editorsPic"]{
//   name,
//   image{
//     asset->{
//       _id,
//       url
//     }
//   }
// }
// `;
//       const data = await client.fetch(query);
//       console.log(data);
//       return data;
//       }
//       export default async function EditorsPics (){
//         const data = await getData();
//         return (
//     <div className="flex flex-col items-center overflow-x-hidden max-w-screen-2xl mx-auto w-full justify-center text-center  bg-[#FAFAFA] pt-3">
//       <div>
//         <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
//           EDITOR&apos;S PICK 
//         </h2>
//         <p className="text-[#737373] text-[14px]">
//           Problems trying to resolve the conflict between
//         </p>
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
        
//         {/* Men Image with Fixed Size White Div */}
//         <div className="relative">
//           <Image src={"/men.png"} alt="men" width={509} height={500} />
//           <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">MEN</span>
//           </div>
//         </div>

//         {/* Women Image with Fixed Size White Div */}
//         <div className="relative">
//           <Image src={"/women.png"} alt="women" width={240} height={500} />
//           <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
//           </div>
//         </div>

//         {/* Accessories and Kids Image with Fixed Size White Divs */}
//         <div className="flex flex-col gap-6">
//           {/* Accessories Image with Fixed Size White Div */}
//           <div className="relative">
//             <Image src={"/accessories.png"} alt="accessories" width={240} height={242} />
//             <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
//             </div>
//           </div>

//           {/* Kids Image with Fixed Size White Div */}
//           <div className="relative">
//             <Image src={"/kids.png"} alt="kids" width={240} height={242} />
//             <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">KIDS</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">
//         {/* Men Image with Fixed Size White Div */}
//         <div className="relative w-[90%] sm:w-full">
//           <Image src={"/men.png"} alt="men" width={509} height={500} />
//           <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">MEN</span>
//           </div>
//         </div>

//         {/* Women Image with Fixed Size White Div */}
//         <div className="relative w-full md:ml-24 h-auto">
//           <Image src={"/women.png"} alt="women" width={240} height={500} 
//           className="w-full mx-4 md:mx-0 md:w-[240px] md:h-[500px] object-cover"/>
//           <div className="absolute bottom-4 left-4 w-full md:w-[170px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
//           </div>
//         </div>

//         {/* Accessories and Kids Image with Fixed Size White Divs */}
//         <div className="flex flex-col gap-6 w-[90%] sm:w-full">
//           {/* Accessories Image with Fixed Size White Div */}
//           <div className="relative ml-12">
//             <Image src={"/accessories.png"} alt="accessories" width={240} height={242}
//              />
//             <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
//             </div>
//           </div>

//           {/* Kids Image with Fixed Size White Div */}
//           <div className="relative ml-12">
//             <Image src={"/kids.png"} alt="kids" width={240} height={242} />
//             <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">KIDS</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
