import React from "react";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="px-36 py-10 flex justify-between">
        {/* 1 col */}
        <div className="borders">
          <div>
            <p className="font-semibold">COMPANY</p>
            <div className="text-[#9daac7] mt-3 space-y-1">
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Cookie Policy</p>
              <p>GDPE Compliancy</p>
              <p>Compare</p>
              <p>Affiliate Program</p>
            </div>
          </div>
          {/*  */}
          <div className="mt-12">
            <p className="font-semibold">INTEGRATIONS</p>
            <div className="text-[#9daac7] mt-3 space-y-1">
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </div>
        {/* 2 col */}
        <div className="borders">
          <div>
            <p className="font-semibold">PRODUCT</p>
            <div className="text-[#9daac7] mt-3 space-y-1">
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Cookie Policy</p>
              <p>GDPE Compliancy</p>
              <p>Compare</p>
              <p>Affiliate Program</p>
            </div>
          </div>
          {/*  */}
          <div className="mt-12">
            <p className="font-semibold">REVIEWS</p>
            <div className="text-[#9daac7] mt-3 space-y-1">
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </div>
        {/* 3 col */}
        <div className="borders">
          <div>
            <p className="font-semibold">RESOURCES</p>
            <div className="text-[#9daac7] mt-3 space-y-1">
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Cookie Policy</p>
              <p>GDPE Compliancy</p>
              <p>Compare</p>
              <p>Affiliate Program</p>
            </div>
          </div>
          {/*  */}
          <div className="mt-12">
            <p className="font-semibold">FREE TOOLS</p>
            <div className="text-[#9daac7] mt-3 space-y-1">
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </div>
        {/* 1 col */}
        <div className="borders">
          <div>
            <p className="font-semibold">SOCIAL</p>
            <div className="text-[#9daac7] mt-3 space-y-1">
              <p>X</p>
              <p>Linkedln</p>
              <p>Github</p>
              <p>Cookie Policy</p>
              <p>Update Logs</p>
              <p>Compare</p>
              <p className="flex items-center gap-1">
                <CiGlobe /> EN FR DE ES
              </p>
            </div>
          </div>
          {/*  */}
          <div className="mt-12">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="text-[#9daac7]">Server Status</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-36 border-t border-gray-600 py-4 flex justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://ik.imagekit.io/debounce/wp-content/uploads/2018/01/logo-white.png"
            alt=""
          />

          <p className="text-[#9daac7]">
            © Copyright 2018-2024 debounce.io - All Rights Reserved.
          </p>
        </div>

        <div>
          <img
            src="https://ik.imagekit.io/debounce/wp-content/uploads/2018/08/payments.png"
            alt=""
          />
          <p className="text-[#9daac7]">Email List Verification Made Simple.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
