import './Intro.css';
import { useState, useEffect } from 'react';
import { motion, useAnimationControls  } from 'framer-motion';

const massage = ["Hi, Click me!","Hi!, I'm a 2nd year student at the KMITL (King Mongkut's Institute of Technology Ladkrabang) , studying Software Engineer. I'm currently looking for a 2023 summer internship.", "I'm interested in AI, Web Developer, and Data Science. I'm also learning React and Node.js", "And right now I'm working with CV-Internship project. in this project I'm using React, Framer Motion, and CSS to make this website.You can click on the text below to see more about me!"]

const Personal = () => {
    return (
        <motion.div className="personal" 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            personal
        </motion.div>
    )
}

const Education = () => {
    return (
        <motion.div className="education"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            Education
        </motion.div>
    )
}

const Projects = () => {
    return (
        <motion.div className="projects"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            Project
        </motion.div>
    )
}


const Intro = () => {
    const [i, setI] = useState(0)
    const handleDialog = () => {
        setI((prevI) => (prevI + 1) % 4);
        console.log(i);
      };

    const controls = useAnimationControls()
    useEffect(() => {
        if (i === 0) {
          controls.start({
            rotate: 360,
            transition: { duration: 0.75, repeat: Infinity, type: 'spring', stiffness: 200, repeatDelay: 2.5 },
          });
          
        } else {
            controls.start({
                rotate: 360,
            });
        }
      }, [i, controls]);
    

    return (
    <>
        <motion.div className="intro" id='intro' 
        onClick={handleDialog}
        animate={controls}
        >
            {massage[i]}
        </motion.div>
        <div className='container'>
        <Personal/>
        <Education/>
        <Projects/>
        </div>
    </>
    )
}




export default Intro