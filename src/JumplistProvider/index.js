import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NodePositionProvider } from '@trbl/react-node-position';
import JumplistContext from './context';
import defaultClassPrefix from '../defaultClassPrefix';

class JumplistProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: {},
    };
  }

  syncNode = (props) => {
    const {
      id,
      isInFrame,
      totalXOffset,
      totalYOffset,
    } = props;

    // The setState updater function is needed here (currentState),
    // so that batched setState calls spread the state accurately.
    this.setState((currentState) => {
      const { nodes } = currentState;
      const withSyncedNode = {
        ...nodes,
        [id]: {
          isInFrame,
          totalXOffset,
          totalYOffset,
        },
      };
      return { nodes: withSyncedNode };
    });
  }

  removeNode = (id) => {
    const { nodes } = this.state;
    const withRemovedNode = { ...nodes };
    delete withRemovedNode[id];

    this.setState({ nodes: withRemovedNode });
  }

  render() {
    const {
      classPrefix,
      frameOffset,
      xScrollOffset,
      yScrollOffset,
      children,
    } = this.props;

    const { nodes } = this.state;

    return (
      <NodePositionProvider frameOffset={frameOffset}>
        <JumplistContext.Provider
          value={{
            jumplistContext: {
              classPrefix: classPrefix || defaultClassPrefix,
              frameOffset,
              xScrollOffset,
              yScrollOffset,
              nodes,
              syncNode: this.syncNode,
              removeNode: this.removeNode,
            },
          }}
        >
          {children}
        </JumplistContext.Provider>
      </NodePositionProvider>
    );
  }
}

JumplistProvider.defaultProps = {
  classPrefix: '',
  frameOffset: 0,
  xScrollOffset: 0,
  yScrollOffset: 0,
};

JumplistProvider.propTypes = {
  classPrefix: PropTypes.string,
  frameOffset: PropTypes.number,
  xScrollOffset: PropTypes.number,
  yScrollOffset: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default JumplistProvider;
