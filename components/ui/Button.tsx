import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-sm md:text-base',
    lg: 'px-8 py-3 text-base',
  };

  const isPrimary = variant === 'primary';
  const isGlass = variant === 'glass';

  return (
    <button 
      className={`relative rounded-full font-bold group overflow-hidden transition-all duration-200 active:scale-[0.98] active:translate-y-[2px] ${isGlass ? 'shadow-sm' : 'shadow-lg active:shadow-md'} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {isPrimary && (
        <>
          {/* Vibrant Liquid Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 opacity-100 rounded-full transition-all duration-500 group-active:brightness-90" />
          
          {/* Glass Layer for Depth */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full" />
          
          {/* 3D Depth: Stronger Highlight and Shadow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.4)]" />
          
          {/* High-Gloss Shine */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />
          
          {/* Intense Outer Glow */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-500" />
          
          <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide text-white">
            {children}
          </span>
        </>
      )}

      {isGlass && (
        <>
          {/* Translucent Glass Base */}
          <div className="absolute inset-0 bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-full transition-all duration-500 group-hover:bg-zinc-100/50 dark:group-hover:bg-zinc-900/50" />
          
          {/* 3D Specular Highlight */}
          <div className="absolute top-[1.5px] left-[6px] w-[65%] h-[40%] bg-gradient-to-br from-white/40 to-transparent rounded-full blur-[0.5px] pointer-events-none" />
          
          {/* Bottom Rim Reflection */}
          <div className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-white/20 blur-[0.5px] pointer-events-none" />
          
          {/* Outer Border Glow */}
          <div className="absolute inset-0 rounded-full border-[0.5px] border-white/20 pointer-events-none" />

          <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide text-zinc-950 dark:text-white transition-colors">
            {children}
          </span>
        </>
      )}

      {!isPrimary && !isGlass && (
        <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide text-zinc-950 dark:text-white">
          {children}
        </span>
      )}
    </button>
  );
};

export default Button;
