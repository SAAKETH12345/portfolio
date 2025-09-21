
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-light-gray">{project.title}</h3>
        <p className="text-medium-gray flex-grow mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-dark-gray text-light-gray text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold flex items-center gap-2">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold flex items-center gap-2">
              <i className="fab fa-github"></i> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
