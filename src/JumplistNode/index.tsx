import React, { useEffect, useRef } from 'react';
import { useJumplist } from '../JumplistContext';
import useIntersection from './useIntersection';

export const JumplistNode: React.FC<{
  id?: string
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
    className,
    style,
    htmlElement = 'div',
    htmlAttributes,
    classPrefix,
    children
  } = props;

  const { syncJumplistItem } = useJumplist();

  const baseClass = `${classPrefix}__jumplist-node`;

  const Tag = htmlElement as React.ElementType;

  const nodeRef = useRef(null);
  const { isIntersecting } = useIntersection(nodeRef);

  useEffect(() => {
    syncJumplistItem({
      id,
      isIntersecting
    })
  }, [
    isIntersecting,
    syncJumplistItem,
    id
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
