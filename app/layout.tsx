"use client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuWidth, setMenuWidth] = useState<boolean>(true);
  
  const widthsubstract = (v: boolean) => {
    setMenuWidth(v);
  };
  
  const [windowsWidth, setWindowsWidth] = useState<number>(1440);
  let mrtyle = {
    marginLeft: menuWidth ? "255px" : "60px",
    padding: menuWidth ? "0 200px" : "0 280px",
    backgroundImage:
      "linear-gradient( to right, transparent, transparent 20%, rgba(45,45,45,0.3) 100%)",
    transition: "margin-left 0.3s ease",
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowsWidth]);

  const [menubar,setMenubar]=useState<boolean>(true)

  useEffect(() => {
    if (windowsWidth < 950) {
      document.getElementById("mainRoot")?.removeAttribute("style")
      setMenubar(false)
    }
  }, [windowsWidth]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar menubar={menubar} widthsubstract={widthsubstract} />
          <div style={mrtyle} id="mainRoot" className="bg-zinc-950 text-white">
            {children}
          </div>
          <div
            // style={{
            //   marginLeft: menuWidth ? "255px" : "60px",
            //   transition: "margin-left 0.3s ease", // Smooth transition
            // }}
          >
            <Footer menuWidth={menuWidth} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
