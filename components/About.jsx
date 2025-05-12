import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stage } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { styles } from "../styles";
import {
  ContactShadows,
} from "@react-three/drei";
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const About = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full`}
      id="about"
    >
      <h1
        className={`${styles.heroHeadText} text-white text-xl sm:text-3xl font-semibold font-serif`}
      >
        About Me
      </h1>
      <div
        className={`flex flex-col sm:flex-row w-full h-full items-center justify-center mx-auto ${styles.paddingX}`}
      >
        <div className="flex flex-col w-full sm:w-2/3 mx-auto pl-5 gap-5">
          <p className="font-semibold text-sm drop-shadow-[0_1px_1px_rgba(245,245,245,0.3)] sm:px-1">
            Hey there! I'm{" "}
            <span className="text-violet-600 text-md">Anand Roy</span>,
            your go-to Full Stack Developer and Mobile App Pro, with a flair for
            Robotic Process Automation (RPA). My passion? Turning ideas into
            stunning digital realities.
          </p>
          <p className="font-semibold text-sm drop-shadow-[0_1px_1px_rgba(245,245,245,0.3)]">
            With ample of experience, I have honed my skills in crafting
            seamless web experiences and user-friendly mobile apps. I'm not
            just about code; I'm about solutions that make an impact.
          </p>
          <p className="font-semibold text-sm drop-shadow-[0_1px_1px_rgba(245,245,245,0.3)]">
            My philosophy? Collaboration and innovation. I thrive on
            collaborating with clients to understand their unique needs, and my
            creative approach ensures we build solutions that exceed
            expectations.
          </p>
          <p className="font-semibold text-sm drop-shadow-[0_1px_1px_rgba(245,245,245,0.3)]">
            But hey, enough about me let's talk about you. Reach out, and let's
            transform your digital vision into a success story.
          </p>
          <div className="flex gap-2">
          <a className="violet-gradient font-semibold text-xs sm:text-sm px-4 py-2 rounded-md mx-auto cursor-pointer" href="#contact">
            Contact Me
          </a>
          <div className="flex mx-auto items-center justify-center gap-2 px-4 py-2 violet-gradient rounded-xl cursor-pointer">
        <FileDownloadIcon/>
        <a className="font font-semibold text-xs sm:text-sm" href="/resume/Resume_Anand.pdf" download>Download Resume</a>
        </div>
        </div>
        </div>
        <div className='h-screen px-5 sm:px-1 w-full sm:w-1/3 flex items-center justify-center'>
        <Canvas eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      {/* <Environment preset={null} background blur={1} /> */}
      <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
        <group position-y={-0.8}>
        <Avatar rotation={[0, 0, 0]} />
        </group>
    </Canvas>
    </div>
      </div>
    </div>
  );
};

export default About;
