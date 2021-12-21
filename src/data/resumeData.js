import personalInfo from "./personalInfo";

const headerInfo = {
  name: personalInfo.name,
  currentPosition: personalInfo.currentPosition,
  summary: personalInfo.summary,
}

const contactInfo = {
  phone: personalInfo.contactInfo.phone,
  email: personalInfo.contactInfo.email,
  linkedin: personalInfo.contactInfo.linkedin,
  github: personalInfo.contactInfo.github
}

const bodyInfo = {
  experience: {
    heading: 'Work Experience',
    
  }
}