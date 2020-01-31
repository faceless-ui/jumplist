import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withNodePosition } from '@trbl/react-node-position';
import HTMLElement from '@trbl/react-html-element';
import withJumplistContext from '../withJumplistContext';

const JumplistNode = forwardRef((props, ref) => {
  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
    classPrefix,
    nodePosition: {
      nodeRect: {
        top: nodeTop,
        left: nodeLeft,
      },
      isInFrame,
      totalXOffset,
      totalYOffset,
    },
    jumplistContext: {
      syncNode,
      removeNode,
    },
    children,
  } = props;

  const baseClass = `${classPrefix}__jumplist-node`;

  useEffect(() => {
    syncNode({
      id: id || htmlAttributes.id,
      isInFrame,
      totalXOffset,
      totalYOffset,
    });
  }, [nodeTop, nodeLeft, syncNode, id, htmlAttributes.id, isInFrame, totalXOffset, totalYOffset]);

  useEffect(() => () => {
    removeNode(id || htmlAttributes.id);
  }, [htmlAttributes.id, id, removeNode]);

  const mergedClasses = [
    baseClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <HTMLElement
      {...{
        id,
        className: mergedClasses,
        style,
        htmlElement,
        htmlAttributes,
        ref,
      }}
    >
      {children && children}
    </HTMLElement>
  );
});

JumplistNode.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'button',
  htmlAttributes: {},
  classPrefix: '',
  children: undefined,
};

JumplistNode.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({
    id: PropTypes.string,
  }),
  classPrefix: PropTypes.string,
  nodePosition: PropTypes.shape({
    nodeRect: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }),
    isInFrame: PropTypes.bool,
    totalXOffset: PropTypes.number,
    totalYOffset: PropTypes.number,
  }).isRequired,
  jumplistContext: PropTypes.shape({
    syncNode: PropTypes.func,
    removeNode: PropTypes.func,
  }).isRequired,
  children: PropTypes.node,
};

export default withJumplistContext(withNodePosition(JumplistNode));
