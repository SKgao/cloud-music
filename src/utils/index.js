// 防抖函数
export const debounce = (fn, delay) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timer);
    }, delay);
  }
}