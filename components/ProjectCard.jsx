import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import {slideIn} from '../utils/motion'
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({github,img,name,liveUrl,id}) => {
  return (
    <motion.div variants={slideIn("up", "tween",id*0.5, 2)}
    className='sm:w-[25%] w-full min-h[400px] flex flex-col items-center gap-2 rounded-xl border border-violet-400 relative'>
        <Tilt>
        <img className='w-full h-1/2 rounded-xl' src={img} alt="" />
        <h2 className='text-md text-center font-semibold p-2'>{name}</h2>
        <div className='flex flex-col gap-1 items-center justify-evenly absolute top-4 right-2'>
            <a className='black-gradient font-semibold text-sm px-2 py-2 rounded-full mx-auto' target='_blank' href={github}><GitHubIcon/></a>
            <a className='black-gradient font-semibold text-sm px-2 py-2 rounded-full mx-auto' target='_blank' href={liveUrl}><PublicIcon/></a>
        </div>
        </Tilt>
    </motion.div>
  )
}

export default ProjectCard