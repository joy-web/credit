import expect from 'expect';
import {
  isPlainObject,
  isArray,
  isFunction,
  noop,
  returnSelf,
} from '../src/utils';

describe('checkUtils', () => {
  it('null should not be plain object', () => {
    expect(isPlainObject(null)).toEqual(false);
  });

  it('[] should be array', () => {
    expect(isArray([])).toEqual(true);
  });

  it('noop should be func', () => {
    expect(isFunction(noop)).toEqual(true);
  });

  it('returnSelf should return self', () => {
    const a = { a: 1, b: 2 };
    expect(returnSelf(a)).toStrictEqual(a);
  });
});
