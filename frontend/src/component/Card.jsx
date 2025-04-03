import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import cardProducts from "./cardProducts"; // Import product data

const Card = () => {
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show alert when product is added to the cart
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="container mt-8 mx-auto px-4 dark:bg-black-800">
      <div className="sm:flex items-center justify-between">
        <h1 className="text-4xl font-medium font-lora dark:text-white">
          Trending Products
        </h1>
      </div>
      {/* card */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
        {cardProducts.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <Link
              to={`/product-details/${product.id}`}
              className="hover:cursor-pointer flex flex-col items-center overflow-hidden"
            >
              <img
                className="rounded-t-lg size-48 transition-all duration-300 hover:scale-110"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="p-2">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {product.category}
              </p>
              <a href="#">
                <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </p>
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
                  <h3 className="text-blue-600 font-medium text-xl">
                    ${product.price}
                  </h3>
                  <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                    ${product.originalPrice}
                  </span>
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
  );
};

export default Card;
