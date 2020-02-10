import React from 'react';
import { JumplistProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import JumplistDemo from './Jumplist.demo';

const AppDemo = () => (
  <JumplistProvider classPrefix="demo">
    <JumplistDemo />
  </JumplistProvider>
);

export default AppDemo;
