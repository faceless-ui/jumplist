import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { withNodePosition } from '@faceless-ui/node-position';
import HTMLElement from '@faceless-ui/html-element';
import JumplistContext from '../JumplistProvider/context';

class JumplistNode extends Component {
  componentDidUpdate(prevProps) {
    const {
      id,
      htmlAttributes,
      nodePosition: {
        isVisible,
        totalOffsetLeft,
        totalOffsetTop,
      },
    } = this.props;

    const { syncNode } = this.context;

    const visibilityChange = isVisible !== prevProps.nodePosition.isVisible;
    const offsetChange = totalOffsetLeft !== prevProps.nodePosition.totalOffsetLeft || totalOffsetTop !== prevProps.nodePosition.totalOffsetTop;

    if (visibilityChange || offsetChange) {
      syncNode({
        id: id || htmlAttributes.id,
        isVisible,
        totalOffsetLeft,
        totalOffsetTop,
      });
    }
  }

  componentWillUnmount() {
    const { id } = this.props;
    const { removeNode } = this.context;
    removeNode(id);
  }

  render() {
    const {
      id,
      className,
      style,
      htmlElement,
      htmlAttributes,
      classPrefix,
      incomingRef,
      children,
    } = this.props;

    const baseClass = `${classPrefix}__jumplist-node`;

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
          ref: incomingRef,
        }}
      >
        {children && children}
      </HTMLElement>
    );
  }
}

JumplistNode.contextType = JumplistContext;

JumplistNode.defaultProps = {
  className: undefined,
  style: {},
  htmlElement: 'div',
  htmlAttributes: {},
  classPrefix: '',
  children: undefined,
};

JumplistNode.propTypes = {
  id: PropTypes.string.isRequired,
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
    isVisible: PropTypes.bool,
    totalOffsetLeft: PropTypes.number,
    totalOffsetTop: PropTypes.number,
  }).isRequired,
  incomingRef: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
};

export default withNodePosition(
  forwardRef((props, ref) => (
    <JumplistNode
      incomingRef={ref}
      {...props}
    />
  )),
);
