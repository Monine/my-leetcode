/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const splits = String(x).split('');
  const { length } = splits;
  const middle = Math.floor(length / 2);
  for (let i = 0; i < middle; i += 1) {
    if (splits[i] !== splits[length - i - 1]) {
      return false;
    }
  }
  return true;
};
