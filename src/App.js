import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Timelines from './components/timeline';
function App() {


  const homeSectionRef = useRef(null);

  const scrollToHomeSection = () => {
    
    homeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const currentDate = new Date();
  const birthDate = new Date('2002-07-24');
  const [age, setAge] = useState(calculateAge());
  function calculateAge() {
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - birthDate;
    const ageInYears = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    return ageInYears.toFixed(10); // Rounded to 10 decimal points
  }

  useEffect(() => {
    // Update the age every second
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 50);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); 

  

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
          <marquee behavior="alternate" scrollamount="30">
            <marquee behavior="alternate" scrollamount="30" direction="down">
              <p>Click on the text at the top to learn more about me!</p>
            </marquee>
          </marquee>       
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
        <p>Content for the Skills section...</p>
      </section>
      <section id="contact" className='mycontacts'>
        <h2>Contact</h2>
        <p>Content for the Contact section...</p>
      </section>
    </div>
  );
}

export default App;
