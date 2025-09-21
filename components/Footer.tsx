
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-6 md:px-12 text-center text-medium-gray">
        <p>&copy; {new Date().getFullYear()} Saaketh. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built by Saaketh</p>
      </div>
    </footer>
  );
};

export default Footer;
