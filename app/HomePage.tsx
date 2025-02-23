'use client'

import Navbar from "./ClientNavbar";
// import { Metadata } from "next";
import trackCursor from "./MovingBackground";
import Link from "next/link";
import LinkButtons from "./LinkButtons";


export default function HomePage() {
  return (
    <>
      <div className="min-h-screen text-white w-full bg-[#1b1b1b]" id="container"
        onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>

        <div id="cursor"
          className="fixed w-[60vw] h-[60vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none hidden md:block">
        </div>

        <div id="cursor"
          className="md:hidden fixed right-[10vw] w-[100vw] h-[100vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden pointer-events-none">
        </div>

        <Navbar activeElement="home"></Navbar>
        <div className="text-4xl md:text-5xl lg:text-6xl text-gray-200 font-bold font-mono mx-4 mt-36">
          <div>Backend Developer</div>
          <div>and Tech Enthusiast</div>
        </div>

        <div className="md:text-2xl text-lg text-bold text-gray-300 font-mono mx-6 my-8">
          I&apos;m Vansh Anand, a Full Stack Developer and coding enthusiast passionate about building scalable applications and crafting efficient solutions. Skilled across front-end and back-end technologies, driven by curiosity and innovation.
        </div>

        <button className="px-4 py-1 border border-blue-500 shadow-lg mx-[4vw] hover:bg-gray-900  rounded-lg text-lg">
          <Link href={"/about-me"}>
            About Me
          </Link>
        </button>

        <footer className="flex justify-between p-4 items-center mt-24">
          <div className="text-gray-400 md:px-12 md:text-md text-sm">
            Created By Vansh Anand
          </div>

          <div>
            <LinkButtons isHomePage={true} height={12} width={12} />
          </div>

        </footer>
      </div >
    </>
  );
}