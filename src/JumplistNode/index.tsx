import React, { HTMLProps, useEffect, useRef } from 'react';
import { useJumplist } from '../JumplistProvider/context.js';
import { useIntersection } from './useIntersection.js';

export interface JumplistNodeProps extends HTMLProps<HTMLElement> {
  nodeID: string
  htmlElement?: React.ElementType
  children: React.ReactNode
}

export const JumplistNode: React.FC<JumplistNodeProps> = (props) => {
  const {
    nodeID,
    htmlElement: Tag = 'div',
    children,
    ...rest
  } = props;

  const {
    syncJumplistItem,
    rootMargin,
    threshold,
    scrollTarget,
    clearScrollTarget
  } = useJumplist();

  const nodeRef = useRef<HTMLElement>(null);
  const { isIntersecting } = useIntersection(nodeRef, {
    rootMargin,
    threshold
  });

  useEffect(() => {
    syncJumplistItem({
      nodeID,
      isIntersecting
    })
  }, [
    isIntersecting,
    syncJumplistItem,
    nodeID
  ]);

  useEffect(() => {
    if (scrollTarget !== undefined && scrollTarget === nodeID) {
      const currentNode = nodeRef.current;
      if (currentNode) {
        currentNode.scrollIntoView();
        clearScrollTarget();
      }
    }
  }, [
    scrollTarget,
    nodeID,
    clearScrollTarget
  ])

  return (
    <Tag
      role="region"
      aria-labelledby={`jumplist-button_${nodeID}`}
      {...rest}
      ref={nodeRef}
    >
      {children && children}
    </Tag>
  );
}
