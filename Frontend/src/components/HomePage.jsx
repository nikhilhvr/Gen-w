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
            <div className="overflow-hidden h-16">
              <div className="" data-carousel-item>
                <img src="https://i.pinimg.com/originals/34/7b/93/347b93bff5761d715b2a73316d4394ae.jpg" className="md:absolute block w-full brightness-50 md:mt-0 mt-16 sm:rounded-md md:rounded-none" alt="background-image" />
              </div>
            </div>
          </div>

          <div className="inner-header relative pt-10 text-center">
            <div className="grid mx-auto w-[70%] space-y-12">
              <div className="flex justify-end">
              <div className="bg-white p-10 w-4/5 text-start opacity-50 hover:opacity-100 hover:scale-110 duration-200 ease-in-out">
                <h1 className="text-black font-semibold ">What is a Water Footprint ?</h1>
                  <p className="py-3">A water footprint is an indicator of water use that looks at both direct and indirect water use of a consumer or producer.

                  The water footprint of an individual, community or business is defined as the total volume of freshwater that is used to produce the goods and services consumed by the individual or community or produced by the business.

                  The increasing consumption of water and overuse of aquatic systems has already resulted in a dramatic deterioration of aquatic ecosystems worldwide. This disruption has lead to a shortage of freshwater availability in some regions of the world.
                  </p>
              </div>
              </div>

              <div className="bg-white p-10 w-4/5 text-start opacity-50 hover:opacity-100 hover:scale-110 duration-200 ease-in-out">
                <h1 className="text-black font-semibold">How to Analyze Your Water Footprint ?</h1>
                  <p className="py-3">
                  The analysis of a product or corporate water footprint is the first step towards identifying the processes and activities significantly influencing your company's water consumption and that of the supplier chain.

                  Based on this analysis, CompanyName will then develop a list of core indicators in close cooperation with you in order to systematically reduce risks and prevent cost increases.

                  We have acquired in-depth expertise over the years regarding calculations of water footprints and water management. Water footprints of companies, products and provision of services are part of our portfolio - considering the entire supplier chain and virtual water supply.
                  </p>
              </div>

              <div className="flex justify-end">
                <div className=" bg-white p-10 w-4/5 text-start opacity-50 hover:opacity-100 hover:scale-110 duration-200 ease-in-out">
                  <h1 className="text-black font-semibold mb-2">Benefits of Analyzing Your Water Footprint.</h1>
                  <p className="py-1">‣ Analyze the direct and indirect water consumption of your organization or products.</p>
                    <p className="py-1">‣ Identify water footprint risks and develop mitigation strategies.</p>
                    <p className="py-1">‣ Optimize the water footprint and reduce associated environmental impacts.</p>
                    <p className="py-1">‣ Reduce costs in your supply chain and increase resource efficiency.</p>
                    <p className="py-1">‣ Improve internal and external environmental communication with reliable information.</p>
              </div>
              </div>
            </div>

            <div className="border-2 w-[90%] mx-auto p-16 mt-[100px]">
              <div className="">
                {/* <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-8 w-8 mx-[900px] -my-7 animate-bounce" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-10 w-10 mx-52 -my-9 animate-bounce" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-10 w-10 mx-[1000px] -my-9 animate-bounce2" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-9 w-9 mx-[1400px] -my-8 animate-bounce" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-5 w-5 mx-[700px] -my-4 animate-bounce1" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-11 w-11 mx-[600px] -my-10 animate-bounce2" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-7 w-7 mx-[1200px] -my-6 animate-bounce3" />
            <img alt="bubble1" src="https://images.vexels.com/media/users/3/159565/isolated/preview/1ee66c711cb6cfea5c2d570031e4b7a1-sphere-bubble-circle-illustration-by-vexels.png" className="absolute h-7 w-7 mx-[90px] -my-6 animate-bounce2" /> */}
                <div className="text-4xl font-semibold w-[85%] mx-auto italic">
                  Use our interactive calculator to learn your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-600 relative inline-block"><span className="relative text-black bg-blue-200">water footprint</span></span> and actions to take to reduce it.
                </div>
              </div>

              <div className="flex w-[84%] mx-auto mt-20 gap-10">
                <h3 className="text-gray-500 text-start">It includes your tap water use and the "virtual water" used to produce your food, electricity, gas and home goods. Based on your location in India and your own consumption pattern, you will have a unique water footprints. Please feel free to use the footprint calculator to assess your own water footprints. Time to take the required steps towards water sustainability. </h3>
                <a href="/Questions">
                  <button className="bg-gradient-to-t from-black via-gray-700 to-gray-500 md:hover:bg-gradient-to-b text-white font-bold h-16 w-72 rounded-md text-xl">
                    Calculate Your Footprints
                  </button>
                </a>
              </div>
            </div>
            </div>
            
          <div className="border w-[90%] mx-auto mt-[100px] mb-[100px]">
            <div className="flex font-extrabold uppercase p-2 border ">
              <h1 className="mx-auto font-sans">Rainfall in India</h1>
              <h1 className="mx-auto font-sans">Ground Water in India</h1>
            </div>

            <div className="flex gap-32 divide-x divide-solid divide-gray-300 border">
              <img alt="india map 1" src="https://www.researchgate.net/profile/Sudhakar_Reddy_C/publication/285020645/figure/fig2/AS:301142941683714@1448809480437/Annual-mean-rainfall-map-of-India.png" className=" w-1/3" />
              <img alt="india map 1" src="https://i.pinimg.com/originals/04/b2/1c/04b21c5f9f838fb2aa85bdc3f1f59c56.png" className=" w-2/5" />
            </div>
          </div>
        </body>
      </html>
    </>
  )
}

export default Home;