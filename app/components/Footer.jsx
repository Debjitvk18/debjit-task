import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-14 sm:pt-16 pb-10 border-t  border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">


        <div
          className="
            flex
            flex-col lg:flex-row
            justify-between
            items-start
            gap-12
          "
        >
         
          <div className="flex flex-col sm:flex-row max-lg:ml-35 gap-12 sm:gap-20 ">

        
            <div>
              <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 font-primary">
                Our Company
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary text-sm sm:text-base flex flex-col">
                <a href="#">About us</a>
                <a href="#">Join Meeting</a>
                <a href="#">Our Services</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
                <a href="#">Let’s Talk</a>
                <a href="#">Blog</a>
              </ul>
            </div>

       
            <div>
              <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 font-primary">
                Lorem Ipsum
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary text-sm sm:text-base flex flex-col">
                <a href="#">About us</a>
                <a href="#">Join Meeting</a>
                <a href="#">Our Services</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
                <a href="#">Let’s Talk</a>
                <a href="#">Blog</a>
              </ul>
            </div>

           
            <div>
              <h3 className="text-primary font-bold text-lg sm:text-xl mb-4 font-primary">
                Lorem Ipsum
              </h3>
              <ul className="space-y-2 text-gray-600 font-primary text-sm sm:text-base flex flex-col">
                <a href="/">About us</a>
                <a href="/">Join Meeting</a>
                <a href="/">Our Services</a>
                <a href="/">Careers</a>
                <a href="/">Contact Us</a>
                <a href="/">Let’s Talk</a>
                <a href="/">Blog</a>  
              </ul>
            </div>
          </div>

         
          <div className="flex flex-col items-center  w-full lg:w-auto">
            <a href="/" className="text-primary font-krona font-bold text-3xl sm:text-4xl mb-6 ">
              Noda
            </a>

            <div className="flex gap-4">
              <Image src="/sociall.png" alt="Instagram" width={400} height={400} className="p-2 cursor-pointer " />
             
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
