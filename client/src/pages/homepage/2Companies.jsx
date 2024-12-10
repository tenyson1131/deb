import React from "react";

const Companies = () => {
  const images = [
    "/company/cornell.jpg",
    "/company/eset.jpg",
    "/company/mobitek.jpg",
    "/company/samsung.jpg",
    "/company/siemens.jpg",
    "/company/western-digital.jpg",
  ];
  return (
    <div className="bg-red-300s mt-28 w-[80%] mx-auto overflow-hidden">
      <div className="text-center">
        <p>- YOU ARE IN A GOOD COMPANY -</p>

        <div className="relative mt-9">
          <div
            className="bg-green-300s h-20 relative z-20"
            style={{
              background:
                " linear-gradient(90deg, white 0%, transparent 16%, transparent 84%, white 100%)",
            }}
          ></div>
          <div className="flex gap-28 absolute top-0 slider">
            {/* {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="slide"
                />
              ))} */}
            {images.concat(images).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-[150px] h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
