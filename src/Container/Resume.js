import React, {useEffect, useState} from "react";
import './Resume.css';

import Header from '../Components/Header/Header';
import Contact from "../Components/Contact/Contact";
import WorkExperience from "../Components/WorkExperience/WorkExperience";
import Education from "../Components/Education/Education";
import Achievement from "../Components/Achievements/Achievement";
import Skills from "../Components/Skills/Skills";
import {loadData} from '../Utility/DataLoader';

const Resume = (props) => {

  let [data, setData] = useState(null);

  useEffect(() => {
    const data = loadData();
    setData(data);
  }, [])
  
  return data ? (
  <div id='Resume'>
    <Header data={data.header} />
    <Contact data={data.contact} />
    <WorkExperience data={data.workExperience} />
    <Education data = {data.education}/>
    <Achievement data={data.achievements} />
    <Skills data={data.skills} />
  </div>) : <div>Loading</div>
}

export default Resume;