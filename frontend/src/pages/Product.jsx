import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Product = () => {

  // Example product details
  const products = [
    {
      id: 1,
      name: "Essence Mascara Lash Princess",
      category: "Beauty",
      price: 9.27,
      originalPrice: 9.99,
      image: "/Trending/01.png",
      rating: 4.99
    },
    {
      id: 2,
      name: "Eyeshadow Palette with Mirror",
      category: "Beauty",
      price: 18.89,
      originalPrice: 19.99,
      image: "/Trending/02.png",
      rating: 3.28
    },
    {
      id: 3,
      name: "Powder Canister",
      category: "Beauty",
      price: 22.27,
      originalPrice: 78.99,
      image: "/Trending/03.png",
      rating: 4.82
    },
    {
      id: 4,
      name: "Red Lipstick",
      category: "Beauty",
      price: 12.27,
      originalPrice: 14.99,
      image: "/Trending/04.png",
      rating: 3.82
    },
    {
      id: 5,
      name: "Red Nail Polish",
      category: "Beauty",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Trending/05.png",
      rating: 3.82
    },
    {
      id: 6,
      name: "Calvin Klein CK One",
      category: "fragrances",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Trending/06.png",
      rating: 3.82
    },
    {
      id: 7,
      name: "Chanel Coco Noir Eau De",
      category: "fragrances",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Trending/07.png",
      rating: 3.82
    },
    {
      id: 8,
      name: "Dior J'adore",
      category: "fragrances",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Trending/08.png",
      rating: 3.82
    },  {
      id: 9,
      name: "Dolce Shine Eau de",
      category: "fragrances",
      price: 9.27,
      originalPrice: 9.99,
      image: "/Arrival/9.png",
      rating: 4.99
    },
    {
      id: 10,
      name: "Gucci Bloom Eau de",
      category: "fragrances",
      price: 18.89,
      originalPrice: 19.99,
      image: "/Arrival/10.png",
      rating: 3.28
    },
    {
      id:11,
      name: "Annibale Colombo Bed",
      category: "furniture",
      price: 22.27,
      originalPrice: 78.99,
      image: "/Arrival/11.png",
      rating: 4.82
    },
    {
      id: 12,
      name: "Annibale Colombo Sofa",
      category: "furniture",
      price: 12.27,
      originalPrice: 14.99,
      image: "/Arrival/12.png",
      rating: 3.82
    },
    {
      id: 13,
      name: "Bedside Table African Cherry",
      category: "furniture",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Arrival/13.png",
      rating: 3.82
    },
    {
      id: 14,
      name: "Knoll Saarinen Executive Conference Chair",
      category: "furniture",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Arrival/14.png",
      rating: 3.82
    },
    {
      id: 15,
      name: "Wooden Bathroom Sink With Mirror",
      category: "furniture",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Arrival/15.png",
      rating: 3.82
    },
    {
      id: 16,
      name: "Apple",
      category: "groceries",
      price: 8.77,
      originalPrice: 14.99,
      image: "/Arrival/16.png",
      rating: 3.82
    },
    // Add more products as needed
  ];

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} has been added to your cart!`);
  };



  return (
    <>
      <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
           <div className="sm:flex items-center justify-between">
            
           </div>
           {/* card */}
           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 mb-6">
             {products.map((product) => (
               <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                 <Link to={`/product-details/${product.name}`} className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
                   <img
                     className="rounded-t-lg size-48 transition-all duration-300 hover:scale-110"
                     src={product.image}
                     alt={product.name}
                   />
                 </Link>
                 <div className="p-2">
                   <p className="font-normal text-gray-700 dark:text-gray-400">{product.category}</p>
                   <a href="#">
                     <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</p>
                     <hr />
                   </a>
                   <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center">
                     {[...Array(4)].map((_, index) => (
                       <FaStar key={index} className="text-yellow-400" />
                     ))}
                     <FaRegStar className="text-yellow-400" /> &nbsp;{product.rating}
                   </p>
                   <div className="flex flex-wrap items-center justify-between px-2 pb-2">
                     <div>
                       <h3 className="text-blue-600 font-medium text-xl">${product.price}</h3>
                       <span className="mr-2 text-sm line-through opacity-70 dark:text-white">${product.originalPrice}</span>
                     </div>
                     <button onClick={() => handleAddToCart(product)}>
                       <FaShoppingCart className="h-10 w-10 mr-4 text-grey-800  hover:text-blue-600 text-3xl cursor-pointer transition-colors duration-300" />
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
      
    </>
  )
}

export default Product
