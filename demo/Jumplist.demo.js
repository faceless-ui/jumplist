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
      <code>
        <pre>
          classPrefix: demo
          <br />
          htmlElement: div
          <br />
          threshold: 0
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
        </pre>
      </code>
      <div style={{ position: 'fixed', zIndex: '1', backgroundColor: 'white' }}>
        <Jumplist
          vOffset={-100}
          htmlElement="div"
          list={[
            {
              clickableNode: formatClickableNode('Jump to whitesmoke'),
              targetId: 'whitesmoke',
            },
            {
              clickableNode: formatClickableNode('Jump to gainsboro'),
              targetId: 'gainsboro',
            },
            {
              clickableNode: formatClickableNode('Jump to silver'),
              targetId: 'silver',
            },
            {
              clickableNode: formatClickableNode('Jump to gray'),
              targetId: 'gray',
            },
            {
              clickableNode: formatClickableNode('Jump to lightblue'),
              targetId: 'lightblue',
            },
            {
              clickableNode: formatClickableNode('Jump to blue'),
              targetId: 'blue',
            },
          ]}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <div
          className="vertical-overflow"
          style={{ width: '150vw', flexShrink: '0' }}
        >
          <div
            id="whitesmoke"
            style={{ height: '500px', backgroundColor: 'whitesmoke', marginBottom: '10px' }}
          />
          <div
            id="gainsboro"
            style={{ height: '250px', backgroundColor: 'gainsboro', marginBottom: '10px' }}
          />
          <div
            id="silver"
            style={{ height: '1500px', backgroundColor: 'silver', marginBottom: '10px' }}
          />
          <div
            id="gray"
            style={{ height: '2000px', backgroundColor: 'gray' }}
          />
        </div>
        <div
          className="horizontal-overflow"
          style={{ flexShrink: '0' }}
        >
          <div
            id="lightblue"
            style={{ height: '1000px', width: '125vw', backgroundColor: 'lightblue', display: 'inline-block' }}
          />
          <div
            id="blue"
            style={{ height: '1000px', width: '500px', backgroundColor: 'blue', display: 'inline-block' }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default JumplistDemo;
