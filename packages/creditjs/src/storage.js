import invariant from 'invariant';
import _Cookies from 'universal-cookie';

const cookies = new _Cookies();

export const Cookies = _Cookies;

export function setCookie(key, value, params = {}) {
  invariant(key && value, `[saveCookie] key && value should be defined`);

  cookies.set(
    key,
    value,
    Object.assign(
      {
        path: '/',
        secure: false,
      },
      params
    )
  );
}

export function getCookie(key) {
  invariant(key, `[getCookie] key should be defined`);

  return cookies.get(key);
}

export function removeCookie(key, params = {}) {
  invariant(key, `[removeCookie] key should be defined`);

  cookies.remove(
    key,
    Object.assign(
      {
        path: '/',
        secure: false,
      },
      params
    )
  );
}

export function setLocal(key, value) {
  invariant(key && value, `[saveLocal] key && value should be defined`);

  window.localStorage.setItem(key, value);
}

export function getLocal(key) {
  invariant(key, `[getLocal] key should be defined`);

  return window.localStorage.getItem(key);
}

export function removeLocal(key) {
  invariant(key, `[removeLocal] key should be defined`);

  window.localStorage.removeItem(key);
}

export function cutLocal(key) {
  invariant(key, `[cutLocal] key should be defined`);

  const v = getLocal(key);
  removeLocal(key);
  return v;
}

export function setSession(key, value) {
  invariant(key && value, `[saveSession] key && value should be defined`);

  window.sessionStorage.setItem(key, value);
}

export function getSession(key) {
  invariant(key, `[getSession] key should be defined`);

  return window.sessionStorage.getItem(key);
}

export function removeSession(key) {
  invariant(key, `[removeSession] key should be defined`);

  window.sessionStorage.removeItem(key);
}

export function cutSession(key) {
  invariant(key, `[cutSession] key should be defined`);

  const v = getSession(key);
  removeSession(key);
  return v;
}
