# random-uuid

> Generate a random uuid.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-uuid/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-uuid/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-uuid)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-uuid/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-uuid)


## Install

```
$ npm install --save random-uuid 
```

## Usage

```js
var randomUuid = require('random-uuid');

// API
// - randomUuid([options]);

randomUuid();     
// => '0616f498-a5fe-4c10-b898-da3d1a22f11d' 

randomUuid({ prefix: 'r-' }); 
// => 'r-a4474ce4-f8c5-454c-82b6-8a206a7b4053'
```

## Related

- [random-identity](https://github.com/mock-end/random-identity) - Return a random ID.
- [random-dx](https://github.com/mock-end/random-dx) - Return a value equal to the roll of a die.
- [random-hexhash](https://github.com/mock-end/random-hexhash) - Return a random hex hash.
- [random-normal](https://github.com/mock-end/random-normal) - Return a normally-distributed random variate.
- [random-rpg](https://github.com/mock-end/random-rpg) - Return an array of dice values.
- [random-file](https://github.com/mock-end/random-file) - Return a random file name with random extension.
- [random-semver](https://github.com/mock-end/random-semver) - Return a random version.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-uuid/issues/new).
