/* eslint-disable */
require('babel-polyfill');
var context = require.context('./', false, /test.js$/);
context.keys().forEach(context);
