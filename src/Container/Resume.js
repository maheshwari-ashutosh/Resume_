import React from "react";
import './Resume.css';

import Header from '../Components/Header/Header';
import Contact from "../Components/Contact/Contact";
import WorkExperience from "../Components/WorkExperience/WorkExperience";

const Resume = (props) => {
  return <div id='Resume'>
    <Header />
    <Contact />
    <WorkExperience />
  </div>
}

export default Resume;