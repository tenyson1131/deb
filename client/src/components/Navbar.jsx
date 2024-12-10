import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full border-b-2 flex justify-around py-6">
      <div className="bg-red-200s flex-1s flex gap-14">
        {/* img */}
        <div>
          {/* <img src="/debounce-logo-2.png" alt="" className="w-48" /> */}
          {/* <img src="/debounce-logo-pink.png" alt="" className="w-48" /> */}
          <img src="/logo3.png" alt="" className="w-52" />
        </div>

        <div className="max-[1188px]:hidden flex items-center gap-5 font-semibold text-gray-500">
          <div className="flex items-center">
            Solutions
            <p>
              <RiArrowDropDownLine size={20} />
            </p>
          </div>
          <p>Features</p>
          <div className="flex items-center">
            Integrations
            <p>
              <RiArrowDropDownLine size={20} />
            </p>
          </div>
          <p>Pricing</p>
          <div className="flex items-center">
            Resources
            <p>
              <RiArrowDropDownLine size={20} />
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-green-200s flex-1s flex items-center gap-6 font-semibold text-gray-600 text-[17px]">
        <div className="">Login</div>
        <div
          className="bg-blue-400 rounded-full px-5 py-1 bg-gradient-to-r from-[#ff0fe6] to-pink-300 text-white flex items-center gap-2"
          // style={}
        >
          Sign up
          <MdArrowRightAlt />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
