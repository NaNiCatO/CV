import React from "react";
import './Education.css';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';


import CPPIcon from "./ed-pic/C++.png";
import JavaIcon from "./ed-pic/Java.png";
import PythonIcon from "./ed-pic/Python.png";
import JavaScriptIcon from "./ed-pic/JavaScript.png";
import HTMLIcon from "./ed-pic/HTML.png";
import FastapiIcon from "./ed-pic/Fastapi.png";
import RustIcon from "./ed-pic/Rust.png";
import ReactIcon from "./ed-pic/React.png";
import NodeJSIcon from "./ed-pic/NodeJS.png";
import SQLIcon from "./ed-pic/SQL.png";
import CircleIcon from "./ed-pic/icons8-circle-48.png";
import CircleIcon1 from "./ed-pic/icons8-circle-48 (1).png";



const points = {
    visible: i => ({  
        scale : [0, 1.5, 1],
        opacity:  [0, 1, 1],
        transition: {
            type: "spring",
            stiffness: 260,
            delay: (i * 0.25)+2,
            duration : 3,
            ease: "easeInOut",
            times : [0.5, 1.5, 1 ],
          },
    }),
    hidden: { opacity: 0 , scale : 0 },
}


const fading = {
    visible: i => ({  
        opacity: 1, 
        x: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            delay: 0.25*i,
            duration : 3,
          },
    }),
    hidden: { opacity: 0, x:-50 },
}

const poping = {
    visible: i => ({  
        opacity: 1, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            delay: 0.25*(i+3),
            duration : 2,
          },
    }),
    hidden: { opacity: 0, scale: 0 },
}

const Education = () => {
    const Language = [
        { pic: CPPIcon, name: "C++", point: 6 },
        { pic: JavaIcon, name: "Java" ,point: 5 },
        { pic: PythonIcon, name: "Python" ,point: 8 },
        { pic: JavaScriptIcon, name: "JavaScript" ,point: 6 },
        { pic: HTMLIcon, name: "HTML" ,point: 6 },
        { pic: FastapiIcon, name: "Fastapi" ,point: 7 },
        { pic: RustIcon, name: "Rust",point: 2 },
    ];
    
    const Learning = [
        { pic: ReactIcon, name: "React" },
        { pic: NodeJSIcon, name: "NodeJS" },
        { pic: SQLIcon, name: "SQL" },
    ];

    return (
        <>
            <div className="education-container">
                <motion.div className="education-block"
                custom={1}
                variants={fading}
                initial='hidden'
                animate='visible'>
                    <div className="education-topic"><h1>Education</h1></div>
                    <div className="education-content">
                        <div className="education-label">High School</div>
                        <div className="education-block">
                            <div>Loeipittayakom School</div>
                            <div>GPA: 3.86</div>
                        </div>
                        <div className="education-label">Bachelor's Degree</div>
                        <div className="education-block">
                            <div>King Mongkut's Institute of Technology Ladkrabang</div>
                            <div>GPA: 3.49</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="education-block"
                custom={2}
                variants={fading}
                initial='hidden'
                animate='visible'>
                    <div className="education-topic"><h1>Skills</h1></div>
                    <div className="education-content">
                        <div className="education-container">
                            <div className="education-block">
                                <div className="education-label">Language</div>
                                <div>{Language.map((lang, index) => (
                                    <li key={uuidv4()}>
                                        {lang.name}
                                    </li>
                                ))}</div>
                            </div>
                            <div className="education-block">
                                <div className="education-label">Learning</div>
                                <div>{Learning.map((lang, index) => (
                                    <li key={uuidv4()}>
                                        {lang.name}
                                    </li>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="education-block">
                <motion.div className="education-topic" 
                custom={3}
                variants={fading}
                initial='hidden'
                animate='visible'><h1>Knowledge</h1></motion.div>
                <div className="education-knowledge">
                    {Language.map((lang, index) => (
                        <div className="education-knowledge-block" key={uuidv4()}>
                            <motion.img src={lang.pic} alt={lang.name} key={uuidv4()} className="Icon"
                            custom={index}
                            variants={poping}
                            initial='hidden'
                            animate='visible'/>
                            {Array.from({ length: lang.point }).map((_, i) => (
                                <motion.img src={CircleIcon} alt='⚫' key={uuidv4()} className="point"
                                custom={i+index}
                                variants={points}
                                initial='hidden'        
                                animate='visible'/>
                            ))}
                            {Array.from({ length: 8-lang.point }).map((_, i) => (
                                <motion.img src={CircleIcon1} alt='◯' key={uuidv4()} className="point"
                                custom={i+lang.point+index}
                                variants={points}
                                initial='hidden'
                                animate='visible'/>
                            ))}
                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}


export default Education;