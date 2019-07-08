/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

const range = Math.pow(2, 31)
const max = range - 1
const min = -range
 
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  x = Number(x)
  if (x === 0) return 0
  
  const isNegative = x < 0
  let result = String(x).split('').reverse()
  if (isNegative) result.pop()
  result = Number(result.join(''))

  if (result > max || result < min) return 0
  return isNegative ? -result : result
};

