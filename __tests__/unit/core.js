import {expect} from 'chai';
import {createCustomErrorClass} from '../../src/core';

it('createCustomErrorClass',()=>{
  const CustomError = createCustomErrorClass('CustomError');
  const err = new CustomError('Something is wrong', {a:1, b:'foo'});
  expect(err.name).to.equal('CustomError');
  expect(err.message).to.equal('Something is wrong');
  expect(err.a).to.equal(1);
  expect(err.b).to.equal('foo');
});
