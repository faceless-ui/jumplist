import React from 'react';
import JumplistContext from '../JumplistProvider/context';

const withJumplistContext = (PassedComponent) => {
  const JumplistContextWrap = (props) => (
    <JumplistContext.Consumer>
      {(context) => (
        <PassedComponent
          {...{
            ...props,
            ...context,
          }}
        />
      )}
    </JumplistContext.Consumer>
  );
  return JumplistContextWrap;
};

export default withJumplistContext;
