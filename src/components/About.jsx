import React from "react";
import { dastine } from "../assets";

const About = () => {
  return (
    <section id="about" className="w-full flex h-screen ">
      <div className="text-black w-full flex justify-center items-center flex-col p-20 md:flex-row md:gap-[7rem]">
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <img
            src={dastine}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Dastine Bernardo
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                Full-stack developer
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center"></div>
          </div>
        </div>
        <div className="text-black max-w-[700px] flex flex-col flex-start gap-7 p-10">
          <h1 className="text-[20px] font-bold">About Me</h1>
          <p>
            I am Dastine, Front-end web developer with experience in building
            responsive web design. Proficient with HTML, CSS, and JS libraries
            and framework, with extensive knowledge in UI and UX design.
          </p>
          <p>
            I always want to improve my skills and work hard to excel at my job.
            I learned about discipline and the proper mindset as a front-end
            developer. Giving up is not an option for me since I am motivated to
            accomplish my dreams and goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
