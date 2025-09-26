/**
 * Problem: Remove Element
 * ---------------------------------------------------
 * Given an integer array nums and an integer val, remove
 * all occurrences of val in-place. The order of the elements
 * may be changed. Then return the number of elements in nums
 * which are not equal to val.
 *
 * Constraints:
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 *
 * Example:
 * Input:  nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 *
 * Input:  nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,3,0,4,_,_,_]
 */

function removeElement(nums: number[], val: number): number {
    let k = 0; // pointer for next position of non-val element

    // Step 1: Traverse array
    for (let i = 0; i < nums.length; i++) {
        // Step 2: If nums[i] is not val, place it at nums[k]
        if (nums[i] !== val) {
            nums[k] = nums[i]!;
            k++;
        }
    }

    // Step 3: Return new length
    return k;
}

/**
 * Example runs
 */
let nums1 = [3,2,2,3];
console.log(removeElement(nums1, 3), nums1); // 2, [2,2,_,_]

let nums2 = [0,1,2,2,3,0,4,2];
console.log(removeElement(nums2, 2), nums2); // 5, [0,1,3,0,4,_,_,_]

/**
 * Time Complexity:
 * - O(n), each element is visited once.
 *
 * Space Complexity:
 * - O(1), in-place modification.
 */
