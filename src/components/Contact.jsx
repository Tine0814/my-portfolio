import React from "react";
import Lottie from "lottie-react";
import contact from "../assets/lottie/contact.json";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <section className="relative w-full mt-[10rem] flex justify-center flex-col md:p-5 text-black">
      <div className="text-center">
        <h1 className="text-[60px] text-primary font-bold">Contact Me</h1>
        <h1 className="text-[30px] text-center mt-[-2rem] text-gray-500">
          Let's Talk
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-evenly p-5 sm:15px md:p-20">
        <div className="relative w-full lg:w-[500px] bg-primary p-10 rounded-md flex flex-col gap-20 overflow-hidden shadow-lg">
          <div className="">
            <h1 className="text-[30px] md:text-[40px] text-center text-white">
              Contact Information
            </h1>
          </div>
          <div className=" absolute bg-light dark:bg-dark -top-[7rem] -left-[6rem] w-[170px] h-[170px] md:w-[200px] md:h-[200px] rounded-full"></div>
          <div className=" absolute bg-light dark:bg-dark top-[50%] -right-[7rem] w-[170px] h-[170px] md:w-[200px] md:h-[200px] rounded-full"></div>
          <div className="absolute w-[300px] -bottom-[5rem] md:w-[400px] md:-bottom-[7rem] right-[4rem]">
            <Lottie animationData={contact} />
          </div>
          <div className="text-[20px] md:text-[25px] h-[350px] flex flex-col gap-10 text-white">
            <h1>
              <LocalPhoneIcon /> +63 949 591 5629
            </h1>
            <h1>
              <EmailIcon /> djhaybernardo@gmail.com
            </h1>
            <h1>
              <LocationOnIcon /> Pulilan, Bulacan
            </h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 rounded-md p-10 ">
          <div>
            <label
              htmlFor="name"
              className="block text-[30px] text-gray-500 mb-2"
            >
              Your Name
            </label>
            <input
              className="border border-gray-500 bg-light text-[25px] dark:text-white rounded-lg block w-full p-3 dark:bg-gray-700 focus:outline-none focus:ring-1  focus:ring-primary  "
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[30px] text-gray-500">
              Your Email
            </label>
            <input
              className="border border-gray-500 bg-light text-[25px] dark:text-white rounded-lg block w-full p-3 dark:bg-gray-700 focus:outline-none focus:ring-1  focus:ring-primary  "
              type="text"
            />
          </div>
          <div>
            <label htmlFor="mesage" className="block text-[30px] text-gray-500">
              Message
            </label>
            <textarea
              className="border border-gray-500 bg-light text-[25px] dark:text-white rounded-lg block w-full p-3 h-[140px] dark:bg-gray-700 focus:outline-none focus:ring-1  focus:ring-primary  "
              type="text"
            />
          </div>
          <div>
            <button className="text-[25px] rounded-md py-2 px-10 shadow-lg text-white bg-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
