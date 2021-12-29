import {
  headerInfo as header,
  contactInfo as contact,
  workExperience,
  education,
  achievements,
  skills,
} from '../data/personalInfo';

export function loadData() {
  return {
    header,
    contact,
    workExperience,
    education,
    achievements,
    skills,
  };
}
