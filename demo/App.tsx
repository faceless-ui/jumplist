import React from 'react';
import { JumplistProvider } from '../src';
import { Header } from './Header';
import { JumplistDemo } from './JumplistDemo';

const App: React.FC = () => (
  <JumplistProvider
    rootMargin="-100px 0px 0px 0px"
    smoothScroll
  >
    <Header />
    <JumplistDemo />
  </JumplistProvider>
);

export default App;
