import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMessage, MdOutlineLocationOn } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi"
const Contact = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="stylesheet" href="output.css" />
        </head>
        <body className="font-sans">
          <img src="https://wallpapercave.com/wp/NUxKPlh.jpg" className="-z-20 h-full absolute w-full brightness-50" alt="background-image"/>
          <div className="flex w-full h-screen justify-center">
            <div className="mt-[70px] flex flex-row gap-12 w-full ">
              <div className="flex flex-col space-y-8 justify-between bg-white p-10 rounded-md h-[450px] w-[55%]">
                <div>
                  <h1 className=" font-extrabold font-sans text-4xl text-gray-800">Get in touch !</h1>
                  <p className="pt-2 text-lg text-gray-500">
                    We want to hear from you. Let us know if you have any doubts or something interesting to say and share it with us.
                  </p>
                </div>
                <div className="flex text-black text-xl font-sans gap-16">
                  <div className="">
                    <AiOutlinePhone className="text-blue-600 text-7xl mx-auto" /> <span className="text-xl">+91 1234567890</span>
                  </div>
                  <div className="">
                    <MdOutlineMessage className="text-blue-600 text-7xl mx-auto"/><span className="text-xl">companyname123@gmail.com</span>
                  </div>
                  <div className="">
                    <MdOutlineLocationOn className="text-blue-600 text-7xl mx-auto" /><span className="text-xl"> Gurugram, Haryana</span>
                  </div>
                </div>
                <div className=" flex space-x-5 text-2xl">
                  <div className="text-gray-500 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-500 rounded-full p-2">
                    <TfiTwitter />
                  </div>
                  <div className="text-gray-500 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-500 rounded-full p-2">
                    <BiLogoFacebook />
                  </div>
                  <div className="text-gray-500 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-500 rounded-full p-2">
                    <FaInstagram />
                  </div>
                  <div className="text-gray-500 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-500 rounded-full p-2">
                    <BiLogoLinkedin/>
                  </div>
                </div>
              </div>
              <div className="md:w-100 bg-gradient-to-bl from-[#2b369a] via-[#007ecd] to-[#00b8e1] rounded-xl p-8 text-white">
                <form action="" className="flex flex-col space-y-4">
                  <div>
                    <label for="" className="text-lg">Your Name :</label>
                    <input type="text" className="text-black ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600" />
                  </div>
                  <div>
                    <label for="" className="text-lg"> Email Address :</label>
                    <input type="text" className=" text-black ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600" />
                  </div>
                  <div>
                    <label for="" className="text-lg"> Message :</label>
                    <textarea
                      rows="4"
                      className=" text-black ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600"></textarea>
                  </div>
                  <button className="inline-block bg-gradient-to-tr from-black via-gray-800 to-gray-600 md:hover:bg-gradient-to-bl md:hover:scale-105 duration-200 ease-in-out text-white font-bold py-2 px-10 rounded-md uppercase text-sm">Send message</button>
                </form>
              </div>
            </div>
          </div>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </body>
      </html>
    </>
  );
};

export default Contact;
