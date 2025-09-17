/**
 * Maximum Subarray Problem (Kadane's Algorithm)
 * Find the contiguous subarray with the largest sum.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param nums - Array of integers
 * @returns Object containing max sum and the subarray indices
 */
export interface MaxSubarrayResult {
  maxSum: number;
  startIndex: number;
  endIndex: number;
  subarray: number[];
}

export function maxSubarray(nums: number[]): MaxSubarrayResult {
  if (nums.length === 0) {
    return { maxSum: 0, startIndex: -1, endIndex: -1, subarray: [] };
  }

  let maxSum = nums[0];
  let currentSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStartIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] > nums[i]) {
      currentSum += nums[i];
    } else {
      currentSum = nums[i];
      tempStartIndex = i;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIndex = tempStartIndex;
      endIndex = i;
    }
  }

  const subarray = nums.slice(startIndex, endIndex + 1);
  
  return {
    maxSum,
    startIndex,
    endIndex,
    subarray
  };
}

/**
 * Simplified version that only returns the maximum sum
 * 
 * @param nums - Array of integers
 * @returns Maximum sum of contiguous subarray
 */
export function maxSubarraySum(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
