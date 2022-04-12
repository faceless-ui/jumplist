import React, { Fragment, useEffect } from 'react';
import { useJumplist } from '../../src/JumplistContext';

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
  }
]

export const JumplistDemo: React.FC = () => {
  const {
    resetJumplist,
  } = useJumplist();

  useEffect(() => {
    resetJumplist(initialJumplist)
  }, [resetJumplist])

  return (
    <Fragment>
      <div
        id="1"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'gray'
        }}
      >
        This is the first block
      </div>
      <div
        id="2"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'blue'
        }}
      >
        This is the second block
      </div>
      <div
        id="3"
        style={{
          height: '75vh',
          width: '100%',
          backgroundColor: 'pink'
        }}
      >
        This is the third block
      </div>
    </Fragment>
  )
};
