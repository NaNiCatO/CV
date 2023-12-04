import React from "react";
import './Education.css';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

const Language = [
    { pic: "./ed-pic/C++.png", name: "C++", point: 6 },
    { pic: "./ed-pic/Java.png", name: "Java" ,point: 5 },
    { pic: "./ed-pic/Python.png", name: "Python" ,point: 8 },
    { pic: "./ed-pic/JavaScript.png", name: "JavaScript" ,point: 6 },
    { pic: "./ed-pic/HTML.png", name: "HTML" ,point: 6 },
    { pic: "./ed-pic/Fastapi.png", name: "Fastapi" ,point: 7 },
    { pic: "./ed-pic/Rust.png", name: "Rust",point: 2 },
];

const Learning = [
    { pic: "./ed-pic/React.png", name: "React" },
    { pic: "./ed-pic/NodeJS.png", name: "NodeJS" },
    { pic: "./ed-pic/SQL.png", name: "SQL" },
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
                    {Language.map((lang, index) => (
                        <div className="education-container" key={uuidv4()}>
                            <img src={lang.pic} alt={lang.name} key={uuidv4()}/>
                            {Array.from({ length: lang.point }).map((_, i) => (
                                <img src='/ed-pic/icons8-circle-48 (1).png' alt='⚫' key={uuidv4()}/>
                            ))}
                            {Array.from({ length: 8-lang.point }).map((_, i) => (
                                <img src='/ed-pic/icons8-circle-48.png' alt='◯' key={uuidv4()}/>
                            ))}
                        </div>
                    ))}
            </div>

        </>
    )
}

export default Education;