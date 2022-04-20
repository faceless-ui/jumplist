import React, { useEffect, useRef } from 'react';
import { useJumplist } from '../JumplistContext';
import useIntersection from './useIntersection';

export const JumplistNode: React.FC<{
  id?: string
  nodeID: string
  className?: string
  style?: React.CSSProperties
  htmlElement?: React.ElementType
  htmlAttributes?: {
    [key: string]: string
  }
  classPrefix?: string
  children: React.ReactNode
}> = (props) => {
  const {
    id,
    nodeID,
    className,
    style,
    htmlElement = 'div',
    htmlAttributes,
    classPrefix,
    children
  } = props;

  const {
    syncJumplistItem,
    rootMargin,
    threshold
  } = useJumplist();

  const baseClass = `${classPrefix}__jumplist-node`;

  const Tag = htmlElement as React.ElementType;

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
        id,
        className: [
          baseClass,
          className,
        ].filter(Boolean).join(' '),
        style,
        ...htmlAttributes,
        ref: nodeRef
      }}
    >
      {children && children}
    </Tag>
  );
}
