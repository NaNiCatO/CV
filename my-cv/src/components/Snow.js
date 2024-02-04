
import { motion } from 'framer-motion';


const Unit = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 100,
        width: '1.5rem',
        height: '1.5rem',
        background: Math.random()*10 < 1 ? 'pink': 'whitesmoke', // 10% chance of pink snow
        borderRadius: '50%',
        zIndex: 1, // Set a negative value to move it to the back
        opacity: 0.8 // Make it slightly transparent
      }}
      drag
      // make snow fall from top of screen and random x position
      initial={{ y: -200 ,x: (Math.random() * 1700)-850}}
      // make snow fall '39.5rem' 630
      animate={{ y: 630 }}
      // snow falls forever and random delay and falling speed
      transition={{ duration: (Math.random() * 4)+6, repeat: Infinity, repeatDelay: (Math.random()*5)+2 , delay: Math.random()*10}}
      // make snow fall faster at the end
      
    />
  );
};

const Snow = () => {
  return (
    <div>
      {Array.from({ length: 50 }).map((_, i) => (
        <Unit key={i} />
      ))}
    </div>
  );
};

export default Snow;
