import React from "react";  

const WorkExperienceCard = (props) => {
  const companyName = props.companyName;
  const positions = props.positions;
  return <div className='workExperienceCard'>
    {Object.keys(positions).map(position => {
      return <div className='experienceDetails'> 
        <div className='position'>{position}</div>
        <div className='companyName'> {companyName} </div>
        <div className='duration'> 
          {positions[position].fromDate} - {positions[position].toDate}
        </div>
        <ul className='workItems'>
          {positions[position].workItems.map((item, index) => {
            return <li key={index}> <em>{index+1}.</em> {item} </li>
          })}
        </ul>
      </div>
    })}
  </div>
}

export default WorkExperienceCard;