import React, {Component,useState, useEffect} from 'react'
import "./Navbar.css";
import {MenuItems} from "./MenuItems"
import { Button } from './Button';


class Navbar extends Component{
    state = {clicked:false}
    
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    
    render(){
        return (
            <div id = "nav">
                <nav className="NavbarItems">
                    <p class="fullname">Jason Nguyen</p>
                    <p class="initials">JN</p>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className ={this.state.clicked ? 'fas fa-times':'fas fa-bars'}>
                        </i>
                    </div>
                    <ul className = {this.state.clicked ? 'nav-menu active ': 'nav-menu'}>
                        {MenuItems.map((item,index)=>{
                            return (
                                <li key ={index}><a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                        
                    </ul>
                    <Button> Resume</Button> 
                </nav>
            </div>
        )
    }

}

export default Navbar;