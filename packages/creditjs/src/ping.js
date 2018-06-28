/**
 * 前端埋点统计
 * @param {String} pageName 页面
 * @param {Object} opts 参数
 */

export function webLog(pageName, opts = {}) {
  if (pageName === undefined) {
    console.log('[pageName] should not be undefined!');
    return false;
  }
  if (opts && typeof opts !== 'object') {
    console.log('[opts] should be Object!');
    return false;
  }

  try {
    window.MtaH5.clickStat(pageName, opts);
  } catch (err) {
    // 重试一次
    try {
      window.MtaH5.clickStat(pageName, opts);
    } catch (err2) {
      //
    }
  }

  try {
    window.MTK.clickStat(pageName, opts);
  } catch (err) {
    //重试一次
    try {
      window.MTK.clickStat(pageName, opts);
    } catch (err2) {
      //
    }
  }
}

/**
 * 补记pv
 */
export function webView() {
  /*eslint-disable no-unused-expressions*/
  try {
    typeof window.MtaH5 !== 'undefined' &&
      window.MtaH5.pgv &&
      window.MtaH5.pgv();
  } catch (e) {
    //
  }

  try {
    typeof window.MTK !== 'undefined' &&
      window.MTK.amendment &&
      window.MTK.amendment();
  } catch (e) {
    //
  }
}
