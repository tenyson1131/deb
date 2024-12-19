import axios from "axios";
import React, { useState } from "react";
import { LuMailSearch } from "react-icons/lu";
import { MdOutgoingMail } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Forget = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState(new Array(6).fill(""));

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isCodeScreen, setIsCodeScreen] = useState(false);

  const handleEmailSubmit = async () => {
    try {
      if (!email) {
        toast.info("Please enter your email");
        return;
      }

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/forget",
        { email }
      );

      if (res.status === 200) {
        setIsCodeScreen(true);
      }

      toast.success(res.data.message);
    } catch (error) {
      console.log("error while forget password", error);
    }
  };

  const handleResetSubmit = async () => {
    try {
      if (newPassword !== confirmPassword) {
        toast.info("Password doesn't match");
        return;
      }

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/reset",
        {
          email,
          resetToken: resetCode.join(""),
          newPassword,
        }
      );

      toast.success(res.data.message);
      if (res.status === 200) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log("error while reset password", error);
    }
  };

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
      <ToastContainer theme="light" />

      <div className="borders h-screen bg-whites min-[900px]:py-20">
        <div className="bg-white shadow-md shadow-white rounded-lg w-screen min-[900px]:w-[420px] h-full flex flex-col">
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
          {isCodeScreen ? (
            <div className="pt-10 flex flex-col items-center">
              <div className="font-semibold ">
                Enter Reset Code from your mail:
              </div>
              {/* otp */}
              <div className="space-x-1 mt-2">
                {resetCode.map((_, index) => (
                  <input
                    key={index}
                    id={`resetCode-input-${index}`}
                    type="number"
                    max={1}
                    maxLength={1}
                    value={resetCode[index]}
                    onInput={(e) => {
                      if (e.target.value == "e") {
                        e.target.value = "";
                        return;
                      }

                      if (e.target.value.length > 1) {
                        e.target.value = e.target.value.slice(-1);
                      }

                      setResetCode([
                        ...resetCode.map((data, i) =>
                          i == index ? e.target.value : data
                        ),
                      ]);

                      if (e.target.value !== "" && e.target.nextSibling) {
                        e.target.nextSibling.focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        (e.key === "Backspace" || e.key === "Delete") &&
                        e.target.value === "" &&
                        e.target.previousSibling
                      ) {
                        console.log("previous key inn");
                        e.target.previousSibling.focus();
                      }
                    }}
                    className="w-10 h-10 text-2xl text-center border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ))}
              </div>

              <div className="mt-5 borders w-[60%]">
                <div className="w-full">
                  <p>New Password:</p>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border border-gray-400 rounded-md w-full focus:outline-none px-3 py-1 font-light"
                  />
                </div>
                <div className="w-full mt-3">
                  <p>Confirm Password:</p>
                  <input
                    type="text"
                    placeholder="Confirm your Email"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border border-gray-400 rounded-md w-full focus:outline-none px-3 py-1 font-light"
                  />
                </div>
              </div>

              <div
                className="mt-4 bg-pink-400 hover:bg-pink-500 cursor-pointer px-4 py-1 rounded-md text-white"
                onClick={handleResetSubmit}
              >
                Reset
              </div>
            </div>
          ) : (
            <>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-200 rounded-md w-full  focus:outline-none px-3 py-1 font-light"
                    />
                  </div>
                </div>

                <div className="mt-5 pl-[76px] flex gap-5">
                  <button
                    className="bg-[#ff0fe6] hover:bg-pink-500 px-3 rounded-md text-white py-px"
                    onClick={handleEmailSubmit}
                  >
                    Retrieve
                  </button>
                  <Link to={"/login"}>
                    <p className="text-[#ff0fe6] hover:underline cursor-pointer">
                      Login
                    </p>
                  </Link>
                  <Link to={"/register"}>
                    <p className="text-[#ff0fe6] hover:underline cursor-pointer">
                      Register
                    </p>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forget;
