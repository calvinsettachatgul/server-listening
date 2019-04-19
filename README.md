# server-listening
<img src=https://centerkey.com/graphics/center-key-logo.svg align=right width=200 alt=logo>

_Simple promise to wait for server ready inside a mocha specification_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/server-listening/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/server-listening.svg)](https://www.npmjs.com/package/server-listening)
[![Dependencies](https://david-dm.org/center-key/server-listening/status.svg)](https://david-dm.org/center-key/server-listening)
[![Vulnerabilities](https://snyk.io/test/github/center-key/server-listening/badge.svg)](https://snyk.io/test/github/center-key/server-listening)
[![Build](https://travis-ci.org/center-key/server-listening.svg)](https://travis-ci.org/center-key/server-listening)

**server-listening** is just a little helper utility to reduce the amount of boilerplate code needed to startup servers when running multiple mocha files.

## A) Setup
Install package:
```shell
$ npm install --save-dev server-listening
```
Import package:
```javascript
const serverListening = require('server-listening');
```

## B) Usage
```javascript
serverListening.setPort({ flush: require.resolve('../server') });
const server = require('../server');
before(() => serverListening.ready(server));
after(() =>  serverListening.close(server));
```

### C) Options
| Option  | Meaning                                                   | Default  |
| ------- | --------------------------------------------------------- | -------- |
| `port`  | Port number for server ('0' means choose an unused port). | `0`      |
| `name`  | Environment variable name to store port number.           | `'port'` |
| `flush` | Flush cache to get fresh server (use `require.resolve()`) | null     |

---
**server-listening** is open source under the [MIT License](LICENSE.txt).