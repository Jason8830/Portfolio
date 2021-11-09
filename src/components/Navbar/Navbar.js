import React, {Component,useState, useEffect} from 'react'
import "./Navbar.css";
import {MenuItems} from "./MenuItems"
import logo from '../img/bitmap.png';
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';

class Navbar extends Component{

    state = {clicked:false}
    
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    
    render(){
        return (
            <div id = "nav">
                <nav className="NavbarItems">
                    
                    <span id="stick">
                    <motion.img 
                            animate={{
                                rotate: [...Array(360).keys()]
                            }}
                            transition={{
                                rotate: {
                                  yoyo: Infinity,  
                                  ease: "easeOut",
                                  duration:10
                                }
                              }}
                              drag
                              dragConstraints={{ bottom:0,top:0,left: 0, right: 0 }}
                              dragElastic={1}
                        id = "mobile" src= {logo} alt="Jason Nguyen's Logo"/>
                        <motion.img 
                            animate={{
                                rotate: [...Array(360).keys()]
                            }}
                            transition={{
                                rotate: {
                                  yoyo: Infinity,  
                                  ease: "easeOut",
                                  duration:10
                                }
                              }}
                              drag
                              dragConstraints={{ bottom:0,top:0,left: 0, right: 0 }}
                              dragElastic={1}
                        id = "web" src= {logo} alt="Jason Nguyen's Logo"/>
                        <p className="fullname" style={{color: ""}}>Jason Nguyen</p>
                        <p className="initials" style={{color: ""}}>JN</p>
                        
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className ={this.state.clicked ? 'fas fa-times':'fas fa-bars'}>
                            </i>
                        </div>

                    </span>

                    <ul className = {this.state.clicked ? 'nav-menu active ': 'nav-menu'}>
                        {MenuItems.map((item,index)=>{
                            return (
                                <motion.li
                                whileHover= {{scale:1.6}}
                                key ={index}><Link  smooth={true} duration={1000}   onClick={this.handleClick} className={item.cName} to={item.url}>
                                    {item.title}
                                    </Link>
                                </motion.li>
                            )
                        })}
                    </ul>

                    
                    <motion.a 
                    whileHover= {{x:10,y:-5}}
                    target="blank" className= "resume-btn" href={process.env.PUBLIC_URL + '/files/resume.pdf'}>Resume</motion.a>
                </nav>
            </div>
            
        )
    }

}

export default Navbar;