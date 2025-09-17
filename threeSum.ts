/**
 * Problem: 3Sum
 * -----------------------------------------
 * Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]]
 * such that nums[i] + nums[j] + nums[k] == 0.
 * 
 * Constraints:
 * - Triplets must be unique (no duplicates).
 * 
 * Example:
 * Input:  nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 */

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];

    // Step 1: Sort the array to apply two-pointer technique
    const sortedNums = nums.sort((a, b) => a - b);

    // Step 2: Iterate through the array, fixing one element at a time
    for (let i = 0; i < sortedNums.length - 2; i++) {
        // Skip duplicates for the first element
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

        let left = i + 1;
        let right = sortedNums.length - 1;

        // Step 3: Use two-pointer approach to find pairs that sum with sortedNums[i] to 0
        while (left < right) {
            const sum = sortedNums[i]! + sortedNums[left]! + sortedNums[right]!;

            if (sum === 0) {
                // Found a valid triplet
                result.push([sortedNums[i]!, sortedNums[left]!, sortedNums[right]!]);

                // Step 4: Skip duplicates for left and right
                while (left < right && sortedNums[left] === sortedNums[left + 1]) left++;
                while (left < right && sortedNums[right] === sortedNums[right - 1]) right--;

                // Move both pointers after recording a valid triplet
                left++;
                right--;
            } else if (sum < 0) {
                // Need a larger number → move left pointer
                left++;
            } else {
                // sum > 0 → Need a smaller number → move right pointer
                right--;
            }
        }
    }

    return result;
}

/**
 * Example run
 */
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); 
// Output: [[-1, -1, 2], [-1, 0, 1]]

/**
 * Time Complexity:
 * - Sorting: O(n log n)
 * - Two-pointer search: O(n^2)
 * - Total: O(n^2)
 * 
 * Space Complexity:
 * - O(1) auxiliary (ignoring output)
 */