import React from "react";  

const WorkExperienceCard = (props) => {
  const position = props.position;
  const companyDetails = props.companyDetails;

  return <div className='workExperienceCard'>
      <div className='position'>{position}</div>
      {
      Object.keys(companyDetails).map(companyName => {
        return <div className='experienceDetails'> 
          <div className='companyName'>{companyName}</div>
          <div className='duration'> 
          {companyDetails[companyName].fromDate} - {companyDetails[companyName].toDate}
        </div>
        <ul className='workItems'>
          {companyDetails[companyName].workItems.map((item, index) => {
            return <li key={index}>{item} </li>
          })}
        </ul>
        </div>
      })
    }
    {/* {Object.keys(positions).map(position => {
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
    })} */}
  </div>
}

export default WorkExperienceCard;