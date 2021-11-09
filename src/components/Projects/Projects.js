import * as React from 'react'

import Grid from '@mui/material/Grid';
import gdpt from '../img/gdpt.png';
import search from '../img/Search.JPG';
import safe from '../img/safe.JPG';
import Card from '@mui/material/Card';

import './Projects.css'
const Projects = () => {

    return (
        <div id = "projects">
        <h1>Projects</h1>

        <Grid id="projects-grid"container spacing={2}>
            <Grid item xs={12} md>
                <h3>GDPT Manager</h3>
                
                <a href = "https://github.com/Jason8830/GDPT-Manager" ><img src ={gdpt} alt="GDPT Member Manager home page" width="360px" height="250px"/> </a>
                <p>Environments: Mongo DB, Angular, Express.Js, Node.Js</p>
                
            </Grid>

            <Grid item xs={12} md>
                <h3>UCI ICS Search Engine</h3>
                
                <a href="https://github.com/Jason8830/Search-Engine"><img src ={search} alt="UCI Search Engine GUI Image" width="360px" height="250px"/></a>
                <p>Environments: Django, Python, Tkinter</p>
               
            </Grid>

            <Grid item xs={12} md>
            <h3>Safe Accounts</h3>
            <a href="https://www.safeaccounts.net/"><img src ={safe} width="360px" alt="Safe Accounts home page" height="250px"/></a>
            <p>Environments: C#, .NET, React.Js</p>
            </Grid>
            
        </Grid>
        </div>
    )
};


export default Projects;