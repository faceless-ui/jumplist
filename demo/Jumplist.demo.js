import React, { Fragment } from 'react';
import { Jumplist } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const formatClickableNode = string => (
  <li>
    <button type="button">
      {string}
    </button>
  </li>
);

const JumplistDemo = () => {
  return (
    <Fragment>
      <pre style={{ marginTop: '0px' }}>
        <code>
          classPrefix: demo
          <br />
          htmlElement: div
          <br />
          threshold: 50
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
      <div style={{ position: 'fixed' }}>
        <Jumplist
          threshold={50}
          vOffset={-100}
          htmlElement="div"
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
        style={{ height: '500px', backgroundColor: 'chocolate', marginBottom: '10px' }}
      />
      <div
        id="darksalmon"
        style={{ height: '2000px', backgroundColor: 'darksalmon' }}
      />
    </Fragment>
  );
};

export default JumplistDemo;
