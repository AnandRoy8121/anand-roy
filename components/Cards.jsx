import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import {fadeIn,slideIn} from '../utils/motion'

const Cards = ({desc,img,name,id}) => {
  return (
    <motion.div variants={slideIn("up", "tween",id*0.5, 2)}
     className='sm:w-[25%] w-full min-h[400px] flex flex-col items-center gap-2 rounded-xl border border-violet-400'>
        <Tilt>
        <img className='w-full h-1/2 rounded-xl' src={img} alt="" />
        <h2 className='text-md text-center font-semibold p-2'>{name}</h2>
        <p className='text-xs text-center p-2'>{desc}</p>
        </Tilt>
    </motion.div>
  )
}

export default Cards