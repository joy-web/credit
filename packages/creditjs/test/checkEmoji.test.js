import expect from 'expect';
import { regex, contains, replace } from '../src/emoji-regex';

describe('checkEmoji.test.js', () => {
  const str = '😃 这是😃 去除了😃 emoji 表情😃 的文字';

  it('check emoji re regex', () => {
    expect(regex.test(str)).toBe(true);
  });

  it('str contains emoji', () => {
    expect(contains(str)).toBe(true);
  });

  it('str should equal 这是 去除了 emoji 表情 的文字', () => {
    expect(replace(str)).toBe(' 这是 去除了 emoji 表情 的文字');
  });

  it('replace() should return null string', () => {
    expect(replace()).toBe('');
  });
});
