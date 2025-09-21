
import React from 'react';
import { Experience as ExperienceType } from '../types';
import Section from './Section';
import ExperienceItem from './ExperienceItem';

const experienceData: ExperienceType[] = [
  {
    id: 1,
    role: 'Web Developer & UI/UX Designer',
    company: 'Freelance',
    period: '2023 - Present',
    description: [
      'Designed and developed user-centric websites and applications from concept to deployment.',
      'Utilized Figma and Adobe XD for creating high-fidelity mockups, wireframes, and prototypes.',
      'Built responsive and interactive front-end experiences using React, HTML, CSS, and JavaScript.',
      'Collaborated with clients to understand requirements and translate their vision into digital products.'
    ],
  }
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-secondary">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
