import React from "react";
import { FaFacebookSquare, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiMessageFill } from "react-icons/ri"

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
          <div className="flex w-full h-full justify-center">
            <div className="mt-[150px] w-full ">
              <span className="mb-[100px] w-[80%] before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-600 relative inline-block">
              <div className="relative space-y-10 justify-between bg-blue-200 p-16">
                <div>
                  <h1 className=" font-extrabold font-sans text-4xl text-gray-800">Get in touch !</h1>
                  <p className="pt-2 text-lg text-gray-600 w-[80%] mx-auto">
                    We want to hear from you. Let us know if you have any doubts or something interesting to say and share it with us. Here is how you can reach us : 
                  </p>
                </div>
                <div className="flex text-black text-xl font-sans justify-between p-2 w-[80%] mx-auto">
                  <div className="font">
                    <FaPhone className="text-blue-600 text-7xl mx-auto " /> <span className="text-xl">+91 1234567890</span>
                  </div>
                  <div className="">
                    <RiMessageFill className="text-blue-600 text-7xl mx-auto"/><span className="text-xl">companyname123@gmail.com</span>
                  </div>
                  <div className="">
                    <FaLocationDot className="text-blue-600 text-7xl mx-auto" /><span className="text-xl"> Gurugram, Haryana</span>
                  </div>
                </div>
                <div className=" flex space-x-6 text-3xl pt-10">
                  <div className="text-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <FaSquareXTwitter />
                  </div>
                    <div className="text-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <FaFacebookSquare />
                  </div>
                    <div className="text-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <PiInstagramLogoFill />
                  </div>
                    <div className="text-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <FaLinkedin/>
                  </div>
                </div>
              </div>
              </span>
              <form action="" className=" border-2 mx-auto w-[80%] p-16 space-y-4">
                    <div class="grid gap-y-4 md:gap-x-4 lg:grid-cols-2 w-[70%] mx-auto">
                      <div class="grid w-full items-center gap-1.5">
                        <label
                          class="text-start text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="first_name"
                        >
                          First Name
                        </label>
                        <input
                          class="flex h-10 w-full px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 border-2 dark:text-black text-semibold dark:focus:ring-black dark:focus:ring-offset-gray-900 text-start"
                          type="text"
                          id="first_name"
                          placeholder="Enter your First Name"
                        />
                      </div>
                      <div class="grid w-full items-center gap-1.5">
                        <label
                          class="text-base font-medium leading-none text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="last_name"
                        >
                          Last Name
                        </label>
                        <input
                      class="flex h-10 w-full px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 border-2  dark:text-black dark:focus:ring-black dark:focus:ring-offset-gray-900 text-start"
                          type="text"
                          id="last_name"
                          placeholder="Enter your Last Name"
                        />
                      </div>
                    </div>
                <div className="w-[70%] mx-auto space-y-5">
                    <div class="grid w-full items-center gap-1.5">
                      <label
                        class="text-base font-medium leading-none text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                    class="flex h-10 w-full px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 border-2 dark:text-black dark:focus:ring-black dark:focus:ring-offset-gray-900 text-start"
                        type="text"
                        id="email"
                        placeholder="Enter your active Email ID"
                      />
                    </div>
                    <div class="grid w-full .items-center {
    align-items: center;
} gap-1.5">
                      <label
                        class="text-base font-medium leading-none text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="phone_number"
                      >
                        Phone number
                      </label>
                      <input
                    class="flex h-10 w-full px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 border-2  dark:text-black dark:focus:ring-black dark:focus:ring-offset-gray-900 text-start"
                        type="tel"
                        id="phone_number"
                        placeholder="Enter your Phone number"
                      />
                    </div>
                    <div class="grid w-full items-center gap-1.5">
                      <label
                        class="text-base font-medium leading-none text-start peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                    class="flex h-10 w-full px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 border-2  dark:text-black dark:focus:ring-black dark:focus:ring-offset-gray-900 text-start"
                        id="message"
                        placeholder="Leave us a message "
                        cols="3"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      class="w-full text-white rounded-md bg-black px-3 py-2 text-sm font-semibold hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                </div>
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