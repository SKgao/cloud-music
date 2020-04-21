import { RankTypes } from '../api/data';

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
};

// 找出第一个没有歌名的索引
export const filterIndex = rankList => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};

// 找出排行榜的编号
export const filterIdx = name => {
  for (var key in RankTypes) {
    if (RankTypes[key] === name) return key;
  }
  return null;
}