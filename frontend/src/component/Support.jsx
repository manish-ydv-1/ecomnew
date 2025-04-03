import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

const Support = () => {
  return (
    <>

    {/* main div */}
      <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
        {/* first grid */}
        <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
          <div>
            <h2 className="font-medium text-xl flex dark:text-white">
            <TbTruckDelivery className="h-8 w-8 mr-2" /> Free Delivery
            </h2>
            <p className="text-gray-600 dark:text-white ml-10">
              Orders from all items
            </p>
          </div>
        </div>

        {/* second grid */}
        <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
          <div>
            <h2 className="font-medium text-xl flex dark:text-white">
            <RiRefund2Fill className="h-8 w-8 mr-2" /> Return & Refund
            </h2>
            <p className="text-gray-600 dark:text-white ml-10">
              Money back guarantee
            </p>
          </div>
        </div>

        {/* third grid */}
        <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
          <div>
            <h2 className="font-medium text-xl flex dark:text-white">
            <RiDiscountPercentLine className="h-8 w-8 mr-2" /> Member Discount
            </h2>
            <p className="text-gray-600 dark:text-white ml-10">
              On order over $99
            </p>
          </div>
        </div>

        {/* Fourth grid */}
        <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
          <div>
            <h2 className="font-medium text-xl flex dark:text-white">
            <MdOutlineSupportAgent className="h-8 w-8 mr-2" /> Support 24/7
            </h2>
            <p className="text-gray-600 dark:text-white ml-10">
              Contact us 24 hours a day
            </p>
          </div>
        </div>


      </div>
    </>
  );
};

export default Support;