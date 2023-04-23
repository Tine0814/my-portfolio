import { MdDesignServices, FaMobile, BsDatabaseGear } from "../assets/index";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const offers = [
  {
    icon: <MdDesignServices size="54px" className="text-primary " />,
    title: "Front-end",
    description: "I can create Front-end for website using React.js",
  },
  {
    icon: <FaMobile size="54px" className="text-primary " />,
    title: "Responsive Design",
    description: "Capable to develop a website for all types of device",
  },
  {
    icon: <BsDatabaseGear size="54px" className="text-primary " />,
    title: "Back-end",
    description:
      "Develop backend components of web application and create server-side logic and database (PHP, MySQL)",
  },
];
