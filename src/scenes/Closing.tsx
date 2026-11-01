import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Background} from '../components/Background';
import {TextReveal} from '../components/TextReveal';
import {Subtitle} from '../components/Subtitle';

export const Closing: React.FC = () => {
  return (
    <AbsoluteFill style={{color: '#f4f5ff', fontFamily: 'Arial, sans-serif'}}>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 80,
        }}
      >
        <TextReveal delay={0}>
          <div style={{fontSize: 28, color: '#7de8ff', letterSpacing: 8, fontWeight: 700}}>
            FICTION MEETS REALITY
          </div>
        </TextReveal>
        <TextReveal delay={20}>
          <div style={{fontSize: 82, fontWeight: 900, marginTop: 38, lineHeight: 1.05}}>
            STAY
            <br />
            CURIOUS.
          </div>
        </TextReveal>
      </AbsoluteFill>
      <Subtitle delay={45}>The universe is strange enough without making the science up.</Subtitle>
    </AbsoluteFill>
  );
};
