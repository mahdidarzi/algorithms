/**
 * Problem: 18. 4Sum
 * ---------------------------------------------------
 * Given an array nums of n integers, return all unique quadruplets [a,b,c,d]
 * such that:
 *    a + b + c + d == target
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Constraints:
 * - 1 <= nums.length <= 200
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * 
 * Example:
 * Input:  nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * Explanation:
 * These are the unique sets of 4 numbers that sum to 0.
 */

function fourSum(nums: number[], target: number): number[][] {
    // Step 1: Sort the array to simplify duplicate handling
    nums.sort((a, b) => a - b);

    const result: number[][] = [];
    const n = nums.length;

    // Step 2: Fix the first number
    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Step 3: Fix the second number
        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate values for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // Step 4: Use two pointers for the remaining two numbers
            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i]! + nums[j]! + nums[left]! + nums[right]!;

                if (sum === target) {
                    result.push([nums[i]!, nums[j]!, nums[left]!, nums[right]!]);

                    // Skip duplicates for the third number
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the fourth number
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;  // Need a larger sum
                } else {
                    right--; // Need a smaller sum
                }
            }
        }
    }

    return result;
}

/**
 * Example run
 */
console.log(fourSum([1,0,-1,0,-2,2], 0));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

/**
 * Time Complexity:
 * - Sorting: O(n log n)
 * - Double loop + two-pointer search: O(n^3)
 * - Total: O(n^3)
 * 
 * Space Complexity:
 * - O(1) auxiliary (ignoring output)
 */
