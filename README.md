[![NPM](https://img.shields.io/npm/v/@trbl/react-jumplist)](https://www.npmjs.com/@trbl/react-jumplist)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-jumplist?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Jumplist

Jump, and you will find out how to unfold your wings as you fall.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-jumplist
```

### Composition

```jsx
  import React from 'react';
  import { JumplistProvider, JumplistNav, JumplistNode } from '@trbl/react-jumplist';

  const App = () => {
    return (
      <JumplistProvider>
        <JumplistNav
          list={[
            {
              clickableNode: <p>...<p>,
              targetID: 'yourID',
            }
          ]}
        />
        <JumplistNode id="yourID">
          ...
        </JumplistNode>
      </JumplistProvider>
    )
  }

  export default App;
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [JumplistContext](/src/JumplistContext/README.md)
  - [JumplistNav](/src/JumplistNav/README.md)
  - [JumplistNode](/src/JumplistNode/README.md)
  - [JumplistProvider](/src/JumplistProvider/README.md)
  - [withJumplistContext](/src/withJumplistContext/README.md)

## Contribution

[Help us,](https://github.com/trouble/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/trouble/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/trouble/react-jumplist/blob/master/LICENSE) Copyright (c) TRBL, LLC
