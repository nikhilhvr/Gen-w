import React from 'react';
import '../styles/waves.css';

const Home = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./waves.css" />
        </head>
        <body>
          <div className="header">

            <div id="default-carousel" class="w-full" data-carousel="slide">
              <div className="overflow-hidden rounded-lg h-80">
                <div className="duration-700 ease-in-out" data-carousel-item>
                  <img src="https://res.allmacwallpaper.com/get/Retina-MacBook-Air-13-inch-wallpapers/Kids-Playing-With-Water-2560x1600/12925-11.jpg" className="md:absolute block w-full md:opacity-25 md:mt-0 mt-16 sm:rounded-md" alt="background-image"/>
                </div>
            </div>
            </div>

            <img className="absolute w-36 md:mx-[650px] md:mt-[525px] mt-[540px] mx-[100px] animate-wiggle translate-x-20 translate-y-2 z-50" src='https://cliparting.com/wp-content/uploads/2016/11/Cartoon-ship-clipart-kid.png' alt='ship' />
            <div className="inner-header relative pt-20">
              <h1 className="text-4xl font-bold">Taking Steps Towards Water Sustainability</h1>
              <h3 className="py-4">Dive into Your Daily Water Consumption </h3>
              <a href="/Questions"> 
                <button className="bg-gradient-to-tr from-black via-gray-800 to-gray-600 md:hover:bg-gradient-to-bl md:hover:scale-105 duration-200 ease-in-out text-white font-bold py-2 px-10 rounded-md">
                Calculate Your Footprints
                </button>
              </a>
            </div>

            <div>
              <svg
                className="waves "
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax ">
                  <use xlinkHref="#gentle-wave" x="48" y="0" fill="#90E0EF" />
                  <use xlinkHref="#gentle-wave" x="48" y="3" fill="#48CAE4" />
                  <use xlinkHref="#gentle-wave" x="48" y="5" fill="#00B4D8" />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0096C7" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content flex h-[350px]">

            <div className="w-full p-4 text-center bg-[#0096C7]">
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
              <p className="mb-5 text-base text-white sm:text-lg">lorem ispum frdkgh ksdgy sbc asbugk dshjyaa sjdwyvd dhsvc shc shvw hwvdjvd shvsj svdsvc sb sbdhj</p>
              <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="#" class="w-full bg-gradient-to-tl from-black via-gray-800 to-gray-600 sm:w-auto md:hover:scale-105 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ease-in-out duration-200">
                  <svg className="mr-3 w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                  <div className="text-left md:w-24">
                    <div className="text-xs">Download on the</div>
                    <div className="font-sans text-sm font-semibold">Mac App Store</div>
                  </div>
                </a>
                <a href="#" className="w-full sm:w-auto bg-gradient-to-tr from-black via-gray-800 to-gray-600 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:focus:ring-gray-700 ease-in-out duration-200">
                  <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                    <div className="text-left md:w-24 ">
                      <div className="text-xs">Get in on</div>
                      <div className="font-sans text-sm font-semibold">Google Play</div>
                    </div>
                </a>
              </div>
            </div>

          </div>
          <div className="absolute md:w-[90%] md:mx-20 w-full" >
            <div className="bg-gradient-to-r from-black via-gray-600 to-black h-0.5 rounded-full ">
            </div>
          </div>
          <footer className="bg-[#0096C7]">
            <div className="md:w-full mx-auto p-12 md:flex md:items-center md:justify-between">
              <span className="text-sm text-white sm:text-center flex-row">© 2023 <a href="https://flowbite.com/" className="md:hover:underline">CompanyName</a>. All Rights Reserved.
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </footer>
          
        </body>
      </html>
    </>
  )
}

export default Home;