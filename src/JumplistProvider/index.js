import React from 'react';
import PropTypes from 'prop-types';
import { WindowInfoProvider, WindowInfoContext } from '@trbl/react-window-info';
import { ScrollPositionProvider, ScrollPositionContext } from '@trbl/react-scroll-position';
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
            <ScrollPositionProvider>
              <ScrollPositionContext.Consumer>
                {(scrollPositionContext) => {
                  const { scrollPos } = scrollPositionContext;
                  const jumplistContext = {
                    scrollPos,
                    windowInfo,
                    classPrefix: classPrefix || defaultClassPrefix,
                  };
                  return (
                    <JumplistContext.Provider value={jumplistContext}>
                      {children}
                    </JumplistContext.Provider>
                  );
                }}
              </ScrollPositionContext.Consumer>
            </ScrollPositionProvider>
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
