import React from 'react'
import Avatar from '@mui/material/Avatar';
import profilepic from '../img/profile.jpg';
import studyingpic from '../img/studying.png';
import developerpic from '../img/developer.JPG';
import spacepic from '../img/space.jpg';
import './About.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Grid from '@mui/material/Grid';
const About = () => {
    return (
        <div id="about">
            
 
        <h1>About Me</h1>
        <br/>
 
        <Avatar
        className="middle"
        alt="Jason Nguyen"
        src= {profilepic}
        sx={{ width: 100, height: 100 }}/>

        <h2>Hello my name is Jason, nice to meet you!</h2>
            <p id ="bolds">I am 4th year computer science major student at University of California, Irvine.
                I enjoy designing, creating and coding web applications & interfaces that have
                can have an impact on the world.
            </p>


             
             <Grid container spacing = {2}>
            
                <Grid item xs={12} md>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={studyingpic}
                        alt="Peter Parker Studying"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Student 👨‍🎓
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        I am always constantly learning! Whether its new concepts of machine learning 
                        or cloud computing, I strive to master all the programming langauges of today.
                        Computer science will continue to grow and I will be ready to learn it!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>

                <Grid item xs={12} md>

                <Card >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={developerpic}
                        alt="Peter Parker Studying"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Developer 👨‍💻
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        The first rule of one my toughest professors at UCI is ABC: ALWAYS BE CODING.
                        Code is the solution to all of today's problems! Sofware engineers loves testing their problem
                        solvings skills through all the unqiue puzzles. Each is comprised of their own language and 
                        abstraction of knowledge waiting to be discovered. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>

                <Grid item xs={12} md>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={spacepic}
                        alt="Peter Parker Studying"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Designer 👨‍🎨
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Envisioning finished project that pleases both the mind and eyes are stylistically sound.
                        Having a harmonizing color palette and design layout can make a huge difference in a website.
                        Designing the future products and their stories is something I really enjoy!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                
            </Grid>
             
        </div>
    )
};


export default About;