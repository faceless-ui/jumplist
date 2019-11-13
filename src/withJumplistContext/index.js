import React from 'react';
import JumplistContext from '../JumplistProvider/context';

const withJumplistContext = (PassedComponent) => {
  const JumplistWrap = (props) => {
    return (
      <JumplistContext.Consumer>
        {(context) => {
          return (
            <PassedComponent
              {...{
                ...props,
                ...context,
              }}
            />
          );
        }}
      </JumplistContext.Consumer>
    );
  };
  return JumplistWrap;
};

export default withJumplistContext;
