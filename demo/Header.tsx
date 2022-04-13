import React, { Fragment } from 'react';
import { useJumplist } from '../src/JumplistContext';

export const Header = () => {
  const {
    jumplist,
  } = useJumplist();

  const hasJumplist = Array.isArray(jumplist) && jumplist.length > 0;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        position: 'sticky',
        top: '10px'
      }}
    >
      <div>
        Jumplist
        &nbsp;
        &mdash;
        &nbsp;
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
              id,
              isIntersecting
            } = item;

            const isLast = index === jumplist.length - 1;

            return (
              <div key={index}>
                <a href={`#${id}`}>
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
