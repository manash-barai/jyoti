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

export default function page() {
  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden ">
      <section className="text-slate-50 flex flex-col gap-6">
        <div className="">
          <h1 className="text-5xl mb-2 font-bold">hey, i’m Jyoti.</h1>
          <h1 className="text-5xl font-bold">
            i design <span className="text-zinc-600 "> software.</span>{" "}
          </h1>
        </div>
        <div className="text-zinc-600 text-2xl font-bold">
          simplifying to tough problems to make accessible solutions with <br />
          <div className="flex  items-center">
            {" "}
            <p className="mr-3">previously @ </p>
            <div>

            </div>
            <Image
              src="/image/icon/companyIcon.svg"
              alt="companyLogo"
              width={30}
              height={30}
            />{" "}
            <Image
              src="/image/icon/companyLogo.svg"
              alt="companyLogo"
              width={100}
              height={50}
            />{" "}
          </div>
        </div>
      </section>

      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">New Drops</p>
        <div className="flex gap-5">
          <div
            style={{ cursor: "pointer" }}
            className="flex-1 overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden  homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/1.png"
                width={200}
                height={200}
                quality={100}
                alt="Hero"
                className="hover:scale-110 transition-all duration-200"
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
            className="flex-1 overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden  homepageCardGradient flex justify-center items-center">
              <Image
                src="/image/home/2.png"
                width={270}
                
                height={270}
                quality={100}
                
                alt="Hero"
                className="hover:scale-110 transition-all duration-200"
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

      <section className="pt-6 border border-zinc-700 rounded-lg mt-11 bg-zinc-900">
        <h2 className="font-bold px-5">Stack</h2>
        <p className="text-zinc-500 font-semibold text-sm px-5">
          Software and resources I use on a regular basis.{" "}
        </p>

        <div className="grid grid-cols-2 my-7 px-2 ">
          {social.map((thought: Thought, index: number) => (
            <button
              key={index}
              className="flex gap-4 hover:bg-zinc-800 hover:border-zinc-700 border border-transparent rounded-md py-3 w-[95%] px-3 transition-all duration-300  ease-linear items-center"
            >
              <div className="w-[37px] h-[37px] rounded-lg">
                <Image
                  src={thought.icon}
                  alt={thought.service}
                  width={37}
                  height={37}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-slate-50 font-bold text-start text-sm my-0 p-0">
                  {thought.title}
                </h1>
                <p className="text-zinc-500 font-semibold text-[14px] text-start m-0 p-0">
                  {thought.service}
                </p>
              </div>
            </button>
          ))}
        </div>
        
      </section>
    </div>
  );
}
