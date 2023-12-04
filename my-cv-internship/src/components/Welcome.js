import './Intro.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const topics = {
    visible: { opacity: 1, scale: 1, 
        transition: {
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        },},
    hidden: { opacity: 0, scale: 0.5 },
}

const contents = {
    visible: visible => ({ opacity: visible ? 1 : 0, scale: visible ? 1 : 0,
        transition: {   
            duration: 2,
            delay: 0.5,
            type: 'spring',
            stiffness: 150,
        },
    }),
    hidden: { opacity: 0 },
}

const Personal = () => {
    const [visible, setVisible] = useState(false)
    const handleClicked = () => {
        setVisible(!visible)
        console.log(visible)
    }
    return (
        <>
            <motion.div className="topic"
            initial='hidden'
            animate='visible'
            variants={topics}
            onClick={handleClicked}>
                <motion.div className="personal"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                >
                    Personal
                </motion.div>
                <motion.div className="personal-content"
                    custom={visible}
                    initial='hidden'
                    animate='visible'
                    variants={contents}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                >
                    This section is about me!
                    are about name, age, address, hobby, favorite game and etc.
                </motion.div>
            </motion.div>
        </>
    )
}

const Education = () => {
    const [visible, setVisible] = useState(false)
    const handleClicked = () => {
        setVisible(!visible)
        console.log(visible)
    }
    return (
        <>
        <motion.div className="topic"
        initial='hidden'
        animate='visible'
        variants={topics}
        onClick={handleClicked}>
            <motion.div className="education"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                Education
            </motion.div>
            <motion.div className="education-content"
                custom={visible}
                initial='hidden'
                animate='visible'
                variants={contents}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                This section is about my education!
                are about name of school, year of study, and etc.
            </motion.div>
        </motion.div>
        </>
    )
}

const Projects = () => {
    const [visible, setVisible] = useState(false)
    const handleClicked = () => {
        setVisible(!visible)
        console.log(visible)
    }
    return (
        <>
        <motion.div className="topic"
        initial='hidden'
        animate='visible'
        variants={topics}
        onClick={handleClicked}>
            <motion.div className="projects"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                Project
            </motion.div>
            <motion.div className="projects-content"
                custom={visible}
                initial='hidden'
                animate='visible'
                variants={contents}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                This section is about my project!
                are about name of project, year of project, and etc.
            </motion.div>
        </motion.div>
        </>
    )
}


const Welcome = () => {
    const massage = ["Hi, Click me!", "Hi!, I'm a 2nd year student at the KMITL (King Mongkut's Institute of Technology Ladkrabang) , studying Software Engineer. I'm currently looking for a 2023 summer internship.", "I'm interested in AI, Web Developer, and Data Science. I'm also learning React and Node.js", "And right now I'm working with CV-Internship project. in this project I'm using React, Framer Motion, and CSS to make this website.You can click on the text below to see more about me!"]
    const [i, setI] = useState(0)
    const handleDialog = () => {
        setI((prevI) => (prevI + 1) % 4);
        console.log(i);
    };

    const controls = useAnimationControls()
    useEffect(() => {
        if (i === 0) {
            //do the first animation
            controls.start({
                rotate: 360,
                transition: { duration: 0.75, repeat: Infinity, type: 'spring', stiffness: 200, repeatDelay: 2.5 },
            });
            console.log(i + 'if')
        } else {
            //do the second animation
            controls.start({
                rotate: 360,
            });
            console.log(i + 'else')
        }
    }, [i, controls]);


    return (
        <>
            <motion.div className="intro" id='intro' key={i}
                onClick={handleDialog}
                animate={controls}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                {massage[i]}
            </motion.div>
            <div className='container-intro'>
                <Personal />
                <Education />
                <Projects />
            </div>
        </>
    )
}




export default Welcome