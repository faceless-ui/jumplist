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
    currentJumplistIndex,
    setActiveJumplistIndex
  } = useJumplist();

  useEffect(() => {
    setJumplist(initialJumplist)
  }, [setJumplist])

  useEffect(() => {
    if (currentJumplistIndex === -1) {
      setActiveJumplistIndex(4);
    }
  }, [
    currentJumplistIndex,
    setActiveJumplistIndex
  ])

  return (
    <Fragment>
      <JumplistNode
        id="1"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'gray'
        }}
      >
        This is the first block
      </JumplistNode>
      <JumplistNode
        id="2"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'blue'
        }}
      >
        This is the second block
      </JumplistNode>
      <div style={{ height: '100vh' }} />
      <JumplistNode
        id="3"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'pink'
        }}
      >
        This is the third block
      </JumplistNode>
      <JumplistNode
        id="4"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'green'
        }}
      >
        This is the fourth block
      </JumplistNode>
      <JumplistNode
        id="5"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'tan'
        }}
      >
        This is the fifth block
      </JumplistNode>
    </Fragment>
  )
};
