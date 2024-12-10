import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { LuMailSearch } from "react-icons/lu";

const Login = () => {
  return (
    <div
      className="h-screen w-screen overflow-hidden flex p-8 gap-5"
      style={{
        background: "rgb(255,242,254)",
        background:
          "linear-gradient(90deg, rgba(255,242,254,1) 0%, rgba(209,84,173,1) 97%)",
      }}
    >
      <div className="bg-red-200s bg-white rounded-md basis-[35%] flex flex-col">
        <div className="bg-blue-200s basis-[26%] flex justify-center items-center">
          {/* <img src="./debounce-logo-2.png" alt="" className="w-64" /> */}
          <img src="./debounce-logo-pink.png" alt="" className="w-64" />
        </div>
        <div className="bg-blue-200s pl-14">
          <div className="font-semibold text-2xl tracking-wide">
            Welcome Back
          </div>
        </div>
        {/* border */}
        <div className="border relative border-gray-200 flex mt-2">
          <div className="bg-transparent -bottom-1 pl-14 absolute">
            <div className="borders w-8 h-2 rounded-sm bg-blue-500s bg-[#ff0fe6]"></div>
          </div>
        </div>
        {/* content */}
        <div className="bg-green-200s flex-1 pt-2">
          {/* email */}
          <div className="pl-9 pr-14 mt-5 flex items-end gap-3">
            <div className="mb-1">
              <LuMailSearch size={27} color="#ff0fe6" />
            </div>
            <div className="w-full">
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter your Email"
                className="border mt-1 border-gray-200 rounded-md w-full  focus:outline-none px-3 py-1 font-light"
              />
            </div>
          </div>

          {/* password */}
          <div className="pl-9 pr-14 mt-5 flex items-end gap-3">
            <div className="mb-1">
              <FaFingerprint size={27} color="#ff0fe6" />
            </div>
            <div className="w-full">
              <div>
                <span>Password </span>-
                <span className="text-[#ff0fe6]"> forget?</span>
              </div>
              <input
                type="text"
                placeholder="Enter your Password"
                className="border mt-1 border-gray-200 rounded-md w-full  focus:outline-none px-3 py-1 font-light"
              />
            </div>
          </div>

          <div className="mt-5 pl-[76px] flex gap-5">
            <button className="bg-[#ff0fe6] px-3 rounded-md text-white py-px">
              Retrieve
            </button>
            <p className="text-[#ff0fe6]">Login</p>
            <p className="text-[#ff0fe6]">Register</p>
          </div>
        </div>
      </div>

      {/* 2nd div */}
      <div className="bg-white rounded-md flex-1 p-8">
        <div className="borders h-full flex flex-col gap-5">
          <div className="bg-red-200 basis-[43%]">
            <img src="./email-banner.png" alt="" className="h-full w-full" />
          </div>
          {/*  */}
          <div className="bg-red-200s flex flex-col flex-1">
            <div>
              <div className="font-semibold text-gray-600">
                <p>Tip:</p>
                <p className="text-lg mt-1">
                  Is it safe to send emails to role-based email addresses?
                </p>
              </div>
              <div className="text-gray-500 text-sm mt-1">
                Role-based email accounts are always an issue for the marketers
                as role-based email accounts are known for hindering the email
                deliverability rates. Here are the risks associated with
                role-based email accounts for sending marketing emails -
                <span className="text-[#ff0fe6]"> Read More.</span>
              </div>
            </div>
            <div className="borders mt-10 flex-1 gap-3 flex items-end">
              <div className="max-w-[300px] border rounded-md">
                <div className=" relative">
                  <img
                    src="https://ik.imagekit.io/debounce/wp-content/uploads/2024/11/hard-bounce-vs-soft-bounce.png"
                    alt=""
                  />

                  <div className="absolute bottom-4 left-2 rounded-full bg-white p-1">
                    <IoArrowBack color="gray" size={22} />
                  </div>
                </div>

                <div className="px-3 pt-1 pb-10 font-semibold text-sm text-gray-500">
                  Hard Bounces versus Soft Bounces
                </div>
              </div>
              {/*  */}
              <div className="max-w-[300px] border rounded-md">
                <div className=" relative">
                  <img
                    src="https://ik.imagekit.io/debounce/wp-content/uploads/2024/11/email-return-path.png"
                    alt=""
                  />

                  <div className="absolute bottom-4 left-2 rounded-full bg-white p-1">
                    <IoArrowBack color="gray" size={22} />
                  </div>
                </div>

                <div className="px-3 pt-1 pb-10 font-semibold text-sm text-gray-500">
                  What is Return Path Email
                </div>
              </div>
              {/*  */}
              <div className="max-w-[300px] border rounded-md">
                <div className=" relative">
                  <img
                    src="https://ik.imagekit.io/debounce/wp-content/uploads/2024/06/mail-merge-explained.png"
                    alt=""
                  />

                  <div className="absolute bottom-4 left-2 rounded-full bg-white p-1">
                    <IoArrowBack color="gray" size={22} />
                  </div>
                </div>

                <div className="px-3 pt-1 pb-5 font-semibold text-sm text-gray-500">
                  Mail Merge Explained: Definition, Uses, Tutorial [2024]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
