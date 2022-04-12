import React, { Fragment } from 'react';
import {
  JumplistProvider
} from '../../src'; // swap '../src' for '../dist/build.bundle' to demo production build

export const JumplistDemo: React.FC = () => (
  <Fragment>
    <code>
      <pre>
        lorem ipsum
      </pre>
    </code>
    <JumplistProvider>

    </JumplistProvider>
  </Fragment>
);
