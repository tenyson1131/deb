import React from "react";

const Join = () => {
  return (
    <div
      className="py-20"
      style={{
        background:
          "radial-gradient(circle, rgba(255,238,252,1) 0%, rgba(255,210,252,1) 58%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="px-36 flex flex-col items-center">
        <p className="font-semibold text-4xl text-center w-[80%] leading-snug">
          Join the world's larget company that rely on EmailChcker to protect
          their sender reputation.
        </p>
        <p className="mt-6 text-gray-500 text-center w-[620px]">
          Sign up and get 100 free credits, as well as the opportunity to test
          our list cleaning and API capabilities.
        </p>

        <div className="bg-[#ff0fe6] mt-7 text-white rounded-md px-5 py-2">
          TRY FOR FREE
        </div>
        <p className="mt-1 text-xs text-gray-500">Includes 100 free credits</p>
      </div>
    </div>
  );
};

export default Join;
