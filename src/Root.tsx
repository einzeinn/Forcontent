import React from 'react';
import {Composition} from 'remotion';
import {AnimeScienceIntro} from './compositions/AnimeScienceIntro';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="AnimeScienceIntro"
      component={AnimeScienceIntro}
      durationInFrames={60 * 30}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
