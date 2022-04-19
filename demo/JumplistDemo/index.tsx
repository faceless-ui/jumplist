import React, { Fragment, useEffect } from 'react';
import { useJumplist } from '../../src/JumplistContext';
import { JumplistNode } from '../../src/JumplistNode';

const initialJumplist = [
  {
    label: 'First Block',
    id: '1'
  },
  {
    label: 'Second Block',
    id: '2'
  },
  {
    label: 'Third Block',
    id: '3'
  },
  {
    label: 'Fourth Block',
    id: '4'
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
