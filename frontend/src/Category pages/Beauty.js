import React from 'react'
import { useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Beauty = () => {
  const { beauty } = useParams();
   
  return (
    <>
    <div className='main m-4'>
    <p className='text-2xl font-semibold m-6'>Beauty Product :-</p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 mb-6">
          {/* card-01 */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/product-details/essence-mascara`} className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
              <img class="rounded-t-lg size-48 transition-all duration-300 hover:scale-110" src="/Trending/01.png" alt="" />
            </Link>
            <div class="p-2">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Beauty
              </p>

              <a href="#">
                <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Essence Mascara Lash Princess
                </p>
                <hr />
              </a>

              <p class=" font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center">
                {" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " /> &nbsp;4.99
              </p>
              <div className="flex flex-wrap items-center justify-between px-2 pb-2">
                <div>
                  {" "}
                  <h3 className="text-blue-600 font-medium text-xl">$9.27</h3>
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
{/* card02 */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/product-details/essence-mascara`} className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
              <img class="rounded-t-lg size-48 transition-all duration-300 hover:scale-110" src="/Trending/02.png" alt="" />
            </Link>
            <div class="p-2">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Beauty
              </p>

              <a href="#">
                <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Eyeshadow Palette with Mirror
                </p>
                <hr />
              </a>

              <p class=" font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center">
                {" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " /> &nbsp;3.28
              </p>
              <div className="flex flex-wrap items-center justify-between px-2 pb-2">
                <div>
                  {" "}
                  <h3 className="text-blue-600 font-medium text-xl">$18.89</h3>
                  <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                    $19.99
                  </span>
                </div>
                <button>
                  <FaShoppingCart className="h-10 w-10 mr-4  " />
                </button>
              </div>
            </div>
          </div>
{/* card03 */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/product-details/essence-mascara`} className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
              <img class="rounded-t-lg size-48 transition-all duration-300 hover:scale-110" src="/Trending/03.png" alt="" />
            </Link>
            <div class="p-2">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Beauty
              </p>

              <a href="#">
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Powder Canister
                </p>
                <hr />
              </a>

              <p class=" font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center">
                {" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " /> &nbsp;3.82
              </p>
              <div className="flex flex-wrap items-center justify-between px-2 pb-2">
                <div>
                  {" "}
                  <h3 className="text-blue-600 font-medium text-xl">$12.27</h3>
                  <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                    $14.99
                  </span>
                </div>
                <button>
                  <FaShoppingCart className="h-10 w-10 mr-4  " />
                </button>
              </div>
            </div>
          </div>
{/* card04 */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/product-details/essence-mascara`} className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
              <img class="rounded-t-lg size-48 transition-all duration-300 hover:scale-110" src="/Trending/04.png" alt="" />
            </Link>
            <div class="p-2">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Beauty
              </p>

              <a href="#">
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Red Lipstick
                </p>
                <hr />
              </a>

              <p class=" font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center">
                {" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " /> &nbsp;3.82
              </p>
              <div className="flex flex-wrap items-center justify-between px-2 pb-2">
                <div>
                  {" "}
                  <h3 className="text-blue-600 font-medium text-xl">$10.52</h3>
                  <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                    $12.99
                  </span>
                </div>
                <button>
                  <FaShoppingCart className="h-10 w-10 mr-4  " />
                </button>
              </div>
            </div>
          </div>

{/* card-05 */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/product-details/essence-mascara`} className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
              <img class="rounded-t-lg size-48 transition-all duration-300 hover:scale-110" src="/Trending/05.png" alt="" />
            </Link>
            <div class="p-5">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Beauty
              </p>

              <a href="#">
                <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Red Nail Polish
                </p>
                <hr />
              </a>

              <p class=" font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center">
                {" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " /> &nbsp;3.91
              </p>
              <div className="flex flex-wrap items-center justify-between px-2 pb-2">
                <div>
                  {" "}
                  <h3 className="text-blue-600 font-medium text-xl">$8.77</h3>
                  <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                    $8.99
                  </span>
                </div>
                <button>
                  <FaShoppingCart className="h-10 w-10 mr-4  " />
                </button>
              </div>
            </div>
          </div>


        </div>
        </div>
    </>
  )
}

export default Beauty
