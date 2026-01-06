'use client';
import React, { useState, useEffect } from 'react'
import { styles } from "../styles";
import ProjectCard from './ProjectCard';
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
          projects.map((project, index) => {
            return (
              <React.Fragment key={project.id}>
                <ProjectCard github={project.github} name={project.name} img={project.img} liveUrl={project.liveUrl} id={index} />
              </React.Fragment>
            )
          })
        }
        {!loading && projects.length === 0 && <p className="text-secondary">No recent projects to display.</p>}
      </div>
    </div>
  )
}

export default Projects
