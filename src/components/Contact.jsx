import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import contact from "../assets/lottie/contact.json";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

const Contact = () => {
  const [sending, setSending] = useState(false);
  const form = useRef();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const notify = () => toast.success("Message Sent");

  const onSubmit = (data) => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
    }, 2000);
    console.log(data);
    emailjs
      .sendForm(
        "service_5305s2l",
        "template_kb8m429",
        form.current,
        "WmYCC-JTPaXYBZCLt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="relative w-full mt-[10rem] flex justify-center flex-col md:p-5 text-black">
      <ToastContainer
        theme={
          window.localStorage.getItem("theme") === "dark" ? "dark" : "light"
        }
      />
      <motion.div
        whileInView={{ y: 0, transition: { duration: 0.4 }, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        className="text-center"
      >
        <h1 className="text-[60px] text-primary font-bold">Contact Me</h1>
        <h1 className="text-[30px] text-center mt-[-2rem] text-gray-500">
          Let's Talk
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row lg:justify-evenly p-5 sm:15px md:p-20"
      >
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
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 flex flex-col gap-4 rounded-md p-10 "
        >
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
              {...register("name")}
            />
            {errors?.name && (
              <span className="text-red-400 text-[25px]">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-[30px] text-gray-500">
              Your Email
            </label>
            <input
              className="border border-gray-500 bg-light text-[25px] dark:text-white rounded-lg block w-full p-3 dark:bg-gray-700 focus:outline-none focus:ring-1  focus:ring-primary  "
              type="text"
              {...register("email")}
            />
            {errors?.email && (
              <span className="text-red-400 text-[25px]">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="mesage" className="block text-[30px] text-gray-500">
              Message
            </label>
            <textarea
              className="border border-gray-500 bg-light text-[25px] dark:text-white rounded-lg block w-full p-3 h-[140px] dark:bg-gray-700 focus:outline-none focus:ring-1  focus:ring-primary  "
              type="text"
              {...register("message")}
            />
            {errors?.message && (
              <span className="text-red-400 text-[25px]">
                {errors.message.message}
              </span>
            )}
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              disabled={sending}
              className="text-[25px] rounded-md py-2 px-10 shadow-lg text-white bg-primary"
            >
              {sending ? "Sending..." : "Send"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
