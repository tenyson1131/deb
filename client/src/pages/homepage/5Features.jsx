import React from "react";
import { GiHealingShield } from "react-icons/gi";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Features = () => {
  return (
    <div className="py-20 bg-red-300s">
      <div className="px-2 min-[1300px]:px-36">
        <p className="text-center text-4xl min-[900px]:text-5xl font-bold">
          Features That Make Your List Clean!
        </p>
        <p className="text-center mt-3 text-gray-500">
          You want results from your email campaigns. We help you achieve
        </p>
        <p className="text-center text-gray-500 mt-8">
          them. Discover why we’re the right partner.
        </p>

        <div className="bg-green-300s mt-16 flex flex-wrap gap-6 justify-center">
          {/* <Cards /> */}

          <div className="w-96 text-center h-56s px-14 py-10 space-y-4 rounded-md bg-[#fff8ff]">
            <div className="borders flex justify-center">
              <IoMail size={50} color="#830075" />
            </div>

            <div className="font-bold text-2xl">
              99% accurate email verification
            </div>

            <div className="text-gray-500 text-lg">
              Whether you use bulk email list cleaning or real-time email
              verification with the API, you'll get 99% accurate results.
            </div>
          </div>
          {/*  */}
          <div className="w-96 text-center h-56s px-14 py-10 space-y-4 rounded-md bg-[#fff8ff]">
            <div className="borders flex justify-center">
              <GiHealingShield size={50} color="#830075" />
            </div>

            <div className="font-bold text-2xl">Secure email</div>

            <div className="text-gray-500 text-lg">
              Whether you use bulk email list cleaning or real-time email
              verification with the API, you'll get 99% accurate results.
            </div>
          </div>
          {/*  */}
          <div className="w-96 text-center h-56s px-14 py-10 space-y-4 rounded-md bg-[#fff8ff]">
            <div className="borders flex justify-center">
              <IoMdThumbsUp size={50} color="#830075" />
            </div>

            <div className="font-bold text-2xl">Secure email</div>

            <div className="text-gray-500 text-lg">
              Whether you use bulk email list cleaning or real-time email
              verification with the API, you'll get 99% accurate results.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
