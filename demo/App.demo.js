import React from 'react';
import { JumplistProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import JumplistDemo from './Jumplist.demo';

const AppDemo = () => {
  return (
    <JumplistProvider
      classPrefix="demo"
      frameOffset={100}
    >
      <JumplistDemo />
      <div
        style={{
          position: 'fixed',
          top: '100px',
          right: '100px',
          bottom: '100px',
          left: '100px',
          outline: 'dashed rgba(0, 0, 0, .15) 2px',
        }}
      />
    </JumplistProvider>
  );
};

export default AppDemo;
