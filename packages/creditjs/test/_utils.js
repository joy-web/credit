/**
 * 测试工具
 * @returns {boolean}
 */

import { LocalStorage } from './localstorage';

global.localStorage = new LocalStorage(jest);
global.sessionStorage = new LocalStorage(jest);

// Can we get/set cookies on document.cookie?
export function hasDocumentCookie() {
  return typeof document === 'object' && typeof document.cookie === 'string';
}

// backwards compatibility
export const HAS_DOCUMENT_COOKIE = hasDocumentCookie();

// clean cookies
export function cleanCookies() {
  document.cookie.split(';').forEach(c => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
  });
}

// clean Storages
export function cleanStorages() {
  global.localStorage.clear();
  global.sessionStorage.clear();
}
