import React from "react";
import './WorkExperience.css';

import workExperience from "../../data/WorkExperience";
import WorkExperienceCard from "./WorkExperienceCard";
import Heading from "../Heading/Heading";

const WorkExperience = (props) => {
  return <div id='WorkExperience'>
    <Heading heading='Work Experience' />
    {Object.keys(workExperience).map(key => {
      return <WorkExperienceCard key={key} companyName={key} positions={workExperience[key]} />
    })}
  </div>
}

export default WorkExperience;