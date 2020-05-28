[![NPM](https://img.shields.io/npm/v/@faceless-ui/jumplist)](https://www.npmjs.com/@faceless-ui/jumplist)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@faceless-ui/jumplist?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Jumplist

## Highlights

## Quick Start

### Installation

```bash
$ npm i @faceless-ui/jumplist
$ # or
$ yarn add @faceless-ui/jumplist
```

### Composition

```jsx
  import React from 'react';
  import {
    JumplistProvider,
    JumplistButton,
    JumplistNode
  } from '@faceless-ui/jumplist';

  const App = () => (
    <JumplistProvider>
      <JumplistButton targetID="yourID">
        ...
      </JumplistButton>
      <JumplistNode id="yourID">
        ...
      </JumplistNode>
    </JumplistProvider>
  );

  export default App;
```

## Demo

```bash
$ git clone git@github.com:faceless-ui/jumplist.git
$ yarn
$ yarn dev
$ open http://localhost:3000
```

## API

  - [JumplistButton](./src/JumplistButton/README.md)
  - [JumplistNode](./src/JumplistNode/README.md)
  - [JumplistProvider](./src/JumplistProvider/README.md)

## Contribution

[Help us,](https://github.com/faceless-ui/.github/blob/master/CONTRIBUTING.md) or let us [help you help us](https://github.com/faceless-ui/.github/blob/master/SUPPORT.md).

## License

[MIT](https://github.com/faceless-ui/jumplist/blob/master/LICENSE) Copyright (c) TRBL, LLC
