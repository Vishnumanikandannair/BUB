import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`font-righteous text-6xl ${className}`}>
      {text}
    </div>
  );
};

export default AnimatedText;