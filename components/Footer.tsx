import Link from "next/link";
import React from "react";
import Clock from "./Clock";
interface NavbarProps {
  menuWidth: boolean;
}

export default function Footer({ menuWidth }: NavbarProps) {
  return (
    <div
      className={`bg-zinc-900 ${
        menuWidth ? "lg:px-52 px-10" : "px-20 lg:px-72"
      }  border-zinc-600 border-t`}
    >
      <div className="lg:flex gap-44 grid grid-cols-2 py-11 w-full">
        <ul className="text-gray-200 flex text-[22px] justify-start gap-9 w-full  flex-wrap text  ">
         
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Explore</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Gallary
            </Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Project</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Stack</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>About</Link>{" "}
          </li>
        </ul>

        
      </div>

      <div className=" ">
        <ul className="flex justify-between border-b w-full gap-10 ">
        <div className="flex-1 py-11 ">
            <div className="flex items-center gap-2 text-gray-300 ">
              Currently 🧑🏼‍💻 working <div className="activeWorking"></div>{" "}
            </div>
            <Link
              href={"#"}
              className="text-zinc-700 hover:text-white transition-all duration-150"
            >
              Reach Out {"-->"}
            </Link>
          </div>

          <div className="flex-1 text-zinc-700 py-11 ">
            <Clock />
          </div>
        </ul>

        
      </div>
      
    </div>
  );
}
