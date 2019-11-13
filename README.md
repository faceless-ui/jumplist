[![NPM](https://img.shields.io/npm/v/@trbl/react-jumplist)](https://www.npmjs.com/@trbl/react-jumplist)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@trbl/react-jumplist?label=zipped)
[![Supported by TRBL](https://img.shields.io/badge/supported_by-TRBL-black)](https://github.com/trouble)

# React Jumplist

An omniscient jumplist for React projects.

## Quick Start

### Installation

```bash
$ yarn add @trbl/react-jumplist
```

### Compositon

```jsx
  <JumplistProvider>
    <Jumplist speed={0.3}>
      ...
    </Jumplist>
    <Jumplist speed={0.9}>
      ...
    </Jumplist>
  </JumplistProvider>
```

## Demo

To demo locally, clone the repo and

```bash
$ yarn install
$ npm run dev
$ open http://localhost:3000
```

## Documentation

All available props can be found via the references below:

  - [Jumplist](/src/Jumplist/README.md)
  - [JumplistProvider](/src/JumplistProvider/README.md)

## License

[MIT](https://github.com/trouble/react-jumplist/blob/master/LICENSE) Copyright (c) TRBL, LLC
