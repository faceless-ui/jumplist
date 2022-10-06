import React, { Fragment } from 'react';
import { JumplistButton, useJumplist } from '../src';

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

  const prevNodeIndex = Math.max(0, (currentJumplistIndex || 0) - 1);
  const prevNodeID = jumplist?.[prevNodeIndex]?.nodeID;

  const nextNodeIndex = Math.min((activeJumplistIndex || 0) + 1, jumplist?.length - 1);
  const nextNodeID = jumplist?.[nextNodeIndex]?.nodeID;

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
        nodeID={prevNodeID}
      >
        Prev
      </JumplistButton>
      <JumplistButton
        direction="next"
        nodeID={nextNodeID}
      >
        Next
      </JumplistButton>
    </div>
  )
}
