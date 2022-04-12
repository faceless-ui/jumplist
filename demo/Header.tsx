import React from 'react';
import { useJumplist } from '../src/JumplistContext';

export const Header = () => {
  const {
    jumplist,
  } = useJumplist();

  const hasJumplist = Array.isArray(jumplist) && jumplist.length > 0;

  return (
    <div>
      <div>
        {'jumplist: '}
      </div>
      {hasJumplist && (
        jumplist.map((item, index) => {
          const {
            label,
            id
          } = item;

          return (
            <a
              href={`#${id}`}
              key={index}
            >
              {label}
            </a>
          )
        })
      )}
    </div>
  )
}
