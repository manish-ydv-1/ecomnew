import React from "react";

const Midhero = () => {
  return (
    <>
      <div>
        {/* Main div */}
        <div className="container grid md:grid-cols-2 items-center  mx-auto bg-[#e3edf6] mt-6 dark:bg-black">
          {/* left side k liye */}
          <div className="">
            <img src="/banner.jpg" alt="Laptop " />
          </div>

          {/* right image  */}
          <div className="text-center bg-red-x600  ">
            <div className="text-3xl  dark:text-white font-medium ">
              Don't miss the offer
              <div>
                <span> Grab it now </span>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Midhero;
