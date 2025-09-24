/**
 * Problem: Remove Duplicates from Sorted Array
 * ---------------------------------------------------
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element
 * appears only once. The relative order of the elements should
 * be kept the same.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order.
 *
 * Example:
 * Input:  nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 *
 * Input:  nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    // Step 1: Use two pointers
    let k = 1; // unique elements count (start with first element always unique)

    // Step 2: Traverse array
    for (let i = 1; i < nums.length; i++) {
        // Step 3: If new unique found, overwrite position k
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]!;
            k++;
        }
    }

    // Step 4: Return count of unique elements
    return k;
}

/**
 * Example runs
 */
let nums1 = [1,1,2];
console.log(removeDuplicates(nums1), nums1); // 2, [1,2,_]

let nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2), nums2); // 5, [0,1,2,3,4,_,_,_,_,_]

/**
 * Time Complexity:
 * - O(n), where n = length of nums.
 *   Each element is checked once.
 *
 * Space Complexity:
 * - O(1), done in-place without extra space.
 */
