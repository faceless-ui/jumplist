import React, { Fragment, useEffect } from 'react';
import { JumplistNode, useJumplist } from '../../src';

const initialJumplist = [
  {
    label: 'First Block',
    nodeID: '1'
  },
  {
    label: 'Second Block',
    nodeID: '2'
  },
  {
    label: 'Third Block',
    nodeID: '3'
  },
  {
    label: 'Fourth Block',
    nodeID: '4'
  }
]

export const JumplistDemo: React.FC = () => {
  const {
    setJumplist,
  } = useJumplist();

  useEffect(() => {
    setJumplist(initialJumplist)
  }, [setJumplist])

  // useEffect(() => {
  //   if (currentJumplistIndex === -1) {
  //     setActiveJumplistIndex(4);
  //   }
  // }, [
  //   currentJumplistIndex,
  //   setActiveJumplistIndex
  // ])

  return (
    <Fragment>
      <div style={{ height: '200px' }} />
      <JumplistNode
        nodeID="1"
      >
        <div
          id="1"
          style={{
            height: '200px',
            backgroundColor: 'gray'
          }}
        />
      </JumplistNode>
      <div style={{ height: '1000px' }} />
      <JumplistNode
        nodeID="2"
      >
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
      <JumplistNode
        nodeID="3"
      >
        <div
          id="3"
          style={{
            height: '75vh',
            width: '100%',
            backgroundColor: 'pink'
          }}
        />
      </JumplistNode>
      <JumplistNode
        nodeID="4"
      >
        <div
          id="4"
          style={{
            height: '500px',
            width: '100%',
            backgroundColor: 'green'
          }}
        />
      </JumplistNode>
      <JumplistNode
        nodeID="5"
      >
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
