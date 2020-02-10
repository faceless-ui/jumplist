import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import HTMLElement from '@trbl/react-html-element';
import JumplistContext from '../JumplistProvider/context';

const JumplistButton = (props) => {
  const jumplistContext = useContext(JumplistContext);
  const { classPrefix, nodes } = jumplistContext;

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

  return (
    <HTMLElement
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
    </HTMLElement>
  );
};

JumplistButton.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'button',
  htmlAttributes: {},
  targetID: '',
  xScrollOffset: 0,
  yScrollOffset: 0,
  children: undefined,
};

JumplistButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.string,
  htmlAttributes: PropTypes.shape({}),
  targetID: PropTypes.string,
  xScrollOffset: PropTypes.number,
  yScrollOffset: PropTypes.number,
  children: PropTypes.node,
};

export default JumplistButton;
