import React from 'react'
import { useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Fragrances = () => {
      const { fragrance } = useParams();
  return (
    <>
       <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/product-details/essence-mascara`} className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
              <img class="rounded-t-lg size-48 transition-all duration-300 hover:scale-110 " src="/Trending/06.png" alt="" />
            </Link>
            <div class="p-5">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                fragrances
              </p>

              <a href="#">
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Calvin Klein CK One
                </p>
                <hr />
              </a>

              <p class=" font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center">
                {" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " /> &nbsp;4.85
              </p>
              <div className="flex flex-wrap items-center justify-between px-2 pb-2">
                <div>
                  {" "}
                  <h3 className="text-blue-600 font-medium text-xl">$49.99</h3>
                  <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                    $9.99
                  </span>
                </div>
                <button>
                  <FaShoppingCart className="h-10 w-10 mr-4  " />
                </button>
              </div>
            </div>
          </div>
    </>
  )
}

export default Fragrances
