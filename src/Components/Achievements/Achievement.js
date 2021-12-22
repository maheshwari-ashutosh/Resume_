import React from 'react';
import './Achievement.css'
import Heading from '../Heading/Heading';

import achievements from '../../data/Achievements';

const Achievement = (props) => {
   return (
      <div id='Achievement'>
        <Heading heading='Achievements' />
        {achievements.map(achievement => {
           return <div className='achievement'>
           <div className='title'>{achievement.title}</div>
           <div className='detail'>{achievement.detail}</div>
        </div>
        })}
      </div>
   );
}

export default Achievement;
