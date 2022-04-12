import React from 'react';

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
    htmlElement,
    htmlAttributes,
    classPrefix,
    children
  } = props;

  const baseClass = `${classPrefix}__jumplist-node`;

  const Tag = htmlElement as React.ElementType;

  // TODO: wire in the intersection observer API and sync this node's current intersection status

  return (
    <Tag
      {...{
        id,
        className: [
          baseClass,
          className,
        ].filter(Boolean).join(' '),
        style,
        htmlElement,
        htmlAttributes,
      }}
    >
      {children && children}
    </Tag>
  );
}
