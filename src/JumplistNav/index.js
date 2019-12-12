import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import withJumplistContext from '../withJumplistContext';

const JumplistNav = (props) => {
  const {
    id,
    className,
    style,
    list,
    htmlElement: HtmlElement,
    htmlAttributes,
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
      className={classes}
      style={{
        ...htmlAttributes.style,
        ...style,
      }}
      {...strippedHtmlAttributes}
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
    </HtmlElement>
  );
};

JumplistNav.defaultProps = {
  id: '',
  className: '',
  style: undefined,
  hScrollOffset: 0,
  vScrollOffset: 0,
  htmlElement: 'ul',
  htmlAttributes: {},
  list: [],
};

JumplistNav.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  hScrollOffset: PropTypes.number,
  vScrollOffset: PropTypes.number,
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
};

export default withJumplistContext(JumplistNav);
