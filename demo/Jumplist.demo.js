import React, { Fragment } from 'react';
import { Jumplist, JumplistProvider } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const formatClickableNode = string => (
  <button type="button">
    {string}
  </button>
);

const JumplistDemo = () => {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{ __html: `
          .demo__jumplist__item--is-in-frame::after {
            content: ' is in frame';
          }
        ` }}
      />
      <pre style={{ marginTop: '0px' }}>
        <code>
          classPrefix: demo
          <br />
          vOffset: -100
          <br />
          {'list: {'}
          <br />
          &emsp; object
          <br />
          &emsp; object
          <br />
          &emsp; onject
          <br />
          {'}'}
        </code>
      </pre>
      <JumplistProvider classPrefix="demo">
        <div style={{ position: 'fixed' }}>
          <Jumplist
            vOffset={-100}
            list={[
              {
                clickableNode: formatClickableNode('Jump to darkseagreen'),
                targetId: 'darkseagreen',
              },
              {
                clickableNode: formatClickableNode('Jump to chocolate'),
                targetId: 'chocolate',
              },
              {
                clickableNode: formatClickableNode('Jump to darksalmon'),
                targetId: 'darksalmon',
              },
            ]}
          />
        </div>
        <div
          id="darkseagreen"
          style={{ height: '1500px', backgroundColor: 'darkseagreen', marginBottom: '10px' }}
        />
        <div
          id="chocolate"
          style={{ height: '500px', backgroundColor: 'linchocolateen', marginBottom: '10px' }}
        />
        <div
          id="darksalmon"
          style={{ height: '2000px', backgroundColor: 'darksalmon' }}
        />
      </JumplistProvider>
    </Fragment>
  );
};

export default JumplistDemo;
