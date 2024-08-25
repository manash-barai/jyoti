import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
     <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden ">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">
        Food Zone Site
        </h1>
        <p className="text-[20px] text-[#858585] mt-7">
        Welcome to Food Zone, where culinary artistry meets convenience—explore and order exquisite dishes crafted to satisfy your cravings, from breakfast to dinner.
        </p>
      </div>

      <div className="flex gap-5 flex-wrap my-14">
        <div
          style={{ cursor: "pointer" }}
          className="w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden  homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/food zone 1.png"
              width={300}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          
        </div>

        <div
          style={{ cursor: "pointer" }}
          className="w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[300px] overflow-hidden  homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/food.png"
              width={300}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          
        </div>

        



        
      </div>
      </div>
      </div>
  )
}

export default page
