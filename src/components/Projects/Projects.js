import * as React from 'react'

import Grid from '@mui/material/Grid';
import gdpt from '../img/gdpt.png';
import search from '../img/Search.JPG';
import safe from '../img/safe.JPG';
import './Projects.css'
const Projects = () => {

    return (
        <div id = "projects">
        <h1>Projects</h1>

        <Grid container spacing={2}>
            <Grid item xs={12} md>
                <h3>GDPT Manager</h3>
                <a href = "https://github.com/Jason8830/GDPT-Manager" ><img src ={gdpt} width="360px" height="250px"/> </a>
                <p>Environemnts: Mongo DB, Angular, Express.Js, Node.Js</p>
            </Grid>

            <Grid item xs={12} md>
                <h3>UCI ICS Search Engine</h3>
                <a href="https://github.com/Jason8830/Search-Engine"><img src ={search} width="360px" height="250px"/></a>
                <p>Environemnts: Django, Python, Tkinter</p>
            </Grid>

            <Grid item xs={12} md>
            <h3>Safe Accounts</h3>
            <a href="https://www.safeaccounts.net/"><img src ={safe} width="360px" height="250px"/></a>
            <p>Environemnts: C#, .NET, React.Js</p>
            </Grid>
        </Grid>
        </div>
    )
};


export default Projects;