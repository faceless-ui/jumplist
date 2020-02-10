import React, { Fragment } from 'react';
import { JumplistButton, JumplistNode } from '../src'; // swap '../src' for '../dist/build.bundle' to test production

const JumplistDemo = () => (
  <Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .demo__jumplist-button--target-is-visible::after {
            content: ' - is visible';
          }
        `,
      }}
    />
    <menu
      style={{
        padding: '0',
        position: 'fixed',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <JumplistButton targetID="whitesmoke">
        Whitesmoke
      </JumplistButton>
      <JumplistButton targetID="gainsboro">
        Gainsboro
      </JumplistButton>
      <JumplistButton targetID="silver">
        Silver
      </JumplistButton>
      <JumplistButton
        targetID="gray"
        yScrollOffset={-50}
      >
        Gray (with -50 yScrollOffset)
      </JumplistButton>
      <JumplistButton
        targetID="lightblue"
        xScrollOffset={-100}
      >
        Lightblue (with -100 xScrollOffset)
      </JumplistButton>
      <JumplistButton targetID="blue">
        Blue
      </JumplistButton>
    </menu>
    <div style={{ display: 'flex' }}>
      <div
        className="vertical-overflow"
        style={{
          width: '150vw', flexShrink: '0',
        }}
      >
        <div style={{ height: '10vh' }} />
        <JumplistNode
          id="whitesmoke"
          style={{
            height: '100vh',
            backgroundColor: 'whitesmoke',
            marginBottom: '10px',
          }}
        />
        <JumplistNode
          id="gainsboro"
          style={{
            height: '250px',
            backgroundColor: 'gainsboro',
            marginBottom: '10px',
          }}
        />
        <JumplistNode
          id="silver"
          style={{
            height: '1500px',
            backgroundColor: 'silver',
            marginBottom: '10px',
          }}
        />
        <JumplistNode
          id="gray"
          style={{
            height: '2000px',
            backgroundColor: 'gray',
          }}
        />
        <div style={{ height: '2000px' }} />
      </div>
      <div
        className="horizontal-overflow"
        style={{ flexShrink: '0' }}
      >
        <JumplistNode
          id="lightblue"
          style={{
            height: '1000px',
            width: '125vw',
            backgroundColor: 'lightblue',
            display: 'inline-block',
          }}
        />
        <JumplistNode
          id="blue"
          style={{
            height: '1000px',
            width: '500px',
            backgroundColor: 'blue',
            display: 'inline-block',
          }}
        />
        <div style={{ width: '2000px' }} />
      </div>
    </div>
  </Fragment>
);

export default JumplistDemo;
