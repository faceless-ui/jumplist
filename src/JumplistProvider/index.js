import React from 'react';
import PropTypes from 'prop-types';
import { WindowInfoProvider, WindowInfoContext } from '@trbl/react-window-info';
import { ScrollInfoProvider, ScrollInfoContext } from '@trbl/react-scroll-info';
import JumplistContext from './context';
import defaultClassPrefix from '../defaultClassPrefix';

const JumplistProvider = (props) => {
  const {
    children,
    classPrefix,
  } = props;

  return (
    <WindowInfoProvider>
      <WindowInfoContext.Consumer>
        {(windowInfoContext) => {
          const { windowInfo } = windowInfoContext;
          return (
            <ScrollInfoProvider>
              <ScrollInfoContext.Consumer>
                {(scrollInfoContext) => {
                  const { scrollInfo } = scrollInfoContext;
                  const jumplistContext = {
                    scrollInfo,
                    windowInfo,
                    classPrefix: classPrefix || defaultClassPrefix,
                  };
                  return (
                    <JumplistContext.Provider value={jumplistContext}>
                      {children}
                    </JumplistContext.Provider>
                  );
                }}
              </ScrollInfoContext.Consumer>
            </ScrollInfoProvider>
          );
        }}
      </WindowInfoContext.Consumer>
    </WindowInfoProvider>
  );
};

JumplistProvider.defaultProps = {
  classPrefix: '',
};

JumplistProvider.propTypes = {
  children: PropTypes.node.isRequired,
  classPrefix: PropTypes.string,
};

export default JumplistProvider;
