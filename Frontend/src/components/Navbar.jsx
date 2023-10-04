import React from 'react'

const Navbar = () => {
  return (
    <>

          <nav className="fixed z-50 bg-gradient-to-r from-black via-gray-700 to-black m-3 mx-auto rounded-full w-full">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                  <a href="https://flowbite.com/" className="flex items-center">
                      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Company Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CompanyName</span>
                  </a>
                  <div className="flex md:order-2">
                      <button type="button" className="bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center bg-gradient-to-tr from-[#2b369a] via-[#007ecd] to-[#00b8e1] dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white hover:scale-105 ease-in-out duration-100">Get started</button>
                      <button data-collapse-toggle="navbar-cta" type="button" className=" items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                      </button>
                  </div>
                  <div className="items-center justify-between flex w-auto md:order-1" id="navbar-cta">
                      <ul className="flex font-medium rounded-lg flex-row space-x-8">
                          <li>
                              <a href="#" className=" bg-blue-700 rounded bg-transparent text-[#3bceff]" aria-current="page">HOME</a>
                          </li>
                          <li>
                              <a href="#" className=" rounded dark:hover:text-[#3bceff] text-white">ABOUT</a>
                          </li>
                          <li>
                              <a href="#" className="rounded dark:hover:text-[#3bceff] text-white">BLOGS</a>
                          </li>
                          <li>
                              <a href="#" className="rounded dark:hover:text-[#3bceff] text-white">CONTACT</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>

    </>
  )
}

export default Navbar