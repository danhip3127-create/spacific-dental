import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  showText?: boolean;
  iconSize?: number;
}

export function PDSLogoIcon({ 
  size = 44, 
  theme = 'light',
  animateRotation = true
}: { 
  size?: number; 
  theme?: 'light' | 'dark';
  animateRotation?: boolean;
}) {
  // Official PDS brand Hex colors: Blue is #00A3E0, Gray is #808285
  const blueColor = '#00A3E0';
  const grayColor = theme === 'dark' ? '#94A3B8' : '#808285'; // slate-400 for dark mode, brand gray for light

  // 8 teeth pointing inwards towards the center (50, 50)
  // Crown is on the outside, roots are on the inside.
  const content = (
    <g transform="translate(50, 50)">
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = i * 45;
        // In the official logo, the tooth in the top-right quadrant (around 45 degrees) is bright blue
        const isBlueColor = i === 1;
        const fill = isBlueColor ? blueColor : grayColor;

        return (
          <path
            key={i}
            // Upright tooth template centered at (0,0)
            // Crown at top (negative y), roots at bottom (positive y)
            // Then rotated so roots point inwards towards center (50, 50)
            d="M -11,-15 C -11,-23 11,-23 11,-15 C 11,-8 13.5,0 11,11 C 10,15.5 6,17.5 4,13.5 C 3,9.5 0,6 -3,9.5 C -4,13.5 -8,15.5 -11,11 C -13.5,0 -11,-8 -11,-15 Z"
            transform={`rotate(${angle}) translate(0, -28)`}
            fill={fill}
            className="transition-colors duration-300"
          />
        );
      })}
    </g>
  );

  if (animateRotation) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        animate={{ rotate: [0, 360, 360, 720] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [[0.25, 1, 0.3, 1], "linear", [0.7, 0, 0.75, 0]],
          times: [0, 0.42, 0.58, 1.0],
        }}
        style={{ willChange: 'transform' }}
      >
        {content}
      </motion.svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {content}
    </svg>
  );
}

export default function PDSLogo({ 
  className = '', 
  theme = 'light', 
  showText = true, 
  iconSize = 44,
  animateRotation = true
}: LogoProps & { animateRotation?: boolean }) {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dental Circular Icon */}
      <PDSLogoIcon size={iconSize} theme={theme} animateRotation={animateRotation} />

      {showText && (
        <div className="flex flex-col select-none">
          {/* PACIFIC */}
          <span
            className={`font-sans font-bold leading-none tracking-[0.03em] ${
              isDark ? 'text-white' : 'text-slate-700'
            }`}
            style={{ fontSize: `${iconSize * 0.44}px` }}
          >
            PACIFIC
          </span>
          {/* DENTAL SERVICES */}
          <span
            className={`font-sans tracking-[0.16em] uppercase font-medium mt-0.5 relative ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
            style={{ 
              fontSize: `${iconSize * 0.20}px`,
              letterSpacing: '0.16em'
            }}
          >
            DENTAL SERVICES
            <span 
              className="absolute text-[6px] font-bold" 
              style={{ 
                top: '-2px', 
                right: '-8px',
                fontSize: `${iconSize * 0.12}px` 
              }}
            >
              ®
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
