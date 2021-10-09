import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CDFAIcon  from './CDFAIcon';
import  CDPHIcon from './CDPHIcon';
import  SCCIcon  from './SCCIcon';

import './Experience.css';
 const Experience = () => {
    return (
        <div id="experince">
          <h1 class="heading">Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={<h2 style={{color:"white"}}>Nov. 2019 - Dec. 2020</h2>}
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<CDPHIcon/>}
        >
          
          <h3 className="vertical-timeline-element-title">California Department of Public Health</h3>
          <h4 className="vertical-timeline-element-subtitle">Student Assitant</h4>
          <p>
            <ul>
            <li>Develop client side applications to extract data from Oracle DB using C#</li>
            <li>Format data into a defined format, write to a file and send email</li>
            <li>Convert queries from Crystal Reports to Report Builder</li>
            <li>Provide help desk support: troubleshooting logins, firewall, security setting, etc.</li>
            <li> Present code for peer review in team meetings</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<h2 style={{color:"white"}}>Mar. 2019 - Nov. 2019</h2>}
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<CDFAIcon/>}
        >
          <h3 className="vertical-timeline-element-title">California Department of Food and Agriculture</h3>
          <h4 className="vertical-timeline-element-subtitle">Web Developer UI</h4>
          <p>
          <ul>
            <li>Design front end applications using Angular and Bootstrap</li>
            <li>Smoke test applications during release</li>
            <li>Identify and fix ADA violations using WAVE and ChromeVox</li>
            <li>Maintain and update pages in WordPress</li>

          </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<h2 style={{color:"white"}}>Jan. 2018 - Mar. 2019</h2>}
          iconStyle={{ background: 'white', color: 'black' }}
          icon={<SCCIcon />}
        >
          <h3 className="vertical-timeline-element-title">Sacramento City College</h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Science Tutor</h4>
          <p>
            <ul>
          <li>Assists students in object oriented programming, data structures, and algorithm
            design & implementation in C++/C</li>
            <li>Advocates critical thinking and problem solving in tutees</li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
        </div>
    )
}

export default Experience;