import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const Section1 = () => {
  return (
    <div className="bg-green-300s relative w-full flex px-10 min-[1188px]:pl-20 sjustify-center pt-3 sh-[75vh]">
      {/* <div className="borders w-[1200px]s absolute -left-10 max-[1360px]:-left-[12vw]">
    <img src="/bg-left.avif" alt="" />
  </div> */}
      {/*  */}
      <div className="mt-[70px] flexs flex-col justify-center items-center borders min-[1188px]:w-[40%]">
        {/* heading */}
        <div className="text-center font-bold text-4xl min-[900px]:text-5xl space-y-2">
          {/* <p>Email Validation Tool;</p>
      <p>Simple, Fast & Accurate.</p> */}
          <p>Accurate, fast and</p>
          <p>secure email</p>
          <p>validation service</p>
        </div>

        {/* desc */}
        <div className="bg-blue-300s mt-7 text-center text-gray-500 text-[17px]">
          Don't let bounce, disposable, spam-trap and deactivated emails
          decrease your sending reputation, waste your time and money. 30% of
          emails go bad in just one year. If over 10% of your emails are bad,
          then less than 44% are delivered. Use a bulk email verification tool
          to eliminate any bad emails.
        </div>

        {/* btnn */}
        <span className="uppercase w-[240px] mx-auto mt-10 border border-gray-300 rounded-full px-12 py-2 flex items-center gap-2">
          <FaPlayCircle color="#ff0fe6" size={18} />
          <p className="text-lg font-semibold">Try it now</p>
        </span>

        <div className="text-center mt-5 text-xs tracking-wide">
          <p>For Free. No Credit Card is Required.</p>
          <p className="text-pink-600">
            From
            <span className="font-semibold"> $0.0003 </span>
            per check.
          </p>
        </div>

        <div className="flex flex-col items-center mt-7">
          <p className="flex items-center gap-1 text-sm">
            <span>See our</span>
            <span className="font-semibold"> 1,274 </span> reviews on
            <span>
              <IoStar color="rgb(0, 182, 122)" />
            </span>
            <span className="font-semibold"> Trustpilot </span>
          </p>

          <p className="font-semibolds text-gray-600 text-center text-xs mt-1">
            4.9/5 - Excellent - based on 1,500+ reviews on different platforms.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="borders w-[1200px]s absolute -right-20s scale-x-[-1] -right-40 max-[1360px]:-right-[12vw]">
        {/* <img src="/bg-right.avif" alt="" /> */}
        {/* <img src="/bg-right2.png" alt="" /> */}
      </div>
      <div className="borders w-[1200px]s absolute -right-20s right-[350px] max-[1360px]:-right-[12vw]">
        {/* <img src="/bg-right.avif" alt="" /> */}
        {/* <img src="/bg-left.avif" alt="" /> */}
        {/* <img src="/bg-left2.png" alt="" /> */}
      </div>
      <div className="borders max-[1188px]:hidden w-[1200px]s absolute top-0 -right-8 min-[1512px]:right-6">
        {/* <img src="/bg-right.avif" alt="" /> */}
        {/* <img src="/bg-left.avif" alt="" /> */}
        {/* <img src="/bg-left2.png" alt="" /> */}
        <img
          src="/bg2.png"
          alt=""
          className="w-[800px] min-[1258px]:w-[850px] min-[1385px]:w-[950px]"
        />
      </div>
    </div>
  );
};

export default Section1;
