import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NodePositionProvider } from '@faceless-ui/node-position';
import JumplistContext from './context';
import defaultClassPrefix from '../defaultClassPrefix';

class JumplistProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: {},
    };
  }

  syncNode = (args) => {
    const {
      id,
      isVisible,
      totalOffsetLeft,
      totalOffsetTop,
    } = args;

    this.setState((currentState) => {
      const { nodes } = currentState;
      const withSyncedNode = {
        ...nodes,
        [id]: {
          isVisible,
          totalOffsetLeft,
          totalOffsetTop,
        },
      };

      return { nodes: withSyncedNode };
    });
  }

  removeNode = (id) => {
    this.setState((currentState) => {
      const { nodes } = currentState;
      const withRemovedNode = { ...nodes };
      delete withRemovedNode[id];

      return { nodes: withRemovedNode };
    });
  }

  render() {
    const {
      classPrefix,
      children,
    } = this.props;

    const { nodes } = this.state;

    return (
      <NodePositionProvider>
        <JumplistContext.Provider
          value={{
            classPrefix: classPrefix || defaultClassPrefix,
            nodes,
            syncNode: this.syncNode,
            removeNode: this.removeNode,
          }}
        >
          {children && children}
        </JumplistContext.Provider>
      </NodePositionProvider>
    );
  }
}

JumplistProvider.defaultProps = {
  classPrefix: '',
  children: undefined,
};

JumplistProvider.propTypes = {
  classPrefix: PropTypes.string,
  children: PropTypes.node,
};

export default JumplistProvider;
