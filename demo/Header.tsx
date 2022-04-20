import React, { Fragment } from 'react';
import { useJumplist } from '../src/JumplistContext';

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
          {jumplist.map((item, index) => {
            const {
              label,
              nodeID,
              isIntersecting
            } = item;

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
    </div>
  )
}
