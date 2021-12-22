import React from 'react';
import './Education.css';

import Heading from '../Heading/Heading';
import education from '../../data/Education';
import EducationCard from './EducationCard';

const Education = (props) => {
   return (
      <div id='Education'>
        <Heading heading='Education' />
        {Object.keys(education).map(degree => {
          return <EducationCard degree={degree} degreeDetail={education[degree]} />
        })}
      </div>
   );
}

export default Education;
