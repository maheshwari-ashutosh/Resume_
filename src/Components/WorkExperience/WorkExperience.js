import React from 'react';
import './WorkExperience.css';

import WorkExperienceCard from './WorkExperienceCard';
import Heading from '../Heading/Heading';

const WorkExperience = (props) => {
  const workExperience = props.data;
  return (
    <div id='WorkExperience'>
      <Heading heading='Work Experience' />
      {Object.keys(workExperience).map((key) => {
        return (
          <WorkExperienceCard
            key={key}
            position={key}
            companyDetails={workExperience[key]}
          />
        );
      })}
    </div>
  );
};

export default WorkExperience;
