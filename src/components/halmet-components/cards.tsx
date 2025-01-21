import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar1.png", // Change this to the correct image path
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar2.png",
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar3.png",
  },
  {
    id:4 ,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar4.png",
  },
  {
    id:5 ,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar7.png",
  },
  {
    id:6 ,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar6.png",
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar1.png",
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
    image: "/umar2.png",
  },
   
  // Add more products here as needed
];

const Cards = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-6 pl-[21px]">Bestseller Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={239}
              height={342}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.department}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="line-through text-gray-400">
                  {product.originalPrice}
                </span>
                <span className="text-green-500 font-bold">
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
