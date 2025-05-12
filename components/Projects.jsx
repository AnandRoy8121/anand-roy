import React from 'react'
import { styles } from "../styles";
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects =[
        {"name":"North South Tours & Travels",
         "img":'projects/nstt.png',
         "github":'https://github.com/AnandRoy8121/TravelWebsite',
         "liveUrl":"https://www.northsouthtourstravels.com/",
         id:1
        },
        {"name":"Kanaka Durga Consultancy Services",
         "img":'projects/kdcs.png',
         "github":'https://github.com/AnandRoy8121/ACProductsAndServices',
         "liveUrl":"https://www.northsouthtourstravels.com/",
         id:2
        },
        {"name":"Roys Infotech Services",
         "img":'projects/portfolio.png',
         "github":'https://github.com/AnandRoy8121/Roys_Infotech_Solutions',
         "liveUrl":"https://www.northsouthtourstravels.com/",
         id:3
        },
        // {"name":"Toss A Coin",
        //  "img":'projects/Toss.png',
        //  "github":'https://github.com/AnandRoy8121/CoinTossApp',
        //  "liveUrl":"https://www.northsouthtourstravels.com/",
        //  id:4
        // },
    ]
  return (
    <div
    className={`flex flex-col ${styles.paddingX} items-center justify-center w-full`}
      id="projects">
        <h1
        className={`${styles.heroHeadText} text-white text-xl sm:text-3xl font-semibold font-serif`}
      >
      Projects
      </h1>
      <div className='w-full h-full flex flex-col sm:flex-row flex-wrap gap-5 items-center justify-around my-4'>
      {
        projects.map((project)=>{
           return(
            <React.Fragment key={project.id}>
            <ProjectCard github={project.github} name={project.name} img={project.img} liveUrl={project.liveUrl} id={project.id}/>
            </React.Fragment>
           )
        })
      }
      </div>
        </div>
  )
}

export default Projects