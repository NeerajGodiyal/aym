import { joinPaths } from "@remix-run/router";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    b,
    rupam,
    ayam,
    bhanu,
    nlogo,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Developer",
      icon: web,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Personal Project",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Personal Project",
      icon: redux,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "Personal Project",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Personal Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Knowledge of multiple front-end languages and libraries",
        "Familiarity with common stacks",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Neeraj's supervision accelerated my improvement as a software developer. I did (and still do) aspire to attain his level of proficiency with software development.",
      name: "Rupansh",
      designation: "Engineer",
      company: "Supra Oracles",
      image: rupam,
    },
    {
      testimonial:
        "I recommend him to anyone looking for a new job within development field . He is an extremely competent and intelligent developer.",
      name: "Ayam Dobhal",
      designation: "Engineer",
      company: "CodeMarks",
      image: ayam,
    },
    {
      testimonial:
        "Always available to help, incredibly proficient, hits deadlines without fail, hard working and trustworthy. In my experience, no project is too much trouble with Neeraj . I can recommend his services without hesitation.",
      name: "Bhanu Pratap Singh",
      designation: "Engineer",
      company: "SRM",
      image: bhanu,
    },
  ];
  
  const projects = [
    {
      name: "Web3_Crypto_Exchange",
      description:
        "Web3-based platform that allows users to exchange their cryptocurrencies .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "blockchain",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: b,
      source_code_link: "https://github.com/NeerajGodiyal/Web3_crypto_exchange_app",
    },
    {
      name: "Web3 Crowdfunding",
      description:
        "Web application that provides a platform for users to create and manage crowdfunding campaigns.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "dapp",
          color: "pink-text-gradient",
        },
      ],
      image: b,
      source_code_link: "https://github.com/NeerajGodiyal/Web3_cf",
    },
    {
      name: "Web3.0 Blockchain App",
      description:
        "Web 3.0 application that allows users to send transactions through the blockchain",
      tags: [
        {
          name: "ethereum",
          color: "blue-text-gradient",
        },
        {
          name: "blockchain",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: b,
      source_code_link: "https://github.com/NeerajGodiyal/Web3.0",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };