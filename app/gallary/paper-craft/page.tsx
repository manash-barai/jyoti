import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden ">
      <div className="">
        <h1 className="text-5xl mb-7 font-bold text-gray-200">
        Paper Crafting Site
        </h1>
        <p className="text-[20px] text-[#858585]">
        Experience the joy of creating and appreciating handcrafted decorative objects, where every piece tells a unique story crafted with care and creativity.
        </p>
      </div>

      <div className="flex gap-5 flex-wrap mb-14 mt-11">
        <div
          style={{ cursor: "pointer" }}
          className="w-[400px] group overflow-hidden bg-zinc-900 rounded-lg my_border cardAnimation"
        >
          <div className="h-[250px] overflow-hidden  homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/paper1.png"
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
          <div className="h-[250px] overflow-hidden  homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/paper2.png"
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
          <div className="h-[250px] overflow-hidden  homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/paper3.png"
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
          <div className="h-[250px] overflow-hidden  homepageCardGradient flex justify-center items-center">
            <Image
              src="/image/project/paper4.png"
              width={300}
              height={300}
              quality={100}
              alt="Hero"
              className="transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          
        </div>
      </div>



            <div className="paperCraftGradient rounded-[12px] my_border flex justify-center items-center p-5">
                <div className="w-[400px]">

                <Image src='/image/project/video.png' alt="" width={400} height={200} />
                </div>

            </div>

      




     



    </div>
  );
};

export default page;
