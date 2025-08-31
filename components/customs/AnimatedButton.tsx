import React, { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick
}) => {
  const baseStyles = "relative overflow-hidden px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent text-sm";
  
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg hover:shadow-orange-500/25",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/15 focus:ring-white/50 backdrop-blur-sm"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
    >
      {/* Flowing dots animation */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/100 rounded-full"
            style={{
              left: `${25 + (i * 15)}%`,
              bottom: '-4px',
              animation: `floatingDots 1.8s infinite ${i * 0.3}s ease-in-out`
            }}
          />
        ))}
      </div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </button>
  );
};

export default AnimatedButton;