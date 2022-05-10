import React, { HTMLProps, useEffect, useRef } from 'react';
import { useJumplist } from '../JumplistContext';
import useIntersection from './useIntersection';

export interface JumplistNodeProps extends HTMLProps<HTMLElement> {
  nodeID: string
  htmlElement?: React.ElementType
  classPrefix?: string
  children: React.ReactNode
}

export const JumplistNode: React.FC<JumplistNodeProps> = (props) => {
  const {
    nodeID,
    htmlElement: Tag = 'div',
    classPrefix,
    children,
    className,
    ...rest
  } = props;

  const {
    syncJumplistItem,
    rootMargin,
    threshold
  } = useJumplist();

  const baseClass = `${classPrefix}__jumplist-node`;

  const nodeRef = useRef(null);
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

  return (
    <Tag
      {...{
        className: [
          baseClass,
          className,
        ].filter(Boolean).join(' '),
        ...rest,
        ref: nodeRef
      }}
    >
      {children && children}
    </Tag>
  );
}
