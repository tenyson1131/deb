import React from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Working = () => {
  return (
    <div className="bg-red-300s mt-10 px-10 min-[900px]:px-20 min-[1300px]:px-36">
      <div
        className="bg-green-300s py-14"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/bg-10.jpg) ",
          //   backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="font-semibold text-4xl sm:text-6xl">How it Works</div>
        <div className="borders flex flex-col min-[900px]:flex-row items-centers gap-8">
          <div className="flex-1">
            <p className="mt-5 tracking-wide text-gray-500">
              DeBounce email list cleaning service allows you to upload and
              verify lists of email addresses quickly and securely without
              sending emails using these three steps:
            </p>

            <div className="mt-8 space-y-5 text-lg tracking-wide text-gray-600">
              <div className="flex items-center gap-4">
                <p>
                  <FaTrashAlt color="#ff0fe6" size={40} />
                </p>
                <p>
                  We'll clean your list by detecting invalid, spammy or
                  non-operational mailboxes.
                </p>
              </div>
              {/*  */}
              <div className="flex items-center gap-4">
                <p>
                  <FaCheck color="#ff0fe6" size={40} />
                </p>
                <p>
                  We make sure that no one on your list receives an unsolicited
                  email during validation.
                </p>
              </div>
              {/*  */}
              <div className="flex items-center gap-4">
                <p>
                  <IoMdMail color="#ff0fe6" size={40} />
                </p>
                <p>
                  The result is a clean email list you can use effectively in
                  your marketing campaign.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex-1">
            {/* <img src="/yt.avif" alt="" /> */}
            <img src="/chart.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
