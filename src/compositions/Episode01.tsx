import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Opening} from '../scenes/Opening';
import {Explanation} from '../scenes/Explanation';
import {Closing} from '../scenes/Closing';

export const Episode01: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={150}>
        <Opening />
      </Sequence>
      <Sequence from={150} durationInFrames={1050}>
        <Explanation />
      </Sequence>
      <Sequence from={1200} durationInFrames={600}>
        <Closing />
      </Sequence>
    </AbsoluteFill>
  );
};
