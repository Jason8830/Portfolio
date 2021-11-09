// import * as React from 'react'

// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import './Skills.css';
// import Grid from '@mui/material/Grid';
// const Skills = () => {

//     const [expanded, setExpanded] = React.useState(false);

//     const handleChange = (panel) => (event, isExpanded) => {
//       setExpanded(isExpanded ? panel : false);
//     };

//     return (
//         <>
//         <div id="skills">
//         <h1>Skills</h1>
//         <Grid container spacing={2}>
//         <Grid item xs={12} md>
//         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
//             Languages
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>Scripting and Problem Solving Purposes</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//               <ul>
//             <li>Python</li>
//             <li>Java</li>
//             <li>C/C++</li>
//             <li>JavaScript</li>
//             <li>TypeScript</li>
//             <li>C#</li>
//             </ul>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>

//         </Grid>
//         <Grid item xs={12}md>
//         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>Web</Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Current and up to date web technologies
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//               <ul>
//             <li>React</li>
//             <li>Angular</li>
//             <li>Node.Js</li>
//             <li>Express.Js</li>
//             <li>Boostrap</li>
//             <li>Material UI</li>

//             </ul>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//         </Grid>
//         <Grid item xs={12}md>
            
//       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel3bh-header"
//         >
//           <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>
//             Others
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>
//             Additional CS technologies everyone should know!
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           <h3>Database</h3>
//           <ul>
//             <li>Oracle DB</li>
//             <li>MySql</li>
//             <li>Mongo DB</li>
//             <li>AWS EC2</li>
//             </ul>
//             <h3>Others</h3>
//             <ul>
//             <li>AWS</li>
//             <li>TensorFlow</li>
//             <li>Kieras</li>
//             <li>Selenium </li>
//             <li>Microsoft Office Suite (Word, Excel, Outlook, PowerPoint)</li>
//             </ul>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//         </Grid>
//         </Grid>
//         </div>
//         </>
//     )
// };


// export default Skills;


import "./styles.css";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./ingredients.js";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <>
    <div id="skills">
    <h1>Skills</h1>

    <div className="grid">

    <div className="window b1">
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
          {selectedTab.skills.map((index)=>(
            <motion.li  className="skill-item" > {index}</motion.li>
          ))}
          
          </motion.div>

        </AnimatePresence>
      </main>
    </div>

    <mainner className ="b2">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>

        </AnimatePresence>
      </mainner>

    </div>
    </div>
    </>
  );
}
