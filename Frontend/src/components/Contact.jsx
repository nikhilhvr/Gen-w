import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaPhone, } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BiSolidMessage } from "react-icons/bi";
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
        <body class="font-sans">
          <img src="https://wallpapercave.com/wp/NUxKPlh.jpg" class=" -z-50 max-h-screen md:absolute block w-full md:opacity-30 md:mt-0 mt-16 sm:rounded-md" alt="background-image"/>
          <div class="flex w-full min-h-screen justify-center">
            <div class="mt-[60px] flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 w-full p-8 ">
              <div class="flex flex-col space-y-8 justify-between">
                <div>
                  <h1 class="font-bold text-4xl tracking-wide">Contact Us</h1>
                  <p class="pt-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet laboriosam laborum numquam quibusdam
                  </p>
                </div>
                <div class="flex flex-col space-y-6 ">
                  <div class="inline-flex space-x-2 ">
                    <FaPhone /> +91 1234567890
                  </div>
                  <div class="inline-flex space-x-2">
                    <BiSolidMessage /> <span>companyname123@gmail.com</span>
                  </div>
                  <div class="inline-flex space-x-2">
                    <ImLocation /> <span>Gurgaon, Haryana</span>
                  </div>
                </div>
                <div class=" flex space-x-5 text-2xl">
                  <div class="text-blue-700 hover:scale-110 ease-in-out duration-200 cursor-pointer">
                    <FaTwitter />
                  </div>
                  <div class="text-blue-700 hover:scale-110 ease-in-out duration-200 cursor-pointer">
                    <FaFacebook />
                  </div>
                  <div class="text-blue-700 hover:scale-110 ease-in-out duration-200 cursor-pointer">
                    <FaInstagram />
                  </div>
                  <div class="text-blue-700 hover:scale-110 ease-in-out duration-200 cursor-pointer">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              <div class="md:w-100 bg-gradient-to-bl from-[#2b369a] via-[#007ecd] to-[#00b8e1] rounded-xl p-8 text-white">
                <form action="" class="flex flex-col space-y-4">
                  <div>
                    <label for="" class="text-sm">Your Name :</label>
                    <input type="text" class="text-black ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600" />
                  </div>
                  <div>
                    <label for="" class="text-sm"> Email Address :</label>
                    <input type="text" class=" text-black ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600" />
                  </div>
                  <div>
                    <label for="" class="text-sm"> Message :</label>
                    <textarea
                      rows="4"
                      class=" text-black ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-600"></textarea>
                  </div>
                  <button class="inline-block bg-gradient-to-tr from-black via-gray-800 to-gray-600 md:hover:bg-gradient-to-bl md:hover:scale-105 duration-200 ease-in-out text-white font-bold py-2 px-10 rounded-md uppercase text-sm">Send message</button>
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
