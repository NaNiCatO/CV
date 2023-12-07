import React from "react";
import './Project.css';
import { motion } from "framer-motion";


import python_financial from "./project-pic/python-financial.png";
import cpp_banking from "./project-pic/cpp-banking.png";
import HTML_Fastapi from "./project-pic/HTML&Fastapi-forum&bookingseat.png";
import cpp_assembly from "./project-pic/cpp&assembly.png";

const Projects = [
    { lang: "Python", name: "Calendar financial", detail: "recording the financial and have tools for analysis", pic: python_financial },
    { lang: "C++", name: "Banking System", detail: "simulation of simple banking system", pic: cpp_banking },
    { lang: "HTML&Fastapi", name: "Web forum", detail: "web forum for the student to use in branch", pic: HTML_Fastapi },
    { lang: "C++&Arm Assembly", name: "Asteroid game", detail: "using C++ for Graphics and assembly for logic in-game", pic: cpp_assembly },
]

const contents = {
    visible: i => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.35,
        },
    }),
    hidden: { opacity: 0, scale: 0 },
}


const Items = () => {
    return (
        <>
            {Projects.map((Projects, i) => (
                <motion.div className="container-project"
                    key={Projects.lang + i}
                    custom={i}
                    initial='hidden'
                    animate='visible'
                    variants={contents}
                >
                    <div className="project-pic">
                        <img src={Projects.pic} alt="project-pic" />
                    </div>
                    <div className="project-name">
                        <h3>{Projects.lang}: {Projects.name}</h3>
                    </div>
                    <div className="project-detail">
                        {Projects.detail}
                    </div>
                </motion.div>
            ))}
        </>
    )

}

const Project = () => {
    return (
        <>
            <motion.div className="project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 2 }}>
                <div className="project-content">
                    <div className="project-name">
                        <h1>Project</h1>
                    </div>
                    <div className="project-detail">
                        This section is about my project! are about my project that I have done.
                    </div>
                    <div className="project-container">
                        {Items()}
                    </div>
                    <div className="project-container">
                    <div>
                    <div className="project-name">
                        <h3>React, NodeJS: CV</h3>
                    </div>
                    <div className="project-detail">
                        And this is my CV that I have done with React and NodeJS.
                    </div>
                    </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}


export default Project;