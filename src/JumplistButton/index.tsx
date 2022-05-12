import React, { HTMLProps, MouseEvent, useCallback } from 'react';
import { useJumplist } from '../JumplistContext';

export interface JumplistButtonProps extends HTMLProps<HTMLElement> {
  htmlElement?: React.ElementType
  children?: React.ReactNode
  direction?: 'prev' | 'next'
}

export const JumplistButton: React.FC<JumplistButtonProps> = (props) => {
  const {
    htmlElement: Tag = 'button',
    children,
    direction,
    onClick,
    ...rest
  } = props;

  const {
    scrollToID,
    jumplist,
    activeJumplistIndex,
  } = useJumplist();

  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => {
    if (activeJumplistIndex !== undefined) {
      if (direction === 'prev') {
        const prevItem = jumplist[activeJumplistIndex - 1];
        if (prevItem) {
          scrollToID(prevItem.nodeID);
        }
      }
      if (direction === 'next') {
        const nextItem = jumplist[activeJumplistIndex + 1];
        if (nextItem) {
          scrollToID(nextItem.nodeID);
        }
      }
    }

    if (typeof onClick === 'function') {
      onClick(e);
    }
  }, [
    direction,
    scrollToID,
    onClick,
    jumplist,
    activeJumplistIndex
  ]);

  return (
    <Tag
      type="button"
      {...rest}
      onClick={handleClick}
    >
      {children && children}
    </Tag>
  );
};
