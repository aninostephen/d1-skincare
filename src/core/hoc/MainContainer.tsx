import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const MainContainer = ({ children, className = '', backgroundImage }: MainContainerProps) => {
  return (
    <section
      className={`relative w-full h-16 ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-7xl mx-auto h-full">
        {children}
      </div>
    </section>
  );
};

export default MainContainer;
