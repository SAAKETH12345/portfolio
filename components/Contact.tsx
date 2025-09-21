
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-medium-gray mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
        </p>
        <a 
          href="mailto:25311a05u9@cse.sreenidhi.edu.in"
          className="inline-block bg-accent text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-lg mb-12"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/SAAKETH12345" target="_blank" rel="noopener noreferrer" className="text-medium-gray hover:text-accent transition-colors text-3xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kazipeta-saaketh-08b649317/" target="_blank" rel="noopener noreferrer" className="text-medium-gray hover:text-accent transition-colors text-3xl">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/saaketh__007/" target="_blank" rel="noopener noreferrer" className="text-medium-gray hover:text-accent transition-colors text-3xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;