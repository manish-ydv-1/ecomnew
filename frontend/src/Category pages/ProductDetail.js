import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


const ProductDetails = () => {
  // const { productName } = useParams(); // Getting the dynamic product name from the URL
  
  return (
    <div>
      <div className='container px-4 grid md:grid-cols-3 py-8 mx-auto '>
     {/* div-1 */}
      <img src="/Trending/01.png" alt="description" />
      
      {/* div-02 */}
        <div>
            <h2 className='text-2xl'>Essence Mascara Lash Princess</h2>
            
            <p className='font-normal text-gray-700 dark:text-gray-400 mt-2 flex items-center'>
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " /> &nbsp;4.99
                </p>
            <h3 className="text-blue-600 font-medium text-xl">$9.27</h3>
            <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                    $9.99
                  </span>
            <div ><strong className='mr-2'>Brand </strong><span>Essence</span></div>
            <div ><strong className='mr-2'>Category </strong><span>beauty</span></div>
            <div ><strong className='mr-2'>Stock </strong><span>5</span></div>
           <strong>About the product</strong>
           <p>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula. It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding. Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors.</p>
         <div className='flex mt-2 gap-1'> < MdOutlineShoppingCart  /><MdOutlineShoppingCart /></div> 
        </div>


{/* div-03 */}
        <div className='ml-4 ' >
            <h1 className='text-xl font-bold'>Reviews</h1>
          <div>
              <p className='font-semibold'>hbingley1</p>
             <p className='flex items-center'> <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " />&nbsp;4</p>
              <h5>I am satisfied with the value for money of the product. Everything seems nice but the delivery time seems a bit delayed</h5>  
          </div>

          <div>
              <p className='font-semibold'>rshawe2</p>
             <p className='flex items-center'> <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " />
                <FaRegStar className="text-yellow-400 " />&nbsp;3</p>
              <h5>I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money.</h5>  
          </div>


          <div>
              <p className='font-semibold'>yraigatt3</p>
             <p className='flex items-center'> <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaStar className="text-yellow-400" />{" "}
                <FaRegStar className="text-yellow-400 " />&nbsp;4</p>
              <h5>The product is nice. I got the delivery on time. I am using it for the last four months. My exprience with this product is very good.</h5>  
          </div>


            </div>
      </div>
      <hr/>
    <div className='text-4xl font-semibold dark:text-white ml-8 mt-4'>Similar Products</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 mb-6 ml-6 mr-6">
 {/* card-01 */}
  <div class="max-w-sm bg-white border border-gray-200  gap-3  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
               <img class="rounded-t-lg" src="/Trending/02.png" alt="" />
             </a>
             <div class="p-2">
               <p className="font-normal text-gray-700 dark:text-gray-400">
                 Beauty
               </p>
 
               <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Eyeshadow Palette with Mirror
                 </h5>
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

           

 {/* card-02 */}
  <div class="max-w-sm bg-white border border-gray-200  gap-3  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
               <img class="rounded-t-lg" src="/Trending/04.png" alt="" />
             </a>
             <div class="p-2">
               <p className="font-normal text-gray-700 dark:text-gray-400">
                 Beauty
               </p>
 
               <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Eyeshadow Palette with Mirror
                 </h5>
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

        {/* card-03 */}
  <div class="max-w-sm bg-white border border-gray-200  gap-3  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
               <img class="rounded-t-lg" src="/Trending/05.png" alt="" />
             </a>
             <div class="p-2">
               <p className="font-normal text-gray-700 dark:text-gray-400">
                 Beauty
               </p>
 
               <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Eyeshadow Palette with Mirror
                 </h5>
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


{/* card-04 */}
<div class="max-w-sm bg-white border border-gray-200 gap-3  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
               <img class="rounded-t-lg" src="/Trending/06.png" alt="" />
             </a>
             <div class="p-2">
               <p className="font-normal text-gray-700 dark:text-gray-400">
                 Beauty
               </p>
 
               <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Eyeshadow Palette with Mirror
                 </h5>
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


</div>
    </div>
  );
};

export default ProductDetails;







