import React from 'react';
import animateScrollTo from 'animated-scroll-to';
import { useJumplist } from '../JumplistContext';

export const JumplistButton: React.FC<{
  id?: string
  className?: string
  style?: React.CSSProperties
  htmlElement?: string
  htmlAttributes?: {
    [key: string]: string
  }
  targetID?: string
  xScrollOffset?: number
  yScrollOffset?: number
  children?: React.ReactNode
}> = (props) => {
  const {
    nodes,
    classPrefix
  } = useJumplist();

  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
    targetID,
    xScrollOffset,
    yScrollOffset,
    children,
  } = props;

  const baseClass = `${classPrefix}__jumplist-button`;
  const targetNode = nodes[targetID];

  const scrollTo = () => {
    if (targetNode) {
      const { totalOffsetLeft, totalOffsetTop } = targetNode;
      const xCoord = totalOffsetLeft + xScrollOffset;
      const yCoord = totalOffsetTop + yScrollOffset;
      animateScrollTo([xCoord, yCoord]);
    }
  };

  const mergedClasses = [
    baseClass,
    className,
    nodes[targetID]?.isVisible && `${baseClass}--target-is-visible`,
  ].filter(Boolean).join(' ');

  const Tag = htmlElement as React.ElementType;

  return (
    <Tag
      {...{
        id,
        className: mergedClasses,
        style,
        htmlElement,
        htmlAttributes: {
          ...htmlAttributes,
          onClick: scrollTo,
        },
      }}
    >
      {children && children}
    </Tag>
  );
};
