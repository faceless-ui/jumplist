import React, { HTMLProps, MouseEvent, useCallback, useEffect } from 'react';
import { JumplistNode, useJumplist } from '../JumplistProvider/context';

export interface JumplistButtonProps extends HTMLProps<HTMLElement> {
  htmlElement?: React.ElementType
  children?: React.ReactNode
  direction?: 'prev' | 'next'
  nodeID: string
  activeClassName?: string
}

export const JumplistButton: React.FC<JumplistButtonProps> = (props) => {
  const {
    htmlElement: Tag = 'button',
    children,
    nodeID,
    onClick,
    activeClassName,
    className,
    ...rest
  } = props;

  const {
    scrollToID,
    jumplist,
  } = useJumplist();

  const [nodeState, setNodeState] = React.useState<JumplistNode | undefined>(() => jumplist?.find((item) => item.nodeID === nodeID));

  useEffect(() => {
    setNodeState(jumplist?.find((item) => item.nodeID === nodeID));
  }, [
    jumplist,
    nodeID
  ]);

  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => {
    if (nodeID) {
      scrollToID(nodeID);
    }

    if (typeof onClick === 'function') {
      onClick(e);
    }
  }, [
    scrollToID,
    onClick,
    nodeID
  ]);

  return (
    <Tag
      id={nodeID ? `jumplist-button_${nodeID}` : undefined}
      type="button"
      aria-label={`Scroll to ${nodeID}`}
      className={[
        className,
        nodeState?.isIntersecting && activeClassName
      ].filter(Boolean).join(' ')}
      {...rest}
      onClick={handleClick}
    >
      {children && children}
    </Tag>
  );
};
