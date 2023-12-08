import { motion } from 'framer-motion';
import './Personal.css';
import React from 'react';

const contents = {
    visible: i => ({ 
        opacity:  1,
        rotate: 360,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: (i * 0.15)+2,
          },
    }),
    hidden: { opacity: 0 },
}

const borders = {
    visible: i => ({  
        opacity:  1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.35,
          },
    }),
    hidden: { opacity: 0 },
}

const info = [
    { id: "Name", content: "Suvijuk Samitimata" },
    { id: "Nickname", content: "Arm" },
    { id: "Branch", content: "Software Engineer" },
    { id: "Hobby", content: "Gaming and sometime watch some tech channel" },
    { id: "Date of Birth", content: "January 1, 2004" },
    { id: "Address", content: "655/11 Soi Chalong Krung 1, Lat Krabang Sub-district, Lat Krabang District, Bangkok 10520, Thailand" },
    { id: "My interest", content: "AI, backend and some frontend." },
];
const Information = () => {
    return (
        <>
            {info.map((info, i) => (
                <motion.div className="container-info"
                    key={info.id}
                    custom={i}
                    initial='hidden'
                    animate='visible'
                    variants={contents}
                >
                    <p>{info.id}: </p><p>{info.content}</p>
                </motion.div>
            ))}
        </>
    )
}

const Personal = () => {
    let i = info.length;

    const contact = {
        email: 'armfiba@gmail.com',
        facebook: 'Suvijuk Samitimata',
        lineId: 'arm1122334455',
        github: 'https://github.com/NaNiCatO',
        linkedin: 'https://www.linkedin.com/in/arm-fiba-b63220282/',
    };

return (
    <>
    <motion.div className="personal-info"
    variants={borders}
    custom={1}
    initial='hidden'
    animate='visible'>
        <motion.h1 
        variants={borders}
        custom={2}
        initial='hidden'
        animate='visible'>Personal Information</motion.h1>

        <motion.h2
        variants={borders}
        custom={3}
        initial='hidden'
        animate='visible'>Information</motion.h2>

        <Information/>

        <motion.h2
        variants={borders}
        custom={4}
        initial='hidden'
        animate='visible'>Contact</motion.h2>

        <motion.div className="container-info"
        custom={++i}
        initial='hidden'
        animate='visible'
        variants={contents}><p>Email: </p><p>{contact.email}</p></motion.div>

        <motion.div className="container-info"
        custom={++i}
        initial='hidden'
        animate='visible'
        variants={contents}><p>Facebook: </p><p>{contact.facebook}</p></motion.div>
        
        <motion.div className="container-info"
        custom={++i}
        initial='hidden'
        animate='visible'
        variants={contents}><p>Line ID: </p><p>{contact.lineId}</p></motion.div>

        <motion.div className="container-info"
        custom={++i}
        initial='hidden'
        animate='visible'
        variants={contents}><p>Github: </p><motion.p whileHover={{ scale: 1.2 }}><a href={contact.github} target="_blank" rel="noopener noreferrer">{contact.github}</a></motion.p></motion.div>
        
        <motion.div className="container-info"
        custom={++i}
        initial='hidden'
        animate='visible'
        variants={contents}><p>Linkedin: </p><motion.p whileHover={{ scale: 1.2 }}><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></motion.p></motion.div>
    </motion.div>
    </>
);
};


export default Personal;
