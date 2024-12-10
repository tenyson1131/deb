import React from "react";
import { LuMailSearch } from "react-icons/lu";
import { MdOutgoingMail } from "react-icons/md";

const Forget = () => {
  return (
    <div
      className="borders h-screen w-screen overflow-hiddens flex justify-center items-center"
      style={{
        // background: "rgb(251,255,255);",
        // background:
        //   "linear-gradient(90deg, rgba(251,255,255,1) 0%, rgba(143,231,138,1) 41%, rgba(11,131,17,1) 100%)",
        background: "rgb(251,255,255)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,201,249,1) 52%, rgba(255,92,238,1) 100%)",
      }}
    >
      <div className="borders h-screen bg-whites py-20">
        <div className="bg-white shadow-md shadow-white rounded-lg w-[420px] h-full flex flex-col">
          <div className="bg-red-200s basis-[34%] flex justify-center items-center">
            {/* <img src="./debounce-logo-2.png" alt="" className="w-48" /> */}
            <img src="./debounce-logo-pink.png" alt="" className="w-48" />
          </div>
          <div className="bg-blue-200s pl-14">
            <div className="font-semibold text-xl tracking-wide">
              Retrieve Password
            </div>
          </div>
          {/* border */}
          <div className="border relative border-gray-200 flex mt-2">
            <div className="bg-transparent -bottom-1 pl-14 absolute">
              <div className="borders w-8 h-2 rounded-sm bg-blue-500s bg-[#ff0fe6]"></div>
            </div>
          </div>
          {/* content */}
          <div className="bg-green-200s flex-1 pt-10">
            <div className="pl-14">Enter your email adress to proceed.</div>

            <div className="pl-9 pr-14 mt-5 flex items-center gap-3">
              <div>
                <LuMailSearch size={27} color="#ff0fe6" />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="border border-gray-200 rounded-md w-full  focus:outline-none px-3 py-1 font-light"
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
      </div>
    </div>
  );
};

export default Forget;
