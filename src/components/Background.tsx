import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

const stars = Array.from({length: 18}, (_, index) => ({
  left: `${(index * 47 + 11) % 100}%`,
  top: `${(index * 61 + 7) % 100}%`,
  size: index % 4 === 0 ? 3 : 2,
  phase: index * 0.7,
}));

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(ellipse at 50% 42%, rgba(65,75,150,0.28), transparent 54%), linear-gradient(180deg, #080b19 0%, #10132a 55%, #070914 100%)',
      }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            backgroundColor: '#d9eaff',
            opacity: 0.25 + Math.abs(Math.sin(frame / 18 + star.phase)) * 0.65,
            boxShadow: '0 0 10px rgba(125,232,255,0.7)',
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
