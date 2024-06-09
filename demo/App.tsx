import React from 'react';
import { JumplistProvider } from '@faceless-ui/jumplist';
import { Header } from './Header.js';
import { JumplistDemo } from './JumplistDemo/index.js';

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
