import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {TextReveal} from '../components/TextReveal';
import {Subtitle} from '../components/Subtitle';

export const Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 120, 150], [0.7, 1, 1.08], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{color: '#f4f5ff', fontFamily: 'Arial, sans-serif'}}>
      <Background />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '39%',
          width: 390,
          height: 390,
          marginLeft: -195,
          marginTop: -195,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 38% 35%, #28345b 0%, #080914 62%, #02030a 100%)',
          boxShadow: '0 0 55px rgba(125,232,255,0.3), 0 0 130px rgba(125,232,255,0.12)',
          transform: `scale(${scale})`,
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 70,
        }}
      >
        <TextReveal delay={8}>
          <div style={{color: '#7de8ff', fontSize: 25, letterSpacing: 8, fontWeight: 700}}>
            ANIME × REAL SCIENCE
          </div>
        </TextReveal>
        <TextReveal delay={30}>
          <div
            style={{
              marginTop: 500,
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: -2,
              textShadow: '0 0 30px rgba(125,232,255,0.25)',
            }}
          >
            THE SCIENCE
            <br />
            OF THE IMPOSSIBLE
          </div>
        </TextReveal>
      </AbsoluteFill>
      <Subtitle delay={75}>Fiction inspires. Science explains.</Subtitle>
    </AbsoluteFill>
  );
};
