import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type SubtitleProps = {
  children: React.ReactNode;
  delay?: number;
};

export const Subtitle: React.FC<SubtitleProps> = ({children, delay = 0}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 80,
        right: 80,
        bottom: 170,
        textAlign: 'center',
        color: '#c4cbe0',
        fontSize: 30,
        lineHeight: 1.4,
        opacity,
      }}
    >
      {children}
    </div>
  );
};
