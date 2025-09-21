
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 animate-fade-in-up">
            <img 
                src="https://i.ibb.co/HpDPY6qT/Generated-Image-September-21-2025-10-13-AM.png" 
                alt="Profile" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-accent shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">Saaketh</h1>
            <p className="text-xl md:text-2xl text-medium-gray mb-8">Web Developer & UI/UX Designer</p>
            <div className="flex justify-center space-x-4">
                <a href="#contact" className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-lg">
                    Get In Touch
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
