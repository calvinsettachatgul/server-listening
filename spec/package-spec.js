// Mocha Specification Cases

// Imports
const assert = require('assert').strict;

// Package
const serverListening = require('../server-listening');

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The server-listening package', () => {

   it('is exported as an object', () => {
      const actual =   { type: typeof serverListening };
      const expected = { type: 'object' };
      assert.deepEqual(actual, expected);
      });

   it('contains the functions: setPort(), ready(), close()', () => {
      const names = ['setPort', 'ready', 'close'];
      const actual =   { functions: Object.keys(serverListening).sort() };
      const expected = { functions: names.sort() };
      assert.deepEqual(actual, expected);
      });

   it('functions are the correct type', () => {
      const actual =   { types: Object.values(serverListening).map(v => typeof v) };
      const expected = { types: ['function', 'function', 'function'] };
      assert.deepEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The setPort() function', () => {

   it('sets a specified environment variable to a specified port number', () => {
      serverListening.setPort({ port: 12345, name: 'mockPort'});
      const actual =   { port: process.env.mockPort };
      const expected = { port: '12345' };
      assert.deepEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The ready() function', () => {

   it('returns a promise when given a mock server', () => {
      const mockServer = { listening: true };
      const actual =   { promise: serverListening.ready(mockServer) instanceof Promise };
      const expected = { promise: true };
      assert.deepEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The close() function', () => {

   it('returns a promise when given a mock server', () => {
      const mockServer = { close: (callback) => callback() };
      const actual =   { promise: serverListening.close(mockServer) instanceof Promise };
      const expected = { promise: true };
      assert.deepEqual(actual, expected);
      });

   });
