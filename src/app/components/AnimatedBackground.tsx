import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

      {/* Floating Shapes */}
      {/* Top Left - Purple/Blue Swirl */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-accent-purple/30 dark:bg-accent-purple/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>

      {/* Top Right - Yellow/Orange Swirl */}
      <div className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-accent-yellow/30 dark:bg-accent-yellow/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      {/* Bottom Left - Pink/Red Swirl */}
      <div className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] bg-accent-pink/30 dark:bg-accent-pink/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Center/Moving - Large Slow Swirl */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent-blue/10 dark:bg-accent-blue/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-spin-slow"></div>
    </div>
  );
};

export default AnimatedBackground;
