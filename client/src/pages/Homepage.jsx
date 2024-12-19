import React, { useState } from "react";
import { FaCheck, FaPlayCircle, FaTrashAlt } from "react-icons/fa";
import { IoMail, IoStar } from "react-icons/io5";
import { MdArrowRightAlt, MdOutlineMarkEmailRead } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./slider.css";
import { IoMdMail, IoMdThumbsUp } from "react-icons/io";
import { FiSend, FiUpload } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { GiHealingShield } from "react-icons/gi";
import Section1 from "./homepage/Section1";
import Companies from "./homepage/2Companies";
import Working from "./homepage/3Working";
import Test from "./homepage/4Test";
import Features from "./homepage/5Features";
import Platforms from "./homepage/6Platforms";
import Steps from "./homepage/7Steps";
import Join from "./homepage/8Join";

function Cards() {
  return (
    <div className="bg-blue-300s text-center w-72 px-5 py-5">
      <img
        src="	https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/forbidden.png?tr=h-55"
        alt=""
        className="mx-auto"
      />

      <div className="mt-7">
        <p className="font-semibold">Minimize Bouncing</p>
        <p className="mt-3 text-sm">
          Remove invalid and hard bounce email addresses from your database
          using an SMTP check.
        </p>
      </div>
    </div>
  );
}

const Homepage = () => {
  return (
    <div className="bg-red-300s w-screens overflow-x-hidden pb-10s">
      {/* section -1 */}
      <Section1 />

      {/* section -2 */}
      <Companies />

      {/* section -3 */}
      <Working />

      {/* section -4 */}
      {/* <div
        className="bg-red-400 px-36 py-16 flex justify-center"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/tic-tac-toe.png) ",
        }}
      >
        <div className="bg-white py-16 px-16 w-[55%] text-center">
          <div className="flex justify-center">
            <img src="/mail.svg" alt="" className="w-52" />
          </div>

          <p className="text-2xl font-semibold mt-5">
            Test Your Email and See How it Works!
          </p>

          <p className="mt-5">
            Type an email address and DeBounce tries to validate it. We also
            retrieve a photo associated with the provided email address if
            possible.
          </p>

          <div className="mt-8 flex justify-center items-center">
            <input
              type="text"
              placeholder="john.doe@mail.yahoo"
              className="bg-[#f4f9fe] px-5 py-1 rounded-full w-[50%]"
            />
            <div className="bg-[#ff0fe6] text-white rounded-full px-6 py-1 text-center -translate-x-10">
              Validate
            </div>
          </div>
        </div>
      </div> */}

      <Test />

      {/* section -5 */}
      <Features />

      {/* section -6 */}
      <Platforms />

      {/* section -7 */}
      <Steps />

      {/* section -8 */}
      <Join />
    </div>
  );
};

export default Homepage;
