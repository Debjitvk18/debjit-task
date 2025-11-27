import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-14 sm:pt-16 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        <div
          className="
            flex
            flex-col lg:flex-row
            justify-between
            items-start
            gap-12
          "
        >
         
          <div className="flex flex-col sm:flex-row   gap-12 sm:gap-20">

        
            <div>
              <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 font-primary">
                Our Company
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary text-sm sm:text-base">
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
              <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 font-primary">
                Lorem Ipsum
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary text-sm sm:text-base">
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
              <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 font-primary">
                Lorem Ipsum
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary text-sm sm:text-base">
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

         
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
            <h1 className="text-primary font-krona font-bold text-3xl sm:text-4xl mb-6">
              Noda
            </h1>

            <div className="flex gap-4">
              <Image src="/ig.png" alt="Instagram" width={40} height={40} className="p-2 rounded-full bg-gray-100" />
              <Image src="/fb.png" alt="Facebook" width={40} height={40} className="p-2 rounded-full bg-gray-100" />
              <Image src="/tw.png" alt="Twitter" width={40} height={40} className="p-2 rounded-full bg-gray-100" />
              <Image src="/link.png" alt="LinkedIn" width={40} height={40} className="p-2 rounded-full bg-gray-100" />
              <Image src="/yt.png" alt="YouTube" width={40} height={40} className="p-2 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>

       
        <div className="text-center mt-12 sm:mt-14 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-500 text-sm font-primary">
          <span>Copyright © 2022</span>

          <span className="h-4 sm:h-5 w-px bg-gray-300"></span>

          <span>Noda Private Limited</span>

          <span className="h-4 sm:h-5 w-px bg-gray-300"></span>

          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
