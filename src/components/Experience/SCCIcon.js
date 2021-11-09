import React from 'react'
import scc from '../img/scc.jpg';
import './Icon.css';

const SCCIcon = () => {
    return (
        <div>
            <img src = {scc} alt= "Sacramento City College Icon"
            style={{height:"25px",marginTop:'15px'}}/>
        </div>
    )
}

export default SCCIcon;