import React, { Component } from 'react';
import profile from '../profile.json';
import MobileHamburger from './MobileHamburger';
import Header from './Header';
import Lead from './Lead';
import About from './About';
import Experience from './ExperienceTimeline';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileHamburger />
        <Header />
        <Lead name={profile.name} title={profile.title} />
        <About description={profile.about} />
        <Experience experience={profile.experience} />
        <Education {...profile.education} />
        <Projects projects={profile.projects} />
        <Skills skills={profile.skills} />
        <Contact contact={profile.contact} />
        <Footer {...profile.footer} />
      </div>
    );
  }
}

export default App;
