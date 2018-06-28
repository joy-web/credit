import invariant from 'invariant';

export default function(url) {
  invariant(url, `[script-loader] url should be defined`);

  let count = 0;

  /*eslint-disable no-plusplus*/
  return function load(repeat = 10) {
    count++;

    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      const head = document.getElementsByTagName('head')[0];

      s.src = url;

      s.onerror = error => {
        console.error(`load script error. url:${url}.`, error);
        head.removeChild(s);

        if (count >= repeat) {
          reject(error);
        } else {
          setTimeout(() => load(repeat), 300);
        }
      };

      s.onload = () => {
        console.info(`load script success. url:${url}.`);
        resolve();
      };

      head.appendChild(s);
    });
  };
}
