import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import './components.css'
import { useState } from 'react';
import UConnCard from './uconncard';
import TutorCard from './tutorcard';
import InternCard from './intern';
import GradCard from './grad';

export default function Timelines() {
    const [clicked, setClick] = useState(true)
    const [mode, setMode] = useState()

    function handleClick(num = null){
      setMode(num)
      setClick(!clicked)
      console.log(mode)
    }
    
    const renderCard = () =>{
        switch(mode){
          case 0:
            return <UConnCard func={handleClick}/>
          case 1:
            return <TutorCard func={handleClick}/>
          case 2:
            return <InternCard func={handleClick}/>
          case 3:
            return <GradCard func={handleClick}/>
         }
       
    }

    return(
      clicked?
        <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent color='white' fontFamily='Miracode' sx={{fontSize: '1vw'}}>
            August 31, 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color='white' fontFamily='Miracode' onClick={() => handleClick(0)} sx={{fontSize: '1vw'}}>
            Enrolled into the University of Connecticut
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='white' fontFamily='Miracode' sx={{fontSize: '1vw'}}>
            September 14, 2022 - May 4, 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color='white' fontFamily='Miracode' onClick={() => handleClick(1)} sx={{fontSize: '1vw'}}>
            Hired as a tutor for the College of Engineering
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='white' fontFamily='Miracode' sx={{fontSize: '1vw'}}>
            June 5, 2022 - August 10, 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color='white' fontFamily='Miracode' onClick={() => handleClick(2)} sx={{fontSize: '1vw'}}>
            Hired as a Software Engineer Intern
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='white' fontFamily='Miracode' sx={{fontSize: '1vw'}}>
            May 4, 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color='white' fontFamily='Miracode' onClick={() => handleClick(3)} sx={{fontSize: '1vw'}}> 
            Graduated from the University of Connecticut
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='white' fontFamily='Miracode' sx={{fontSize: '1vw'}}>
            ???
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent color='white' fontFamily='Miracode' sx={{fontSize: '1vw'}}>
            ???
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      : 
      <div className={`fade-${clicked ? 'out' : 'in'}`} style={{ display:'flex', justifyContent:'center' }}>{renderCard()}</div>
      
    
      
    )};
