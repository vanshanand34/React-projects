'use client'

import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import LinkButtons from "../LinkButtons";
import trackCursor from "../MovingBackground";
export default function Home() {

  return (
    <>
      <div className="h-screen w-full " id="container" 
        onMouseMove={(event: React.MouseEvent) => trackCursor(event)}>
        {/* Navbar */}
        <div id="cursor"
          className="-z-10 fixed w-[55vw] h-[55vw] bg-[#0099ff0f] rounded-full blur-3xl overflow-hidden"></div>
        <Navbar activeElement="about-me"></Navbar>

        {/* <div className="text-center w-full md:text-5xl text-5xl font-semibold mt-[6vh] text-blue-400 underline">About Me</div> */}

        <div className="lg:block fixed top-[28vh] left-[3vw] hidden">
          <div className="flex justify-between items-center py-4">
            <div className="lg:p-4 p-2 text-lg">
              <div className="py-4 cursor-pointer hover:ml-2">
                <Link href="#intro" >
                  - Introduction
                </Link>
              </div>
              <div className="py-4 cursor-pointer hover:ml-2">
                <Link href="#experience">
                  - Work Experience
                </Link>
              </div>
              <div className="py-4 cursor-pointer hover:ml-2">
                <Link href="#education">
                  - Education
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 md:mr-32">
          <div className="lg:mx-4 mx-6 mt-6 p-4 lg:ml-[24vw]" id="intro">
            <div className="mx-4 py-4">

              <div className="md:text-7xl text-5xl font-bold py-4">
                Vansh Anand
              </div>

              <div className="text-blue-300 md:text-3xl text-2xl py-2">
                Full Stack Developer
              </div>

              <LinkButtons />

              <div className="md:font-semibold md:text-lg text-lg p-2">
                Vansh Anand is a full stack engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
              </div>

            </div>
          </div>

          <div className="my-12 lg:mx-4 mx-6 p-4 lg:ml-[24vw]" id="experience">
            <div className="font-bold md:text-6xl text-4xl my-6 mx-4">
              Work Experience
            </div>
            <div className="mx-5">
              <div className="flex items-center justify-between">
                <div className="py-4 font-bold lg:text-3xl text-2xl text-gray-300">
                  Ayuvya Ayurveda
                </div>

                <div className="font-semibold text-md text-gray-400">
                  JULY 2024- JAN 2025
                </div>
              </div>

              <div className="text-lg font-semibold text-blue-400 px-1">
                Backend Developer Intern
              </div>

              <ul className="marker:text-blue-300 list-disc list-inside py-4 md:text-lg text-md px-2 font-semibold">
                <li className="py-2">
                  Developed and optimized Django backend and dashboard performance with efficient ORM queries.
                </li>
                <li className="py-2">
                  Built and integrated RESTful APIs using Django Rest Framework (DRF) for seamless data exchange.
                </li>
                <li className="py-2">
                  Implemented chat and audio call functionality using Agora services in Django.
                </li>
                <li className="py-2">
                  Integrated seller APIs to enhance system capabilities.
                </li>
              </ul>

            </div>
          </div>

          <div className="my-12 lg:mx-4 mx-6 p-4 lg:ml-[24vw]" id="experience">
            <div className="font-bold md:text-6xl text-4xl my-6 mx-4">
              Education
            </div>
            <div className="mx-5">
              <div className="flex items-center justify-between">
                <div className="py-4 font-bold lg:text-3xl text-2xl text-gray-300">
                  GTBIT (IPU)
                </div>

                <div className="font-semibold text-md text-gray-400">
                  NOV 2022- AUG 2026
                </div>
              </div>

              <div className="text-lg font-semibold text-blue-400 px-1">
                B-TECH (IT)
              </div>

              <ul className="marker:text-blue-300 list-disc list-inside py-4 md:text-lg text-md px-2 font-semibold">
                <li className="py-2">
                  Developed and optimized Django backend and dashboard performance with efficient ORM queries.
                </li>
                <li className="py-2">
                  Built and integrated RESTful APIs using Django Rest Framework (DRF) for seamless data exchange.
                </li>
                <li className="py-2">
                  Implemented chat and audio call functionality using Agora services in Django.
                </li>
                <li className="py-2">
                  Integrated seller APIs to enhance system capabilities.
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div >
    </>
  );
}