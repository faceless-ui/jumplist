import React, { Fragment } from 'react';
import { JumplistNode } from '../../src';

export const JumplistDemo: React.FC = () => {
  return (
    <Fragment>
      <div style={{ height: '200px' }} />
      <JumplistNode nodeID="1">
        <div
          id="1"
          style={{
            height: '200px',
            backgroundColor: 'gray'
          }}
        />
      </JumplistNode>
      <div style={{ height: '1000px' }} />
      <JumplistNode nodeID="2">
        <div
          id="2"
          style={{
            height: '75vh',
            width: '100%',
            backgroundColor: 'blue'
          }}
        />
      </JumplistNode>
      <div style={{ height: '100vh' }} />
      <JumplistNode nodeID="3">
        <div
          id="3"
          style={{
            height: '75vh',
            width: '100%',
            backgroundColor: 'pink'
          }}
        />
      </JumplistNode>
      <JumplistNode nodeID="4">
        <div
          id="4"
          style={{
            height: '500px',
            width: '100%',
            backgroundColor: 'green'
          }}
        />
      </JumplistNode>
      <JumplistNode nodeID="5">
        <div
          id="5"
          style={{
            height: '75vh',
            width: '100%',
            backgroundColor: 'tan'
          }}
        />
      </JumplistNode>
    </Fragment>
  )
};
