import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Background} from '../components/Background';
import {TextReveal} from '../components/TextReveal';
import {Subtitle} from '../components/Subtitle';

export const Explanation: React.FC = () => {
  return (
    <AbsoluteFill style={{color: '#f4f5ff', fontFamily: 'Arial, sans-serif'}}>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 90,
        }}
      >
        <TextReveal delay={0}>
          <div style={{color: '#a78bfa', fontSize: 25, letterSpacing: 7, fontWeight: 700}}>
            THE QUESTION
          </div>
        </TextReveal>
        <TextReveal delay={15}>
          <div style={{fontSize: 68, fontWeight: 900, marginTop: 35, lineHeight: 1.1}}>
            HOW COULD
            <br />
            THIS WORK?
          </div>
        </TextReveal>
        <TextReveal delay={45}>
          <div style={{fontSize: 31, color: '#b7bfd8', marginTop: 45, lineHeight: 1.5}}>
            Replace this placeholder with the real scientific principle, evidence, and a clear explanation.
          </div>
        </TextReveal>
      </AbsoluteFill>
      <Subtitle delay={60}>An analogy helps us imagine it. Physics tells us what is actually happening.</Subtitle>
    </AbsoluteFill>
  );
};
