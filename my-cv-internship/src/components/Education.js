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


const Education = () => {
    return (
        <>
            <div className="education-container">
                <div className="education-block">
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
                </div>

                <div className="education-block">
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
                </div>
            </div>
            <div className="education-block">
                <div className="education-topic"><h1>Knowledge</h1></div>
                <div className="education-knowledge">
                    {Language.map((lang, index) => (
                        <div className="education-knowledge-block" key={uuidv4()}>
                            <img src={lang.pic} alt={lang.name} key={uuidv4()} className="Icon"/>
                            {Array.from({ length: lang.point }).map((_, i) => (
                                <img src={CircleIcon} alt='⚫' key={uuidv4()} className="point"/>
                            ))}
                            {Array.from({ length: 8-lang.point }).map((_, i) => (
                                <img src={CircleIcon1} alt='◯' key={uuidv4()} className="point"/>
                            ))}
                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}

export default Education;