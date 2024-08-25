import Image from "next/image";
import React from "react";

interface Thought {
  icon: string;
  title: string;
  service: string;
}

const social: Thought[] = [
  {
    icon: "/image/icon/adove.png",
    title: "Adobe Illustrator",
    service: "Designing Tool",
  },
  {
    icon: "/image/icon/ps.png",
    title: "Adobe Photoshop",
    service: "Designing Tool",
  },
  {
    icon: "/image/icon/figma.png",
    title: "Figma",
    service: "Designing Tool",
  },
  {
    icon: "/image/icon/chatgpt.png",
    title: "Chat GPT",
    service: "Artificial Intelligence",
  },
];

const page = () => {
  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden ">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">Gallary</h1>
        <p className="text-[20px] text-[#858585]">
          Explore my collectiopxn of demo projects and posters, where creativity
          meets design. Each piece reflects my journey and growth as a designer,
          showcasing diverse styles and concepts.
        </p>
      </div>


      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">New Drops</p>
        <div className="flex gap-5">
          <div
            style={{ cursor: "pointer" }}
            className="w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden  homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/1.png"
                width={200}
                height={200}
                quality={100}
                alt="Hero"
                              className="transition-transform duration-300 transform group-hover:scale-110"

              />
            </div>
            <div className="p-5 flex justify-between  items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Art Gallary Site</h1>
                <p className="text-zinc-600 text-md text-[13px] leading-snug	  ">
                This art platform landing page highlights a curated collection of global artworks. The design offers both dark and light themes, emphasizing visual appeal while guiding users to explore and discover new art.
                </p>
              </div>

             
            </div>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className="w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden  homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/2.png"
                width={270}
                
                height={270}
                quality={100}
                
                alt="Hero"
                              className="transition-transform duration-300 transform group-hover:scale-110"

              />
            </div>
            <div className="p-5 flex justify-between  items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Dashboard Design</h1>
                <p className="text-zinc-600  text-md text-[13px] leading-snug	">
                This dashboard delivers key e-commerce analytics through vibrant charts, offering insights at a glance with both dark and light themes for user flexibility.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </section>











      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">More Drops</p>
        <div className="flex gap-5 flex-wrap">
          <div
            style={{ cursor: "pointer" }}
            className="w-[400px] group bg-zinc-900  overflow-hidden rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden  homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/artgalary.png"
                width={300}
                height={300}
                quality={100}
                alt="Hero"
                              className="transition-transform duration-300 transform group-hover:scale-110"

              />
            </div>
            <div className="p-5 flex justify-between  items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Art Gallary Site</h1>
                <p className="text-zinc-600 text-md text-[13px] leading-snug	  ">
                This art platform landing page highlights a curated collection of global artworks. The design offers both dark and light themes, emphasizing visual appeal while guiding users to explore and discover new art.
                </p>
              </div>

             
            </div>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className="w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden  homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/foodZone.png"
                width={240}
                
                height={240}
                quality={100}
                
                alt="Hero"
                              className="transition-transform duration-300 transform group-hover:scale-110"

              />
            </div>
            <div className="p-5 flex justify-between  items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Dashboard Design</h1>
                <p className="text-zinc-600  text-md text-[13px] leading-snug	">
                This dashboard delivers key e-commerce analytics through vibrant charts, offering insights at a glance with both dark and light themes for user flexibility.
                </p>
              </div>

             
            </div>
          </div>



          <div
            style={{ cursor: "pointer" }}
            className="w-[400px] group overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[210px] overflow-hidden  homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/artgallary.svg"
                width={500}
                
                height={500}
                quality={100}
                
                alt="Hero"
                              className="transition-transform duration-300 transform group-hover:scale-110"

              />
            </div>
            <div className="p-5 flex justify-between  items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Dashboard Design</h1>
                <p className="text-zinc-600  text-md text-[13px] leading-snug	">
                This dashboard delivers key e-commerce analytics through vibrant charts, offering insights at a glance with both dark and light themes for user flexibility.
                </p>
              </div>

             
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default page;
