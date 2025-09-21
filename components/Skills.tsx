
import React from 'react';
import Section from './Section';

const skills = [
  'HTML', 'CSS', 'JavaScript','C','Sql'
];

const SkillPill: React.FC<{ skill: string, index: number }> = ({ skill, index }) => {
    return (
        <div 
            className="bg-secondary py-2 px-5 rounded-full text-medium-gray font-semibold hover:bg-accent hover:text-white transition-all duration-300 cursor-default animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {skill}
        </div>
    );
}

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills" className="bg-secondary">
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <SkillPill key={skill} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
