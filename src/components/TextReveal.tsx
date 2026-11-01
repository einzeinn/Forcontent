import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type TextRevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
};

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  delay = 0,
  duration = 18,
  style,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [delay, delay + duration],
    [0, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const translateY = interpolate(
    frame,
    [delay, delay + duration],
    [28, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  return (
    <div style={{opacity, transform: `translateY(${translateY}px)`, ...style}}>
      {children}
    </div>
  );
};
