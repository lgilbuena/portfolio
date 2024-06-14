import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Timelines from './components/timeline';
import LangCard from './components/langCard';
import ToolCard from './components/toolCard';
import FrameCard from './components/frameCard';
import github from './svgs/icons8-github.svg';
import gmail from './svgs/icons8-gmail.svg';
import linkedin from './svgs/icons8-linkedin.svg';
function App() {
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [refresh,setRefresh] = useState(false)

  const homeSectionRef = useRef(null);

  const scrollToHomeSection = () => {
    
    homeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const currentDate = new Date();
  const birthDate = new Date('2002-07-24');
  const [skillMode, setSkillMode] = useState();
  const [age, setAge] = useState(calculateAge());
  function calculateAge() {
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - birthDate;
    const ageInYears = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    return ageInYears.toFixed(10); // Rounded to 10 decimal points
  }

  useEffect(()=>{
    if (!refresh){
      scrollToHomeSection()
      setRefresh(true)
    }
  })

  useEffect(() => {
    // Update the age every second
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 50);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); 

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleSkillClick(num){
    setSkillMode(num);
  }

  function closeOut(){
    setSkillMode(0);
  }

  const renderCard = () =>{
    switch(skillMode){
      case 0:
        return null
      case 1:
        return <LangCard func={closeOut}/>
      case 2:
        return <ToolCard func={closeOut}/>
      case 3:
        return <FrameCard func={closeOut}/>
     }
   
}

  return (
    <div>
      <nav>
        <ul className="navigation">
          <li><a href="#about" className="nav-link">About Me</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="stars">
        <div className="star"><span className='shootingstar'></span></div>
        <div className="star"><span className='shootingstar'></span></div>
        <div className="star"><span className='shootingstar'></span></div>
        <div className="star"><span className='shootingstar'></span></div>
        <div className="star"><span className='shootingstar'></span></div>
      </div>
      <section id="home" ref={homeSectionRef}>
        <div className="homepage-container">
          <div className="homepage">
            <p className='introduction' onClick={scrollToHomeSection}>Luis Gilbuena.</p>
          </div>
        </div>
        <div className='bouncy'>
          {/* <marquee behavior="alternate" scrollamount="30">
            <marquee behavior="alternate" scrollamount="30" direction="down">
              <p>Click on the text at the top to learn more about me!</p>
            </marquee>
          </marquee>        */}
        </div>
      </section>
      <section id="about" className='aboutme'>
        <h2>About Me</h2>
        <p>I am a <span className="age">{age}</span> year old software engineer from Windsor, Connecticut who recently graduated from the University of Connecticut with a Bachelor's in Computer Science with a minor in Mathematics. With this degree, I am looking for a software engineer role with hopes to grow along with the world of technology.</p>
        <h2>Experience</h2>
        <p>Click on the events to learn more about my time!</p>
        <Timelines/>
      </section>
      <section id="skills" className='myskills'>
        <h2>Skills</h2>
        <p style={{zIndex: 2}}>During my time at the University of Connecticut, I've learned several <span className='pgrmskill' onClick={() => handleSkillClick(1)}>programming languages</span>, <span className='toolskill' onClick={() => handleSkillClick(2)}>tools</span>, and <span className='frameskill' onClick={() => handleSkillClick(3)}>frameworks/methodologies</span>.</p>
        <div style={{marginTop: 10}}>{renderCard()}</div>
      </section>
      <section id="contact" className='mycontacts'>
      <a href='https://github.com/lgilbuena' target='_blank'><img src={github} className="github" style={{ width: dimensions.width * 0.1, height: dimensions.width * 0.1 }} /></a>
      <a href='mailto:luisjoseph.gilbuena@gmail.com' target='_blank'><img src={gmail} className="gmail" style={{ width: dimensions.width * 0.1, height: dimensions.width * 0.1 }} /></a>
      <a href='https://www.linkedin.com/in/luis-gilbuena-a9a57b200/' target='_blank' className='linkedin'><img src={linkedin} className="linkedin" style={{ width: dimensions.width * 0.1, height: dimensions.width * 0.1 }} /></a>
      
      </section>
    </div>
  );
}

export default App;
