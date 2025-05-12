import React from "react";

// import { SectionWrapper } from "../hoc";
import SectionWrapper from '../hoc/SectionWrapper'
// import { technologies } from "../constants";
// import {technologies} from '../constants/index.js'
import { styles } from "../styles";


const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: './tech/html.png',
    },
    {
      name: "CSS 3",
      icon: './tech/css.png',
    },
    {
      name: "JavaScript",
      icon: './tech/javascript.png',
    },
    {
      name: "TypeScript",
      icon: './tech/typescript.png',
    },
    {
      name: "React JS",
      icon: './tech/reactjs.png',
    },
    {
      name: "Redux Toolkit",
      icon: './tech/redux.png',
    },
    {
      name: "Tailwind CSS",
      icon: './tech/tailwind.png',
    },
    {
      name: "Node JS",
      icon: './tech/nodejs.png',
    },
    {
      name: "MongoDB",
      icon: './tech/mongodb.png',
    },
    {
      name: "Three JS",
      icon: './tech/threejs.svg',
    },
    {
      name: "git",
      icon: './tech/git.png',
    },
    {
      name: "SQL",
      icon: './tech/sql.png',
    },
    {
      name: "Next",
      icon: './tech/next.png',
    },
    {
      name: "UiPath",
      icon: './tech/uipath.png',
    },
    {
      name: "Python",
      icon: './tech/python.png',
    },
    {
      name: "React Native",
      icon: './tech/reactNative.png',
    },
    {
      name: "Firebase",
      icon: './tech/firebase.png',
    },
    {
      name: "C#",
      icon: './tech/cSharp.png',
    },
    {
      name: "RPA",
      icon: './tech/RPA.png',
    },
    {
      name: "Framer Motion",
      icon: './tech/FramerMotion.png',
    },
    {
      name: "RegEx",
      icon: './tech/RegEx.png',
    },
    {
      name: "PowerBi",
      icon: './tech/PowerBi.png',
    },
  ];
  
  return (
    <>
    <h1
        className={`${styles.heroHeadText} text-white text-center mb-4 text-xl sm:text-3xl font-semibold font-serif`}
      >
        Technologies
      </h1>
    <div className='flex flex-row flex-wrap justify-center gap-10 mb-10' id="technology">
      {technologies.map((technology) => (
        <React.Fragment key={technology.name}>
          <div className="flex flex-col items-center gap-2">
        <div className='w-20 h-20 rounded-full border border-violet-400 object-contain'>
          <img className="w-full h-full rounded-full bg-gray-100" src={technology.icon} alt={technology.name} />
        </div>
        {technology.name}
        </div>
        </React.Fragment>
        
      ))}
      
    </div>
    
    </>
  );
};

export default SectionWrapper(Tech, "");
