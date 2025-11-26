import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start">
          <div className="flex gap-20">
            <div>
              <h3 className="text-primary font-bold text-[20px] mb-4 font-primary">
                Our Company
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary">
                <li>About us</li>
                <li>Join Meeting</li>
                <li>Our Services</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Let’s Talk</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-primary font-bold text-[20px] mb-4 font-primary">
                Lorem Ipsum
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

            <div>
              <h3 className="text-primary font-bold text-[20px] mb-4 font-primary">
                Lorem Ipsum
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>

     
          <div className="flex flex-col items-center">
            <h1 className="text-primary font-krona font-bold text-[40px] mb-6">Noda</h1>

            <div className="flex gap-4">
              <img src="/ig.png" className="w-10 h-10 p-2 rounded-full bg-[#F1F5F9]" />
              <img src="/fb.png" className="w-10 h-10 p-2 rounded-full bg-[#F1F5F9]" />
              <img src="/tw.png" className="w-10 h-10 p-2 rounded-full bg-[#F1F5F9]" />
              <img src="/link.png" className="w-10 h-10 p-2 rounded-full bg-[#F1F5F9]" />
              <img src="/yt.png" className="w-10 h-10 p-2 rounded-full bg-[#F1F5F9]" />
            </div>
          </div>
        </div>
        <div className="text-center mt-14 flex justify-center items-center gap-6 text-gray-500 text-[14px]">

          <span>Copyright © 2022</span>

          <span className="h-5 w-px bg-gray-300"></span>

          <span>Noda Private Limited</span>

          <span className="h-5 w-px bg-gray-300"></span>

          <span>All rights reserved</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
