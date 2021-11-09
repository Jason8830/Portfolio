import React from 'react'
import cdfa from '../img/cdfa.png';
import './Icon.css';

const CDFAIcon = () => {
    return (
        <div>
            <img src = {cdfa} alt= "California Department of Food and Agriculture Icon"
            style={{'height':"25px",'marginTop':'10px'}}/>
        </div>
    )
}

export default CDFAIcon;