/**
 * Problem: 3Sum Closest
 * -----------------------------------------
 * Given an integer array nums and an integer target, 
 * find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * 
 * Constraints:
 * - Each input would have exactly one solution.
 * - Input array length >= 3
 * 
 * Example:
 * Input:  nums = [-1, 2, 1, -4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to 1 is 2 (-1 + 2 + 1 = 2).
 */

function threeSumClosest(nums: number[], target: number): number {
    // Step 1: Sort the array to apply two-pointer technique
    const sortedNums = nums.sort((a, b) => a - b);

    // Step 2: Initialize closest with the sum of the first 3 elements
    let closest = sortedNums[0]! + sortedNums[1]! + sortedNums[2]!;

    // Step 3: Iterate through the array, fixing one element at a time
    for (let i = 0; i < sortedNums.length - 2; i++) {
        let left = i + 1;
        let right = sortedNums.length - 1;

        // Step 4: Use two-pointer approach
        while (left < right) {
            const sum = sortedNums[i]! + sortedNums[left]! + sortedNums[right]!;

            // If this sum is closer to target, update closest
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum === target) {
                // Exact match found → closest possible
                return sum;
            } else if (sum < target) {
                // Need a larger number → move left pointer
                left++;
            } else {
                // sum > target → Need a smaller number → move right pointer
                right--;
            }
        }
    }

    return closest;
}

/**
 * Example run
 */
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); 
// Output: 2

/**
 * Time Complexity:
 * - Sorting: O(n log n)
 * - Two-pointer search: O(n^2)
 * - Total: O(n^2)
 * 
 * Space Complexity:
 * - O(1) auxiliary (ignoring output)
 */
