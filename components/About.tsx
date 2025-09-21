
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://i.ibb.co/RTy6RcCr/Web-Photo-Editor.jpg" 
            alt="About Me" 
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
        <div className="md:w-2/3 text-lg text-medium-gray space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p>
            I am a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences.
          </p>
          <p>
            With 1 year of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life. I specialize in building responsive and interactive websites that not only look great but also provide a seamless user experience.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
