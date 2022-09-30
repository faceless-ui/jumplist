import React, { HTMLProps, MouseEvent, useCallback } from 'react';
import { useJumplist } from '../JumplistProvider/context';

export interface JumplistButtonProps extends HTMLProps<HTMLElement> {
  htmlElement?: React.ElementType
  children?: React.ReactNode
  direction?: 'prev' | 'next'
  nodeID?: string
}

export const JumplistButton: React.FC<JumplistButtonProps> = (props) => {
  const {
    htmlElement: Tag = 'button',
    children,
    direction,
    nodeID,
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

      if (!direction && nodeID !== undefined) {
        scrollToID(nodeID);
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
    activeJumplistIndex,
    nodeID
  ]);

  let ariaLabel = direction === 'prev' ? 'Scroll to previous item' : 'Scroll to next item';
  if (!direction && nodeID !== undefined) {
    ariaLabel = `Scroll to ${nodeID}`;
  }

  return (
    <Tag
      id={nodeID ? `jumplist-button_${nodeID}` : undefined}
      type="button"
      aria-label={ariaLabel}
      {...rest}
      onClick={handleClick}
    >
      {children && children}
    </Tag>
  );
};
