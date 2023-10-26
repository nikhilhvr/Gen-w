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
                  <div className="text-gray-400 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-400 rounded-full p-2">
                    <TfiTwitter />
                  </div>
                  <div className="text-gray-400 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-400 rounded-full p-2">
                    <BiLogoFacebook />
                  </div>
                  <div className="text-gray-400 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-400 rounded-full p-2">
                    <FaInstagram />
                  </div>
                  <div className="text-gray-400 hover:text-black hover:border-black ease-in-out duration-200 cursor-pointer border-2 border-gray-400 rounded-full p-2">
                    <BiLogoLinkedin/>
                  </div>
                </div>
              </div>
              <form action="" class="rounded-xl bg-gradient-to-tr from-[#2b369a] via-[#007ecd] to-[#00b8e1] p-10 h-[450px] space-y-4">
                    <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div class="grid w-full  items-center gap-1.5">
                        <label
                          class="text-start text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="first_name"
                        >
                          First Name
                        </label>
                        <input
                          class="flex h-10 w-full rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-black dark:focus:ring-offset-gray-900 bg-white text-start"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="grid w-full  items-center gap-1.5">
                        <label
                          class="text-sm font-medium leading-none text-white text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          class="flex h-10 w-full rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-black dark:focus:ring-offset-gray-900 bg-white text-start"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-white text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-black dark:focus:ring-offset-gray-900 bg-white text-start"
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="grid w-full  .items-center {
    align-items: center;
} gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-white text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="phone_number"
                      >
                        Phone number
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-black dark:focus:ring-offset-gray-900 bg-white text-start"
                        type="tel"
                        id="phone_number"
                        placeholder="Phone number"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-white text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        class="flex h-10 w-full rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-black dark:focus:ring-offset-gray-900 bg-white text-start"
                        id="message"
                        placeholder="Leave us a message"
                        cols="3"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>

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