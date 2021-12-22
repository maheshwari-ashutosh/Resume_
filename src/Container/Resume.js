import React from "react";
import './Resume.css';

import Header from '../Components/Header/Header';
import Contact from "../Components/Contact/Contact";
import WorkExperience from "../Components/WorkExperience/WorkExperience";
import Education from "../Components/Education/Education";
import Achievement from "../Components/Achievements/Achievement";
import Skills from "../Components/Skills/Skills";

const Resume = (props) => {
  return <div id='Resume'>
    <Header />
    <Contact />
    <WorkExperience />
    <Education />
    <Achievement />
    <Skills />
  </div>
}

export default Resume;