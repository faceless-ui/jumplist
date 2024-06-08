import React, { Fragment } from 'react';
import { JumplistButton, useJumplist } from '@faceless-ui/jumplist';

const jumplistMenu = [
  {
    label: 'Section 1',
    nodeID: '1',
  },
  {
    label: 'Section 2',
    nodeID: '2',
  },
  {
    label: 'Section 3',
    nodeID: '3',
  },
  {
    label: 'Section 4',
    nodeID: '4',
  },
  {
    label: 'Section 5',
    nodeID: '5',
  },
];

export const Header = () => {
  const {
    jumplist,
    activeJumplistIndex,
    currentJumplistIndex
  } = useJumplist();

  const hasJumplist = Array.isArray(jumplist) && jumplist.length > 0;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        position: 'sticky',
        top: '0',
        width: '100%'
      }}
    >
      <div>
        <span>
          Jumplist
          &nbsp;
          &mdash;
          &nbsp;
          {`Active Index: ${activeJumplistIndex}, Current Index: ${currentJumplistIndex}`}
          &nbsp;
          &mdash;
          &nbsp;
        </span>
      </div>
      {hasJumplist && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {jumplistMenu.map((item, index) => {
            const {
              label
            } = item;

            const {
              nodeID,
              isIntersecting
            } = jumplist[index] || {};

            const isLast = index === jumplist.length - 1;

            return (
              <div key={index}>
                <a href={`#${nodeID}`}>
                  {`${label} ${isIntersecting ? 'isIntersecting ' : ''}`}
                </a>
                {!isLast && (
                  <Fragment>
                    &nbsp;
                  </Fragment>
                )}
              </div>
            )
          })}
        </div>
      )}
      <JumplistButton
        direction="prev"
        nodeID='1'
      >
        Prev
      </JumplistButton>
      <JumplistButton
        direction="next"
        nodeID='2'
      >
        Next
      </JumplistButton>
    </div>
  )
}
