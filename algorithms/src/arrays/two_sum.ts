/**
 * Two Sum Problem
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param nums - Array of integers
 * @param target - Target sum to find
 * @returns Array of two indices [index1, index2] or empty array if no solution found
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

/**
 * Alternative implementation using a hash object (for environments without Map support)
 * 
 * @param nums - Array of integers
 * @param target - Target sum to find
 * @returns Array of two indices [index1, index2] or empty array if no solution found
 */
export function twoSumHash(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (complement in hash) {
      return [hash[complement], i];
    }
    
    hash[nums[i]] = i;
  }
  
  return [];
}
