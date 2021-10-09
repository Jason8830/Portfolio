import React from 'react'
import {motion} from 'framer-motion';
import './Starter.css'
import sun from '../img/sun.png';
const Starter = () => {

    return (
        <div id="starter">
            <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
            >
            Welcome Back
            </motion.h1>
        </div>
    )
}

export default Starter