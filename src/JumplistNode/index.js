import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withNodePosition } from '@trbl/react-node-position';
import withJumplistContext from '../withJumplistContext';

const JumplistNode = forwardRef((props, ref) => {
  const {
    classPrefix,
    id,
    className,
    style,
    htmlElement: HtmlElement,
    htmlAttributes,
    children,
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

  const classes = [
    baseClass,
    className,
    htmlAttributes.className,
  ].filter(Boolean).join(' ');

  const strippedHtmlAttributes = { ...htmlAttributes };
  delete strippedHtmlAttributes.id;
  delete strippedHtmlAttributes.className;
  delete strippedHtmlAttributes.style;

  return (
    <HtmlElement
      id={id || htmlAttributes.id}
      ref={ref}
      className={classes}
      style={{
        ...htmlAttributes.style,
        ...style,
      }}
      {...strippedHtmlAttributes}
    >
      {children}
    </HtmlElement>
  );
});

JumplistNode.defaultProps = {
  classPrefix: '',
  id: '',
  className: '',
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
};

JumplistNode.propTypes = {
  classPrefix: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.oneOf([
    'article',
    'aside',
    'div',
    'footer',
    'header',
    'main',
    'nav',
    'section',
    'span',
    'ul',
    'li',
  ]),
  htmlAttributes: PropTypes.shape({
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  }),
  children: PropTypes.node.isRequired,
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
};

export default withJumplistContext(withNodePosition(JumplistNode));
