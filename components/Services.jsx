import React from 'react'
import { styles } from "../styles";
import Cards from './Cards';


const Services = () => {
    const services =[
        {"name":"RPA (Robotic Process Automation)",
         "img":'services/RPA.jpg',
         "desc":'Streamline your workflows with RPA, the automation technology that mimics human actions. Say goodbye to repetitive tasks, improve efficiency, and free up valuable time for strategic initiatives',
         id:1
        },
        {"name":"Full Stack Development",
         "img":'services/Full Stack.jpg',
         "desc":'From the front end to the back end, We bring your web applications to life. Crafting seamless user experiences, robust functionality, and efficient databases. Your complete digital solution in one',
         id:2
        },
        {"name":"Front End Development",
         "img":'services/Front End.png',
         "desc":"Captivate users with stunning interfaces. We're your front-end guru, crafting visually appealing, responsive designs that engage your audience and create lasting impressions",
         id:3
        },
        {"name":"Back End Development",
         "img":'services/Back End.png',
         "desc":'Powering the engine behind the scenes. Our back-end expertise ensures secure, efficient, and scalable web applications that handle data and processes flawlessly',
         id:4
        },
        {"name":"Logo Design",
         "img":'services/Logo Design.jpg',
         "desc":'A logo speaks volumes about your brand. Let us create a visual identity that tells your story, leaves a mark, and captures your essence in a single, memorable emblem',
         id:5
        },
        {"name":"Training",
         "img":'services/Training.jpg',
         "desc":'Our training programs cover a range of IT topics, keeping you competitive in a rapidly evolving digital landscape',
         id:6
        },
        {"name":"Web Design",
         "img":'services/Web Design.jpg',
         "desc":'Transform your vision into a stunning online presence. My web design expertise combines aesthetics and usability, creating websites that stand out and deliver results',
         id:7
        },
        {"name":"Web Development",
         "img":'services/Web Development.jpg',
         "desc":"Building websites that work. I turn concepts into functional websites, ensuring they're responsive, user-friendly, and optimized for performance. Let's make your online goals a reality",
         id:8
        },
        {"name":"Mobile Application Development",
         "img":'services/Mobile.png',
         "desc":"Crafting intuitive mobile experiences that engage and captivate. From concept to launch, I specialize in developing user-friendly and innovative mobile applications that bring your ideas to life on every device",
         id:9
        },
    ]
  return (
    <div
    className={`flex flex-col ${styles.paddingX} items-center justify-center w-full`}
      id="services">
        <h1
        className={`${styles.heroHeadText} text-white text-xl sm:text-3xl font-semibold font-serif`}
      >
        Services We Offer
      </h1>
      <div className='w-full h-full flex flex-col sm:flex-row flex-wrap gap-5 items-center justify-around my-4'>
      {
        services.map((service)=>{
           return(
            <React.Fragment key={service.id}>
            <Cards desc={service.desc} img={service.img} name={service.name} id={service.id}/>
            </React.Fragment>
           )
        })
      }
      </div>
      </div>
  )
}

export default Services