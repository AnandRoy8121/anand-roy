import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import LoadingSpinner from './LoadingSpinner';
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EmailOutlined } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message}),
      });

      if (response.ok) {
        //console.log('Email sent successfully');
        setIsLoading(false);
        setEmail('')
        setName('')
        setMessage('')
        // Handle success, show a success message, or redirect the user
      } else {
        alert('Failed to send email');
        // Handle error, show an error message, or redirect the user
      }
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-4 overflow-hidden` }
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        id="contact"
      >
        <h3 className={`${styles.sectionHeadText} text-2xl text-center font-bold`}>Contact</h3>
        <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
        <p className="font-semibold text-purple-400"><PhoneAndroidIcon/><span className="text-white"> +91 8639688816</span></p>
        <p className="font-semibold text-purple-400"><EmailOutlined/><span className="text-white"> anandroy151997@gmail.com</span></p>
        <p className="font-semibold text-purple-400"><LocationOnIcon/><span className="text-white">Visakhapatnam</span></p>
        </div>
        <ul className="flex flex-row gap-4 items-center justify-center mx-4 my-4 px-4 py-2">
            
            <a href="https://www.linkedin.com/in/anand-roy-2ba991127/" target="_blank"><li><LinkedInIcon fontSize="large" className="text-blue-700 cursor-pointer duration-75 translate-x-2 hover:scale-125"/></li></a>
            <a href="https://github.com/AnandRoy8121" target="_blank"><li><GitHubIcon fontSize="large" className="text-white cursor-pointer duration-75 translate-x-2 hover:scale-125"/></li></a>
          </ul>
      </div>
        <form
          className='mt-6 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='violet-gradient py-3 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mx-auto cursor-pointer'
          onClick={handleSubmit}>
            {isLoading ? <LoadingSpinner /> : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      
      <h1
        className={`${styles.heroHeadText} text-white text-center text-xl sm:text-3xl font-semibold font-serif` }
      >
        Contact Me
      </h1>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
