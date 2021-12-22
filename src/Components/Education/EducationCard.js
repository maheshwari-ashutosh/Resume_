import React from 'react';

const EducationCard = (props) => {
  const {degree, degreeDetail} = props;
  return <div className='educationCard'>
    <div className='degreeName'>{degree} {degreeDetail.name && `, ${degreeDetail.name}`}</div>
    <div className='duration'>{degreeDetail.from} - {degreeDetail.to}</div>
    <ul className='summary'>
      {degreeDetail.summary.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  </div>;
};

export default EducationCard;
