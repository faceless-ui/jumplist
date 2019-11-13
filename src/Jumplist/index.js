import React, { Component } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import defaultClassPrefix from '../JumplistProvider/defaultClassPrefix';
import withJumplistContext from '../withJumplistContext';

class Jumplist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNodes: [],
    };
  }

  componentDidMount() {
    this.setTargetNodeInfo();
  }

  componentDidUpdate(prevProps) {
    const {
      scrollPos,
      // windowInfo,
    } = this.props;

    if (prevProps.scrollPos.x !== scrollPos.x || prevProps.scrollPos.y !== scrollPos.y) {
      this.onScroll();
    }

    // if (prevProps.windowInfo.width !== windowInfo.width || prevProps.windowInfo.height !== windowInfo.height) {
    //   this.onResize();
    // }
  }

  scrollTo = (targetId) => {
    const { vOffset } = this.props;
    const { targetNodes } = this.state;
    const node = targetNodes.find(targetNode => targetNode.id === targetId);

    if (node) {
      const yCoord = node.offsetTop + (vOffset || 0);
      animateScrollTo(yCoord);
    }
  }

  onResize = () => {
    this.setTargetNodeInfo();
  }

  onScroll = () => {
    this.setTargetNodeInfo();
  }

  isNodeInFrame = (nodeRect) => {
    const {
      threshold,
      // windowInfo: {
      //   width: windowWidth,
      //   height: windowHeight,
      // },
    } = this.props;

    const { top, right, bottom, left } = nodeRect;

    const boundaries = {
      top: threshold || 0,
      right: threshold ? window.innerWidth - threshold : window.innerWidth,
      bottom: threshold ? window.innerHeight - threshold : window.innerHeight,
      left: threshold || 0,
    };

    return (top <= boundaries.bottom && bottom >= boundaries.top) && (right >= boundaries.left && left <= boundaries.right);
  }

  setTargetNodeInfo = () => {
    const { list } = this.props;
    const targetNodes = [];

    if (list && list.length > 0) {
      list.forEach((item) => {
        const { targetId } = item;
        const node = document.getElementById(targetId);
        if (node) {
          const nodeRect = node.getBoundingClientRect(); // clientRect because its relative to the vieport
          const isInFrame = this.isNodeInFrame(nodeRect);
          const offsetTop = nodeRect.top + window.scrollY;

          targetNodes.push({
            id: targetId,
            offsetTop,
            isInFrame,
          });
        }
      });
    }

    this.setState({ targetNodes });
  }

  render() {
    const {
      classPrefix,
      className,
      list,
      htmlElement: HtmlElement,
    } = this.props;

    const { targetNodes } = this.state;

    const baseClass = `${classPrefix || defaultClassPrefix}__jumplist`;

    const classes = [
      baseClass,
      className,
    ].filter(Boolean).join(' ');

    if (list && list.length > 0) {
      return (
        <HtmlElement className={classes}>
          {list.map((item, index) => {
            const { clickableNode, targetId } = item;
            const targetNode = targetNodes.find(node => node.id === targetId);
            const itemBaseClass = `${baseClass}__item`;

            const itemClasses = [
              itemBaseClass,
              targetNode && targetNode.isInFrame && `${itemBaseClass}--is-in-frame`,
            ].filter(Boolean).join(' ');

            return (
              React.cloneElement(
                clickableNode,
                {
                  key: index,
                  className: itemClasses,
                  onClick: () => this.scrollTo(targetId),
                },
              )
            );
          })}
        </HtmlElement>
      );
    }

    return null;
  }
}

Jumplist.defaultProps = {
  classPrefix: '',
  className: '',
  list: [],
  threshold: undefined,
  vOffset: 0,
  htmlElement: 'ul',
};

Jumplist.propTypes = {
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  scrollPos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  windowInfo: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      clickableNode: PropTypes.node.isRequired,
      targetId: PropTypes.string.isRequired,
    }),
  ),
  threshold: PropTypes.number,
  vOffset: PropTypes.number,
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
};

export default withJumplistContext(Jumplist);
