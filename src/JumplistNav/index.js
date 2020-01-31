import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import HTMLElement from '@trbl/react-html-element';
import withJumplistContext from '../withJumplistContext';

const JumplistNav = (props) => {
  const {
    id,
    className,
    style,
    htmlElement,
    htmlAttributes,
    list,
    jumplistContext: {
      classPrefix,
      xScrollOffset,
      yScrollOffset,
      nodes,
    },
  } = props;

  const baseClass = `${classPrefix}__jumplist-nav`;

  const scrollTo = (targetNode) => {
    if (targetNode) {
      const { totalXOffset, totalYOffset } = targetNode;
      const xCoord = totalXOffset + (xScrollOffset || 0);
      const yCoord = totalYOffset + (yScrollOffset || 0);
      animateScrollTo([xCoord, yCoord]);
    }
  };

  const mergedClasses = [
    baseClass,
    className,
  ].filter(Boolean).join(' ');

  const strippedHtmlAttributes = { ...htmlAttributes };
  delete strippedHtmlAttributes.id;
  delete strippedHtmlAttributes.className;
  delete strippedHtmlAttributes.style;

  return (
    <HTMLElement
      {...{
        id,
        className: mergedClasses,
        style,
        htmlElement,
        htmlAttributes,
      }}
    >
      {list && list.length > 0 && list.map((item, index) => {
        const { clickableNode, targetID } = item;
        const targetNode = nodes[targetID];
        const itemBaseClass = `${baseClass}__item`;

        const itemClasses = [
          itemBaseClass,
          targetNode && targetNode.isInFrame && `${itemBaseClass}--is-in-frame`,
          clickableNode.props.className,
        ].filter(Boolean).join(' ');

        return (
          cloneElement(
            clickableNode,
            {
              key: index,
              className: itemClasses,
              onClick: () => scrollTo(targetNode),
            },
          )
        );
      })}
    </HTMLElement>
  );
};

JumplistNav.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'button',
  htmlAttributes: {},
  hScrollOffset: 0,
  vScrollOffset: 0,
  list: [],
  children: undefined,
};

JumplistNav.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({}),
  hScrollOffset: PropTypes.number,
  vScrollOffset: PropTypes.number,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      clickableNode: PropTypes.node.isRequired,
      targetID: PropTypes.string.isRequired,
    }),
  ),
  jumplistContext: PropTypes.shape({
    classPrefix: PropTypes.string,
    xScrollOffset: PropTypes.number,
    yScrollOffset: PropTypes.number,
    nodes: PropTypes.shape({
      isInFrame: PropTypes.bool,
      top: PropTypes.number,
    }),
  }).isRequired,
  children: PropTypes.node,
};

export default withJumplistContext(JumplistNav);
