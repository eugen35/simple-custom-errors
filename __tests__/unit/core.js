import {expect} from 'chai';

it('CustomError',()=>{
  const err = new CustomError('Something is wrong', {a:1, b:'foo'});
  expect(err.message).to.equal('Something is wrong');
  expect(err.name).to.equal('CustomError');
  expect(err.a).to.equal(1);
  expect(err.b).to.equal('foo');
});
it('MyCustomError',()=>{
  //class MyCustomError extends CustomError {}
  const MyCustomError = CustomError.createNewCustomErrorType('MyCustomError');
  const err = new MyCustomError('Something is wrong', {a:1, b:'foo'});
  expect(err.message).to.equal('Something is wrong');
  expect(err.name).to.equal('MyCustomError');
  expect(err.a).to.equal(1);
  expect(err.b).to.equal('foo');
});