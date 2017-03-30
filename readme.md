# map-array

[![Greenkeeper badge](https://badges.greenkeeper.io/parro-it/map-array.svg)](https://greenkeeper.io/)

> Map object keys and values into an array

[![Travis Build Status](https://img.shields.io/travis/parro-it/map-array.svg)](http://travis-ci.org/parro-it/map-array)
[![NPM module](https://img.shields.io/npm/v/map-array.svg)](https://npmjs.org/package/map-array)
[![NPM downloads](https://img.shields.io/npm/dt/map-array.svg)](https://npmjs.org/package/map-array)

# Installation

```bash
npm install --save map-array
```

# Usage

```javascript
  const mapArray = require('map-array');
  const obj = {
    giorgio: 'Bianchi',
    gino: 'Rossi'
  };
  console.log(mapArray(obj, (key, value) => key + ' ' + value));

```
> ['giorgio Bianchi', 'gino Rossi']

# Related

* [map-obj](https://github.com/sindresorhus/map-obj) - Map object keys and values into a new object

# License

The MIT License (MIT)

Copyright (c) 2017 parro-it
