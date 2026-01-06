'use client';
import React, { useState, useEffect } from "react";
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from "../styles";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const Tech = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "technologies"));
        // Assuming we want to sort or just display all
        const techData = querySnapshot.docs.map(doc => ({
          name: doc.data().name, // Normalize data if needed
          icon: doc.data().icon
        }));
        setTechnologies(techData);
      } catch (error) {
        console.error("Error fetching technologies: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

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
                <img className="w-full h-full rounded-full bg-gray-100 object-cover" src={technology.icon} alt={technology.name} />
              </div>
              {technology.name}
            </div>
          </React.Fragment>

        ))}
        {!loading && technologies.length === 0 && <p className="text-secondary">No technologies found.</p>}
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "");

