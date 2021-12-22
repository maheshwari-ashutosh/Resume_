import React from 'react';
import './Skills.css';
import Heading from '../Heading/Heading';

import skills from '../../data/SkillsAndCertification';

const Skills = (props) => {
   return (
      <div id="Skills">
        <Heading heading='Skills and Certification' />
        <div className='skills d-flex flex-wrap'>
          {skills.map((item, index) => {
            if(index === skills.length-1) {
              return <div className='skill'>{item}</div>
            }
            return <div className='skill'>{item}</div>
          })}
        </div>
      </div>
   );
}

export default Skills;
