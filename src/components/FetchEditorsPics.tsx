// // components/FetchEditorsPics.js
// "use client"; // Ensure this is a Client Component
// import { useQuery } from "@tanstack/react-query";
// import { client } from "@/sanity/lib/client";
// import EditorsPics from "./editor-pics";

// // Define the type for the editors pick data
// interface EditorsPic {
//   name: string;
//   image: {
//     asset: {
//       _id: string;
//       url: string;
//     };
//   };
// }

// // Fetch data function
// async function getData() {
//   const query = `
//     *[_type == "editorsPic"]{
//       name,
//       image{
//         asset->{
//           _id,
//           url
//         }
//       }
//     }
//   `;
//   const data = await client.fetch(query);
//   return data;
// }

// export default function FetchEditorsPics() {
//   const { data, isLoading, isError } = useQuery<EditorsPic[]>({
//     queryKey: ["editorsPics"],
//     queryFn: getData,
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError || !data || data.length === 0) {
//     return <div>No data available</div>;
//   }

//   // Pass data to EditorsPics component as props
//   return <EditorsPics data={data} />;
// }