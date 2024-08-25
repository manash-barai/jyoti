import Image from 'next/image';
import React from 'react'

const page = () => {


    
interface Thought {
    icon: string;
    title: string;
    service: string;
  }
  
  const social: Thought[] = [
   
    {
        icon: "/image/icon/ps.png",
        title: "Adobe Photoshop",
        service: "Designing Tool",
      },
    
    
      {
        icon: "/image/icon/adove.png",
        title: "Adobe Illustrator",
        service: "Designing Tool",
      },
      {
        icon: "/image/icon/canva.png",
        title: "Canva",
        service: "Designing Tool",
      },

    {
      icon: "/image/icon/figma.png",
      title: "Figma",
      service: "Designing Tool",
    },
   
  ];
  return (
    <div className="pt-24 pb-11 bg-transparent blurAnimation overflow-hidden ">
      <div className="">
        <h1 className="text-5xl mb-2 font-bold text-gray-200">Stack</h1>
        <p className="text-[20px] text-[#858585]">
        Tools and resources i use daily.
        </p>
      </div>

    <div className=' border border-zinc-700 p-9 rounded-2xl mt-20' >
    <h1 className='text-xl '>Design </h1>
   
      <div className="flex flex-wrap my-1  ">
          {social.map((thought: Thought, index: number) => (
            <button
              key={index}
              className={`flex gap-4 border border-transparent rounded-md py-3  items-center1 ${index%2===0 ? "w-[70%]":"w-[30%]"}` }           >
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
        </div>




        <div className=' border border-zinc-700 p-9 rounded-2xl mt-20' >
    <h1 className='text-xl '>Artificial Intelligence </h1>
   
      <div className="flex flex-wrap my-1  ">
         
            <button
            
              className={`flex gap-4 border border-transparent rounded-md py-3  items-center1 ` }           >
              <div className="w-[37px] h-[37px] rounded-lg">
                <Image
                  src={"/image/icon/chatgpt.png"}
                  alt={"chat"}
                  width={39}
                  height={39}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-slate-50 font-bold text-start text-sm my-0 p-0">
                Chat GPT
                </h1>
                <p className="text-zinc-500 font-semibold text-[14px] text-start m-0 p-0">
                Open AI
                </p>
              </div>
            </button>
         
        </div>
        </div>

      </div>
  )
}

export default page
