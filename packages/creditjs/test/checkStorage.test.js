import expect from 'expect';
import {
  Cookies,
  setCookie,
  getCookie,
  removeCookie,
  setLocal,
  getLocal,
  cutLocal,
  removeLocal,
  setSession,
  getSession,
  cutSession,
  removeSession,
} from '../src/storage';
import { cleanCookies, cleanStorages } from './_utils';

describe('checkStorage.test.js', () => {
  beforeEach(() => {
    cleanCookies();
    cleanStorages();
  });

  describe('check cookie', () => {
    it('[saveCookie] need arguments:(key, value)', () => {
      expect(() => {
        setCookie();
      }).toThrowError('[saveCookie] key && value should be defined');
    });

    it('[saveCookie | getCookie] detect a cookie by key', () => {
      const test = 'test value';
      setCookie('test', test);
      expect(getCookie('test')).toBe(test);
    });

    it('[Cookies] read a cookie object', () => {
      const cookiesValues = { test: 'meow' };
      const cookies = new Cookies(cookiesValues);
      // we always call this in tests when ran from a context that
      // doesn't have document.cookie set properly
      cookies.HAS_DOCUMENT_COOKIE = false;
      expect(cookies.get('test')).toBe(cookiesValues.test);
    });

    it('[removeCookie] remove a cookie', () => {
      const cookiesValues = { test: 'meow' };
      setCookie('test', cookiesValues);
      expect(getCookie('test').test).toBe(cookiesValues.test);
      removeCookie('test');
      expect(getCookie('test')).toBeUndefined();
    });

    it('[saveLocal | getLocal | removeLocal] detect a localStorage item', () => {
      const localValues = { test: 'meow' };
      setLocal('test', JSON.stringify(localValues));
      expect(JSON.parse(getLocal('test'))).toStrictEqual(localValues);
      removeLocal('test');
      expect(getLocal('test')).toBeNull();
    });

    it('[cutLocal] should return value', () => {
      setLocal('test', 'meow');
      expect(cutLocal('test')).toBe('meow');
      expect(getLocal('test')).toBeNull();
    });

    it('[setSession | getSession | removeSession] detect a sessionStorage item', () => {
      const sessionValues = { test: 'meow' };
      setSession('test', JSON.stringify(sessionValues));
      expect(JSON.parse(getSession('test'))).toStrictEqual(sessionValues);
      removeSession('test');
      expect(getSession('test')).toBeNull();
    });

    it('[cutSession] should return value', () => {
      setSession('test', 'meow');
      expect(cutSession('test')).toBe('meow');
      expect(getSession('test')).toBeNull();
    });
  });
});
