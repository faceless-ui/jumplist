import React from 'react';
import JumplistContext from '../JumplistProvider/context';

const withJumplistContext = (PassedComponent) => {
  const JumplistContextWrap = (props) => {
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
  return JumplistContextWrap;
};

export default withJumplistContext;
