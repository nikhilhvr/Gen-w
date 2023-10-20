import React from 'react';

const Home = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <div className="header">
            <div className="overflow-hidden rounded-lg h-16">
              <div className="duration-700 ease-in-out" data-carousel-item>
                <img src="https://i.pinimg.com/originals/34/7b/93/347b93bff5761d715b2a73316d4394ae.jpg" className="md:absolute block w-full brightness-50 md:mt-0 mt-16 sm:rounded-md" alt="background-image" />
              </div>
            </div>
          </div>

          <div className="inner-header relative pt-16 text-center">
            <div className="grid mx-auto w-[70%] gap-10">
              <div className="flex">
                <div className="w-1/2"></div>
              <div className="bg-white h-80 p-10 w-1/2 text-start">
                <h1 className="text-black font-semibold ">What is a Water Footprint ?</h1>
                  <p className="py-3">A water footprint is an indicator of water use that looks at both direct and indirect water use of a consumer or producer.

                  The water footprint of an individual, community or business is defined as the total volume of freshwater that is used to produce the goods and services consumed by the individual or community or produced by the business.

                  The increasing consumption of water and overuse of aquatic systems has already resulted in a dramatic deterioration of aquatic ecosystems worldwide. This disruption has lead to a shortage of freshwater availability in some regions of the world.
                  </p>
              </div>
              </div>

              <div className="bg-white h-80 p-8 w-1/2 text-start">
                <h1 className="text-black font-semibold">How to Analyze Your Water Footprint ?</h1>
                  <p className="py-3">
                  The analysis of a product or corporate water footprint is the first step towards identifying the processes and activities significantly influencing your company's water consumption and that of the supplier chain.

                  Based on this analysis, CompanyName will then develop a list of core indicators in close cooperation with you in order to systematically reduce risks and prevent cost increases.

                  We have acquired in-depth expertise over the years regarding calculations of water footprints and water management. Water footprints of companies, products and provision of services are part of our portfolio - considering the entire supplier chain and virtual water supply.
                  </p>
              </div>

              <div className="flex">
                <div className="w-1/2"></div>
              <div className=" bg-white h-80 p-10 w-1/2 text-start">
                  <h1 className="text-black font-semibold ">Benefits of Analyzing Your Water Footprint.</h1>
                  <p className="py-1">‣ Analyze the direct and indirect water consumption of your organization or products.</p>
                    <p className="py-1">‣ Identify water footprint risks and develop mitigation strategies.</p>
                    <p className="py-1">‣ Optimize the water footprint and reduce associated environmental impacts.</p>
                    <p className="py-1">‣ Reduce costs in your supply chain and increase resource efficiency.</p>
                    <p className="py-1">‣ Improve internal and external environmental communication with reliable information.</p>
              </div>
              </div>
            </div>
            <div className="mt-[200px]">
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-8 w-8 mx-[900px] -my-7 animate-bounce" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-10 w-10 mx-52 -my-9 animate-bounce" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-10 w-10 mx-[1000px] -my-9 animate-bounce2" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-9 w-9 mx-[1400px] -my-8 animate-bounce" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-5 w-5 mx-[700px] -my-4 animate-bounce1" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-11 w-11 mx-[600px] -my-10 animate-bounce2" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-7 w-7 mx-[1200px] -my-6 animate-bounce3" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-7 w-7 mx-[90px] -my-6 animate-bounce2" />
            <div className="bg-gradient-to-r from-black via-gray-700 to-black text-white h-24 p-8 text-2xl font-bold mb-[100px]">
              Use our interactive calculator to learn your water footprint and actions to take to reduce it.
            </div>
            </div>

            <div className=" mb-[100px]">
              <h1 className="text-4xl font-bold ">Taking Steps Towards Water Sustainability</h1>
              <h3 className="py-4  h-20">Use our interactive calculator to learn your carbon footprint and actions to take to reduce it.</h3>
              <a href="/Questions">
                <button className="bg-gradient-to-tr from-black via-gray-800 to-gray-600 md:hover:bg-gradient-to-bl md:hover:scale-105 duration-200 ease-in-out text-white font-bold py-2 px-10 rounded-md">
                  Calculate Your Footprints
                </button>
              </a>
            </div>
          </div>
        </body>
      </html>
    </>
  )
}

export default Home;