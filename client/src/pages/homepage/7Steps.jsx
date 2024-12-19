import React, { useState } from "react";

const Steps = () => {
  const stepsImg = [
    // "https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/step1-upload.v1.png?tr=w-1140",
    "./upload.png",
    // "https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/step2-process.v1.png?tr=w-1140",
    "./process.png",
    // "https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/step3-download.v1.png?tr=w-1140",
    "./download.png",
  ];
  const [stepImg_activeIndex, setStepImg_activeIndex] = useState(0);
  return (
    <div className="bg-red-300s py-20">
      <div className="px-5 min-[700px]:px-20 min-[1200px]:px-36 text-center">
        <p className="text-5xl font-semibold">Simple Steps.</p>

        <div className="flex flex-col min-[900px]:flex-row gap-5 mt-16 max-[900px]:text-sm">
          <div
            className={`hover:bg-[#fef4fe] min-[900px]:w-[400px] p-5 cursor-pointer
            ${stepImg_activeIndex == 0 ? "bg-[#fef4fe]" : "bg-white"}
            `}
            onClick={() => setStepImg_activeIndex(0)}
          >
            <p className="text-start font-semibold text-gray-700">STEP 1</p>
            <p className="mt-2 text-start text-gray-500">
              Upload your email list in a TXT or CSV format, then wait for the
              application to process your list. You can select to keep or remove
              the duplicated rows or choose to enrich your results or not.
            </p>
          </div>
          <div
            className={`hover:bg-[#fef4fe]  min-[900px]:w-[400px] p-5 cursor-pointer
            ${stepImg_activeIndex == 1 ? "bg-[#fef4fe]" : "bg-white"}
            `}
            onClick={() => setStepImg_activeIndex(1)}
          >
            <p className="text-start font-semibold text-gray-700">STEP 1</p>
            <p className=" mt-2 text-start text-gray-500">
              Upload your email list in a TXT or CSV format, then wait for the
              application to process your list. You can select to keep or remove
              the duplicated rows or choose to enrich your results or not.
            </p>
          </div>
          <div
            className={`hover:bg-[#fef4fe]  min-[900px]:w-[400px] p-5 cursor-pointer
            ${stepImg_activeIndex == 2 ? "bg-[#fef4fe]" : "bg-white"}
            `}
            onClick={() => setStepImg_activeIndex(2)}
          >
            <p className="text-start font-semibold text-gray-700">STEP 1</p>
            <p className=" mt-2 text-start text-gray-500">
              Upload your email list in a TXT or CSV format, then wait for the
              application to process your list. You can select to keep or remove
              the duplicated rows or choose to enrich your results or not.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <img
            // src="	https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/step1-upload.v1.png?tr=w-1140"
            src={stepsImg[stepImg_activeIndex]}
            alt=""
            className="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
