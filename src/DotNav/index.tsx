import React, { HTMLProps } from 'react';
import { useJumplist } from '../JumplistProvider/context';

export interface DotNavProps extends HTMLProps<HTMLElement> {
  htmlElement?: React.ElementType
  dotClassName?: string
  activeDotClassName?: string
  buttonProps?: HTMLProps<HTMLButtonElement>
}

export const DotNav: React.FC<DotNavProps> = (props) => {
  const {
    htmlElement: Tag = 'div',
    dotClassName,
    activeDotClassName,
    buttonProps = {},
    ...rest
  } = props;

  const {
    scrollToID,
    jumplist
  } = useJumplist();

  const dotsArray = Array.from(Array(jumplist.length || 0).keys());

  return (
    <Tag {...rest}>
      {dotsArray.map((dot, index) => {
        const {
          nodeID,
          isIntersecting
        } = jumplist[index];

        return (
          <button
            aria-label={`Scroll to node ${nodeID}`}
            key={index}
            {...buttonProps}
            onClick={(e) => {
              scrollToID(nodeID);
              if (typeof buttonProps?.onClick === 'function') {
                buttonProps.onClick(e);
              }
            }}
            className={[
              isIntersecting && activeDotClassName,
              dotClassName,
              buttonProps.className
            ].filter(Boolean).join(' ')}
            type="button"
          />
        )
      })}
    </Tag>
  );
};
