import React from "react";

const Platforms = () => {
  return (
    <div className="bg-red-300s bg-[#fafafa] border-y py-20">
      <div className="px-5 min-[900px]:px-36 flex flex-col min-[1400px]:flex-row max-[1400px]:gap-5">
        <div className="bg-green-300s max-w-[700px] flex flex-col justify-center flex-1">
          {/* <p className="font-semibold text-5xl">Integration</p> */}
          <p className="font-semibold text-4xl min-[900px]:text-5xl borders">
            Email verification for all your favorite platforms
          </p>

          <div className="mt-7">
            <p className="font-semibold text-gray-600">
              Connect your ESP Account:
            </p>
            <p className="min-[1400px]:w-[450px] text-gray-500 mt-1">
              {/* Powerful integrations help you to automate import and keep your
                lists continuously clean. */}
              Connect EmailChecker's real-time email verification API to the
              email marketing and delivery platforms you love. Leverage the
              email list verification tool for bulk email verification or
              real-time email list cleaning as visitors submit their addresses.
              Enjoy email delivery verification for more than 60 popular website
              builders, CRMs, email delivery service providers, and more.
            </p>
          </div>

          <div className="mt-6 flex">
            <p className="bg-[#ff0fe6] font-semibold text-white rounded-full px-5 py-1 ">
              READ MORE
            </p>
          </div>
        </div>
        {/*  */}
        <div className="bg-blue-300s flex-1 flex justify-center">
          <img
            src="https://ik.imagekit.io/debounce/wp-content/uploads/2020/11/debounce-integrations-e1608344474951.png"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Platforms;
