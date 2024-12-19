import { useEffect, useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { LuMailSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isVerify, setIsVerify] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleRegister = async () => {
    try {
      if (!name === "" || !email === "" || !password === "") {
        toast.info("All fields are required");
        return;
      }

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      // console.log("register response:", res?.data);
      // console.log(res.status);

      if (res.status === 200) {
        setIsVerify(true);
      }
      toast.success(res?.data?.message);
    } catch (error) {
      console.log("error while registering: ", error);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleVerify = async () => {
    try {
      if (otp.includes("")) {
        toast.info("Verification codes required");
        return;
      }

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/verify",
        {
          email,
          verificationCode: otp.join(""),
        }
      );

      toast.success(res?.data?.message);

      if (res.status === 200) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log("error while verifying: ", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden flex min-[900px]:p-2 min-[1150px]:p-8 gap-2 min-[1150px]:gap-5"
      style={{
        background: "rgb(255,242,254)",
        background:
          "linear-gradient(90deg, rgba(255,242,254,1) 0%, rgba(209,84,173,1) 97%)",
      }}
    >
      <ToastContainer theme="light" />
      <div className="bg-red-200s bg-white rounded-md basis-[100%] min-[900px]:basis-[35%] flex-shrink-0 flex flex-col">
        <div className="bg-blue-200s basis-[26%] flex justify-center items-center">
          {/* <img src="./debounce-logo-2.png" alt="" className="w-64" /> */}
          <Link to="/">
            <img src="./debounce-logo-pink.png" alt="" className="w-64" />
          </Link>
        </div>
        <div className="bg-blue-200s pl-14">
          <div className="font-semibold text-2xl tracking-wide">
            Create your account
          </div>
        </div>
        {/* border */}
        <div className="border relative border-gray-200 flex mt-2">
          <div className="bg-transparent -bottom-1 pl-14 absolute">
            <div className="borders w-8 h-2 rounded-sm bg-blue-500s bg-[#ff0fe6]"></div>
          </div>
        </div>
        {/* content */}
        {isVerify ? (
          <div className="borders font-semibold px-3 text-lg tracking-wider flex flex-col items-center gap-2 my-5">
            <div>
              <p>Enter the verification code sent to your email</p>
            </div>
            <div className="space-x-1">
              {otp.map((_, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="number"
                  max={1}
                  maxLength={1}
                  value={otp[index]}
                  onInput={(e) => {
                    if (e.target.value == "e") {
                      e.target.value = "";
                      return;
                    }

                    if (e.target.value.length > 1) {
                      e.target.value = e.target.value.slice(-1);
                    }

                    setOtp([
                      ...otp.map((data, i) =>
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
            <div
              className="bg-pink-400 px-6 py-2 rounded-md mt-4 text-sm text-white cursor-pointer hover:bg-pink-500"
              onClick={handleVerify}
            >
              Verify
            </div>
          </div>
        ) : (
          <div className="bg-green-200s flex-1 pt-2">
            {/* name */}
            <div className="pl-9 pr-14 mt-5 flex items-end gap-3">
              <div className="mb-1">
                <GoPerson size={27} color="#ff0fe6" />
              </div>
              <div className="w-full">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border mt-1 border-gray-200 rounded-md w-full  focus:outline-none px-3 py-1 font-light"
                />
              </div>
            </div>

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  <span>Password </span>
                  {/* -
                <span className="text-[#ff0fe6]"> forget?</span> */}
                </div>
                <input
                  type="text"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border mt-1 border-gray-200 rounded-md w-full  focus:outline-none px-3 py-1 font-light"
                />
              </div>
            </div>

            <div className="mt-5 pl-[76px] flex gap-5">
              <button
                className="bg-[#ff0fe6] hover:bg-red-500 cursor-pointer px-3 rounded-md text-white py-px"
                onClick={handleRegister}
              >
                Sign up
              </button>
              <Link to={"/login"}>
                <p className="text-[#ff0fe6] hover:underline">Login</p>
              </Link>
              {/* <p className="text-[#ff0fe6]">Register</p> */}
            </div>
          </div>
        )}
      </div>

      {/* 2nd div */}
      <div className="bg-white hidden min-[900px]:block rounded-md flex-1 p-8">
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

export default Register;
