/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'orbit': 'orbit 25s linear infinite',
        'orbit-reverse': 'orbit-reverse 30s linear infinite',
        'twinkle': 'twinkle 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(10px) rotate(-360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(0deg) translateX(20px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(20px) rotate(360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
      },
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      textShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.3)',
        'white': '0 0 2px rgba(255, 255, 255, 0.5)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.transform-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective': {
          perspective: '1500px',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px rgba(255, 255, 255, 0.2)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      };
      
      // Rotate utilities
      const rotateX = {
        '.rotate-x-5': {
          transform: 'rotateX(5deg)',
        },
        '.rotate-x-10': {
          transform: 'rotateX(10deg)',
        },
        '.rotate-x-15': {
          transform: 'rotateX(15deg)',
        },
      };
      
      const rotateY = {
        '.rotate-y-5': {
          transform: 'rotateY(5deg)',
        },
        '.rotate-y-10': {
          transform: 'rotateY(10deg)',
        },
        '.rotate-y-15': {
          transform: 'rotateY(15deg)',
        },
      };
      
      // Animation delays
      const animationDelays = {};
      [700, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000].forEach(delay => {
        animationDelays[`.animation-delay-${delay}`] = {
          animationDelay: `${delay}ms`,
        };
      });
      
      addUtilities(newUtilities);
      addUtilities(rotateX);
      addUtilities(rotateY);
      addUtilities(animationDelays);
    },
  ],
} 