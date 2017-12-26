**simple-custom-errors**

# About
Create custom error types and instantinize custom errors.

# Tests
`npm run test` или `npm run test:watch` etc (see package.json)

# Get started

## Install
`npm i --save simple-custom-errors` or `yarn add simple-custom-errors`

## Use
```
import {createCustomErrorClass} from 'simple-custom-errors';

const CustomError = createCustomErrorClass('CustomError'); // Create new Error Type

const err = new CustomError('Something is wrong!', {a:1, b:'foo'});

console.log(err); // { CustomError: Something is wrong! name: 'CustomError', a: 1, b: 'foo' }
console.log(err.name); // 'CustomError'
console.log(err.message); // 'Something is wrong!'
console.log(err.a); // 1
console.log(err.b); // 'foo'
```
