import React, {useState,useEffect} from 'react'
import './Starter.css'
import Particles from 'react-tsparticles';
import particlesConfig from './particle-config';
import {motion, useAnimation} from 'framer-motion';
import Navbar from '../Navbar/Navbar';

import earth from '../img/earth.png';
import sun from '../img/sun.png';
import mars from '../img/mars.png';
import mercury from '../img/mercury.png';
import venus from '../img/venus.png';

import jupiter from '../img/jupiter.png';
import saturn from '../img/saturn.png';
import uranus from '../img/uranus.png';
import neptune from '../img/neptune.png';


const Starter = () => {

    const innerControls = useAnimation();

    const outerControls = useAnimation();

    const fadeUp = {
        hidden:{opacity:0,y:300},
        visible:{
            opacity:1,
            y:0,
        },
    }

    const fadeDown = {
        hidden:{opacity:0,y:-300},
        visible:{
            opacity:1,
            y:0,
        },
    }

    const inOrder = {
        hidden:{opacity:0},
        visible:{
            opacity:1,
            transition:{
            
                delayChildren: 0.3,
                staggerChildren:.4,
            }
        }
    }

    const line1 = "Welcome Back";

    const sentence = {
        hidden:{opacity:1},
        visible:{
            opacity:1,
            transition:{
                delay:.5,
                staggerChildren:0.1,
            },
        },
    }

    const letter = {
        hidden:{opacity:0,y:50},
        visible:{
            opacity:1,
            y:0,
        },
    }

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        console.log(isOn);
        // if its true 
        if(!isOn){
            innerControls.start('hidden');
        }

        if(isOn){
            outerControls.start('hidden');
        }
        
    setIsOn(!isOn)
    };

    useEffect(() => {
        if(!isOn){
            innerControls.start('visible');
        }

        if(isOn){
            outerControls.start('visible');
        }
       
      });

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    
    };

    return (
        <>
        
        <div id="starter">
       
   
            <div class= "canvas">
            <Particles id="particle" params= {particlesConfig}>
            </Particles> 
            </div>

            <Navbar/>
            
            <motion.div className="switch" 
            variants={fadeUp}
            animate="visible"
            initial="hidden"
            transition ={{delay:2.2}}
            data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
            </motion.div>



            <motion.h1
            variants={sentence}
            animate= "visible"
            initial="hidden"
            className="welcome"
            >
            {line1.split("").map((char,index) =>{
                return (
                    <motion.span className = "wb" key={char + "-"+index}
                    variants={letter}>
                        {char}
                    </motion.span>
                )
            
            })}
            </motion.h1>

            <motion.div
                variants={inOrder}
                animate= {innerControls}
                initial="hidden"
                className="inner-planet-container"
            >

            <motion.img 
            variants={fadeUp}
            whileHover ={{scale:1.2}}
            whileTap = {{scale:.8}}
            id = "sun" src = {sun}/>

            <motion.img 
            variants={fadeDown}
            whileHover ={{scale:1.3}}
            whileTap = {{rotate: 90, transition: { duration: .3 }}}
            
            id = "mercury" src = {mercury}/>

            <motion.img 
            variants={fadeUp}
            whileHover ={{scale:1.1}}
            whileTap = {{rotate: -90, transition: { duration: .5 }}}
            id = "venus" src = {venus}/>

            <motion.img id = "earth" 
            variants={fadeDown}
            whileHover ={{scale:1.3}}
            whileTap = {{rotate: 180, transition: { duration: .3 }}}
            src = {earth}/>

            <motion.img id = "mars" 
            variants={fadeUp}
            whileHover ={{scale:1.1}}
            whileTap = {{rotate: 360, transition: { duration: .6 }}}
            src = {mars}/> 

            </motion.div>


             <motion.div
                variants={inOrder}
                animate= {outerControls}
                initial="hidden"
                className="outer-planet-container"
            >

            <motion.img 
            variants={fadeUp}
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:.6}}
            dragElastic={0.2}
            id = "jupiter" src = {jupiter}/>

            <motion.img 
            variants={fadeDown}
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:.9}}
            dragElastic={0.5}
            id = "saturn" src = {saturn}/>

            <motion.img 
            variants={fadeUp}
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:1.2}}
            dragElastic={0.4}
            id = "uranus" src = {uranus}/>

            <motion.img 
            id = "neptune" 
            variants={fadeDown}
            drag
            dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
            dragConstraints={{ left: 10, right: 10 ,top:10,bottom:10}}
            whileDrag={{scale:.6}}
            dragElastic={0.4}
            src = {neptune}/>

 
            </motion.div> 



        </div>
        </>
    );
}

export default Starter;