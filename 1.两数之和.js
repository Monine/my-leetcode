/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const exist = {}
  const { length } = nums

  for (let i = 0; i < length; i += 1) {
    const diff = target - nums[i]
    if (typeof exist[diff] !== 'undefined') {
      return [exist[diff], i]
    }
    exist[nums[i]] = i
  }
  return []
};