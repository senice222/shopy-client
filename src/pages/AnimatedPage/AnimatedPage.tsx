import React from 'react';
import {Children} from "../../interfaces/Layout";
import {motion} from 'framer-motion'

const AnimatedPage = ({children}: Children) => {
    const animations = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{duration: 1}}>
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
