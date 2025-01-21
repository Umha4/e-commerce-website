import { GiHamburgerMenu } from "react-icons/gi";
import { PiCirclesFourFill } from "react-icons/pi";
import FetchData from "../HomeFetch";

export default function HomeHero() {
  return (
    <FetchData>
      {(data) => (
        <main>
          <h1 className="text-3xl font-bold pl-6 my-8">Shop</h1>
          <div className="flex justify-center gap-6 p-10">
            {data.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-lg overflow-hidden w-80 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 hover:text-gray-800 cursor-pointer">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between p-4 bg-white">
              {/* Left: Showing results */}
              <div className="text-gray-600 font-semibold pl-6 text-1xl">
                <p>Showing all {data.length} results</p>
              </div>

              {/* Center: View buttons */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm">Views:</span>
                <button
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-600"
                  aria-label="Grid view"
                >
                  <PiCirclesFourFill className="text-gray-600 text-xl" />
                </button>

                <button
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-600"
                  aria-label="List view"
                >
                  <GiHamburgerMenu className="text-gray-600 text-xl" />
                </button>
              </div>

              {/* Right: Sorting dropdown and filter button */}
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </FetchData>
  );
}








// import client from "@/sanity/lib/client";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { PiCirclesFourFill } from "react-icons/pi";



// // Fetch data function
// async function getData() {
//   try {
//     const fetchData = await client.fetch(`
//       *[_type == "Hero"] {
//   title,
//   "imageUrl": image.asset->url,
//   description
// }`);
//     return fetchData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }

// export default async function HomeHero() {
//   const data = await getData();

//   if (!data || data.length === 0) {
//     return (
//       <main>
//         <div>
          
//           <p>No data available</p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main>
//     <h1 className="text-3xl font-bold pl-6 my-8">Shop</h1>
//     <div className="flex  justify-center gap-6 p-10">
//       {data.map((item:any) => (
//         <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden w-80 transform hover:scale-105 transition-transform duration-300">
//           <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
//           <div className="p-4">
//             <h2 className="text-xl font-semibold hover:text-blue-500 cursor-pointer">{item.title}</h2>
//             <p className="text-gray-600 text-sm mt-2 hover:text-gray-800 cursor-pointer">{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     <div>
//     <div className="flex items-center justify-between p-4 bg-white ">
//       {/* Left: Showing results */}
//       <div className="text-gray-600 font-semibold pl-6 text-1xl">
//         <p>Showing all 12 results</p>
//       </div>

//       {/* Center: View buttons */}
//       <div className="flex items-center space-x-3">
//         <span className="text-gray-600 text-sm">Views:</span>
//         <button
//   className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-600"
//   aria-label="Grid view"
// >
//   <PiCirclesFourFill className="text-gray-600 text-xl" />
// </button>
        
//         <button
//   className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-600"
//   aria-label="List view"
// >
//   <GiHamburgerMenu className="text-gray-600 text-xl" />
// </button>
//       </div>

//       {/* Right: Sorting dropdown and filter button */}
//       <div className="flex items-center space-x-4">
//         <select
//           className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//         >
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//           <option value="newest">Newest</option>
//         </select>
//         <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
//           Filter
//         </button>
//       </div>
//     </div>

//     </div>
   
//   </main>
//   );
// }
