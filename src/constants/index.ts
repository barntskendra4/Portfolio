import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience, 
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  threejs,
  persevere,
  jtc,
  freshOut,
  kawa,
  WeatherCap,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full-Stack Developer",
    companyName: "Persevere",
    icon: persevere,
    iconBg: "#FFFFFF",
    date: "June 2023 - June 2024",
    points: [
      "12 month long full time intensive bootcamp",
      "Learning both frontend and backend technologies",
      "Developing and maintaining web applications using React.js.",
      "MERN stack development.",
    ],
  },
  {
    title: "JTC",
    companyName: "Justice Through Code",
    icon: jtc,
    iconBg: "#E6DEDD",
    date: "April 2025 - August 2025",
    points: [
      "Used data visualization techniques using Matplotlib and statistical analysis",
      " Utilized SQL  for data persistence and complex analytical queries ",
      "Developed GUI applications using Tkinter",
      "Proficient in supervised machine learning models and forecasting models including ARIMA",
      "Developed system architecture for final project, including robust data collection pipeline with API integration",
    ],
  },
  {
    title: "Production Team Member",
    companyName: "Kawasaki Railcar Inc. (KRI)",
    icon: kawa,
    iconBg: "#E6DEDD",
    date: "January 2025 - Present",
    points: [
      "Hands-on experience in the manufacturing process of railcars, including assembly, quality control, and precision. This experience provided me with a deep understanding of the importance of attention to detail and the value of teamwork in a production environment.",
      
    ],
  },
];
const projects: TProject[] = [
  {
    name: "Fresh Out",
    description:
      "Web-based platform that allows users to order from the amazing menu",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: freshOut,
    sourceCodeLink: "https://github.com/barntskendra4/Fresh-Out",
  },
   {
    name: "Weather Capstone",
    description:
      "Weather application that allows users to search for current weather conditions and forecasts for any location worldwide. The application utilizes the OpenWeatherMap API to retrieve real-time weather data, including temperature, humidity, wind speed, and weather descriptions. Users can also view a 5-day forecast and access additional features such as saving favorite locations and receiving weather alerts.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openweathermap",
        color: "green-text-gradient",
      },
    ],
    image: WeatherCap,
    sourceCodeLink: "https://github.com/barntskendra4/WeatherCapstone",
  },
];

export { services, technologies, experiences, projects };
