import React, { Fragment } from 'react';
import { DotNav, JumplistNode } from '@faceless-ui/jumplist';

export const JumplistDemo: React.FC = () => {
  return (
    <Fragment>
      <style>
        {`
          .dotNav {
            position: fixed;
            left: 10px;
            top: 50%;
            transform: translate3d(0, -50%, 0);
          }

          .dot {
            all: unset;
            width: 20px;
            height: 20px;
            background-color: gray;
            cursor: pointer;
            margin-bottom: 10px;
          }

          .activeDot {
            background-color: green;
          }
        `}
      </style>
      <DotNav
        className='dotNav'
        dotClassName='dot'
        activeDotClassName="activeDot"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      />
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
