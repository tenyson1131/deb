import React from "react";
import { FiSend, FiUpload } from "react-icons/fi";

const Test = () => {
  return (
    <div className="border bg-[#fffbff]s py-16 max-[1000px]:px-4">
      <div className="w-full flexs text-center">
        <p className="font-bold text-4xl min-[900px]:text-5xl">
          Test the email validator
        </p>
        <p className="min-[1000px]:w-[60%] mx-auto mt-5 leading-loose text-gray-500">
          Find out how EmailChecker delivers superior bulk email verification
          with 99% accurate results. Enter an email address into the email list
          verification tool or upload a file to verify a list of email addresses
          for free.
        </p>

        <div>
          <p className="text-gray-500 mt-6">
            In seconds - learn why EmailChecker is the best email verification
            service available.
          </p>
          <div className="bg-[#9b2a95] w-[97%]s min-[1000px]:w-[950px] rounded-lg mx-auto p-10 mt-3">
            <div className="flex max-[1000px]:gap-2 flex-col min-[1000px]:flex-row w-full min-[1000px]:items-center justify-between">
              <div className="border-2 border-white rounded-md text-white bg-[#d93cd1] px-4 py-4 flex gap-2 items-center max-[1000px]:justify-center">
                <FiUpload size={25} />
                <p className="font-bold text-lg">Upload your list</p>
              </div>

              <div className="borders ml-7 text-white font-bold text-xl">
                {" "}
                OR{" "}
              </div>

              <div className="flex-1 min-[1000px]:ml-7 min-[1000px]:mr-4">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="py-4 rounded-md px-4 w-full text-black placeholder:text-black text-lg"
                />
              </div>

              <div className="bg-[#ffe435] px-7 py-4 flex items-center max-[1000px]:justify-center text-black font-semibold gap-2 rounded-md text-lg">
                <FiSend size={20} />
                Verify
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
