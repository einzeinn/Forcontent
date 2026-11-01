import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const colors = {
  background: '#070914',
  cyan: '#7de8ff',
  violet: '#a78bfa',
  white: '#f4f5ff',
};

export const AnimeScienceIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  const titleOpacity = interpolate(frame, [12, 32, 100, 125], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleY = interpolate(frame, [12, 32], [55, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const orbScale = interpolate(frame, [0, 45, 90, 150], [0.35, 1, 1.12, 1.5], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const orbRotation = frame * 0.7;
  const pulse = 0.65 + Math.sin(frame / 9) * 0.12;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        color: colors.white,
        fontFamily: 'Arial, Helvetica, sans-serif',
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(ellipse at 50% 43%, rgba(65, 75, 150, 0.28), transparent 52%), linear-gradient(180deg, #080b19 0%, #10132a 55%, #070914 100%)',
        }}
      />

      {Array.from({length: 34}).map((_, index) => {
        const x = (index * 173) % width;
        const y = (index * 307) % height;
        const twinkle = 0.25 + Math.abs(Math.sin(frame / 18 + index)) * 0.7;
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: index % 5 === 0 ? 4 : 2,
              height: index % 5 === 0 ? 4 : 2,
              borderRadius: '50%',
              backgroundColor: '#d9eaff',
              opacity: twinkle,
              boxShadow: '0 0 12px rgba(125, 232, 255, 0.8)',
            }}
          />
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '43%',
          width: 590,
          height: 590,
          marginLeft: -295,
          marginTop: -295,
          transform: `scale(${orbScale}) rotate(${orbRotation}deg)`,
          borderRadius: '50%',
          opacity: pulse,
          background:
            'conic-gradient(from 0deg, transparent, rgba(125,232,255,0.95), rgba(167,139,250,0.75), transparent, rgba(125,232,255,0.8), transparent)',
          filter: 'blur(2px)',
          maskImage: 'radial-gradient(circle, transparent 48%, black 51%, black 56%, transparent 63%)',
          WebkitMaskImage:
            'radial-gradient(circle, transparent 48%, black 51%, black 56%, transparent 63%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '43%',
          width: 290,
          height: 290,
          marginLeft: -145,
          marginTop: -145,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 38% 35%, #222c50 0%, #080914 58%, #02030a 100%)',
          boxShadow:
            '0 0 45px rgba(125,232,255,0.35), 0 0 120px rgba(125,232,255,0.16)',
          transform: `scale(${0.96 + Math.sin(frame / 12) * 0.035})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 170,
          left: 0,
          right: 0,
          textAlign: 'center',
          letterSpacing: 8,
          color: colors.cyan,
          fontSize: 25,
          fontWeight: 700,
          opacity: interpolate(frame, [0, 25], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        ANIME × REAL SCIENCE
      </div>

      <div
        style={{
          position: 'absolute',
          top: '69%',
          left: 90,
          right: 90,
          textAlign: 'center',
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div
          style={{
            color: colors.violet,
            fontSize: 27,
            fontWeight: 700,
            letterSpacing: 7,
            marginBottom: 24,
          }}
        >
          THE SCIENCE BEHIND
        </div>
        <div
          style={{
            fontSize: 86,
            lineHeight: 1.02,
            fontWeight: 900,
            letterSpacing: -3,
            textShadow: '0 0 35px rgba(125,232,255,0.3)',
          }}
        >
          THE
          <br />
          UNKNOWN
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 28,
            color: '#b7bfd8',
            letterSpacing: 2,
          }}
        >
          Fiction inspires. Science explains.
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 100,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: '#78829f',
          fontSize: 20,
          letterSpacing: 5,
          opacity: interpolate(frame, [40, 65], [0, 0.85], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        A SCIENCE STORY IN 60 SECONDS
      </div>
    </AbsoluteFill>
  );
};
