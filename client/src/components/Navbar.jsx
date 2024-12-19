import React, { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full border-b-2 flex justify-around py-6">
      <div className="bg-red-200s flex-1s flex gap-14">
        {/* img */}
        <div>
          {/* <img src="/debounce-logo-2.png" alt="" className="w-48" /> */}
          {/* <img src="/debounce-logo-pink.png" alt="" className="w-48" /> */}
          <img src="/logo3.png" alt="" className="w-52" />
        </div>

        <div className="max-[1000px]:hidden flex items-center gap-5 font-semibold text-gray-500">
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
      <div className="bg-green-200s max-[1000px]:hidden flex-1s flex items-center gap-6 font-semibold text-gray-600 text-[17px]">
        <div className="">Login</div>
        <Link to="/register">
          <div
            className="bg-blue-400 rounded-full px-5 py-1 bg-gradient-to-r from-[#ff0fe6] to-pink-300 text-white flex items-center gap-2 hover:from-[#ff0f73] hover:to-rose-300 transition-colors duration-200 ease-in-outs"
            // style={}
          >
            Sign up
            <MdArrowRightAlt />
          </div>
        </Link>
      </div>

      {/* hamburger */}
      <div
        className="min-[1000px]:hidden borders flex justify-center items-center cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RxHamburgerMenu size={26} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 max- w-[300px]s w-screen h-screen s sh-[500px] backdrop-blur-sm bg-gray-800/30 text-white z-50 flex flex-col items-center gap-8 sp-10 transition-transform duration-200 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" flex flex-col items-center gap-8 p-10 pt-0 w-screen bg-gray-800">
          <button
            className="self-end text-xl font-bold text-white translate-y-10"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <p className="font-semibold">Solutions</p>
          <p className="font-semibold">Features</p>
          <p className="font-semibold">Integrations</p>
          <p className="font-semibold">Pricing</p>
          <p className="font-semibold">Resources</p>
          <Link to="/register">
            <div className="bg-gradient-to-r from-[#ff0fe6] to-pink-300 text-white px-5 py-2 rounded-full hover:from-[#ff0f73] hover:to-rose-300 transition-colors duration-200 ease-in-out">
              Sign up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
