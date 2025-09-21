
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className={`flex justify-between items-center w-full ${isOdd ? 'flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white"><i className="fas fa-briefcase"></i></h1>
      </div>
      <div 
        className={`order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4 animate-fade-in-up`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <h3 className="mb-2 font-bold text-light-gray text-xl">{experience.role}</h3>
        <p className="text-sm font-semibold text-accent leading-snug tracking-wide">{experience.company} | {experience.period}</p>
        <ul className="mt-3 list-disc pl-5 text-medium-gray space-y-2">
          {experience.description.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
