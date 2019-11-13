import React, { Fragment } from 'react';
import { JumplistProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import JumplistDemo from './Jumplist.demo';

const AppDemo = () => {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{ __html: `
          .demo__jumplist__item--is-in-frame::after {
            content: ' is in frame';
          }
        ` }}
      />
      <JumplistProvider classPrefix="demo">
        <JumplistDemo />
      </JumplistProvider>
    </Fragment>
  );
};

export default AppDemo;
