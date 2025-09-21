import React from 'react';
import { Project } from '../types';
import Section from './Section';
import ProjectCard from './ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'C Code Sum Calculator',
    description: 'An interactive web version of a classic C program.',
    imageUrl: 'https://i.ibb.co/hx2XmxWv/Screenshot-2025-09-21-112957.png',
    tags: ['HTML', 'Tailwind CSS', 'TypeScript', 'C', 'Responsive Design'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'My First Application',
    description: 'Enter a number to see how it compares to 18.',
    imageUrl: 'https://i.ibb.co/HfwxBQ7y/Screenshot-2025-09-21-112627.png',
    tags: ['HTML', 'Tailwind CSS', 'TypeScript', 'C', 'Responsive Design'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;