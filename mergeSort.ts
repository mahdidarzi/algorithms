/**
 * Problem: Merge Sort
 * -----------------------------------------
 * Implement the Merge Sort algorithm to sort an array of integers
 * in ascending order.
 * 
 * Constraints:
 * - Input can contain positive and negative integers.
 * - Sorting should be stable (preserve the order of equal elements).
 * 
 * Example:
 * Input:  [3, -1, 0, -4, 2]
 * Output: [-4, -1, 0, 2, 3]
 */

/**
 * Helper function: Merge two sorted arrays into one sorted array.
 * This function is fully type-safe and does not assume any element is undefined.
 */
function merge(left: number[], right: number[]): number[] {
    console.log('                                                                           ');
    console.log('left in merge', left);
    console.log('right in merge', right);
    console.log('                                                                           ');

    const result: number[] = [];
    let i = 0, j = 0;

    // Step 1: Compare elements from left and right
    while (i < left.length && j < right.length) {
        if (left[i]! <= right[j]!) { // <= ensures stability
            result.push(left[i]!);
            i++;
            console.log('left is smaller result is', result);
            console.log('-----------------------------------------------------------------------------');
        } else {
            result.push(right[j]!);
            console.log('right is bigger result is', result);
            console.log('-----------------------------------------------------------------------------');
            j++;
        }
    }

    // Step 2: Add remaining elements safely
    if (i < left.length) {
        result.push(...left.slice(i));
        console.log('i < left.length', result);

    }
    if (j < right.length) {
        result.push(...right.slice(j));
        console.log('i < right.length', result);

    }

    return result;
}

/**
 * Main function: Merge Sort
 * Fully type-safe, does not mutate the original array.
 */
function mergeSort(arr: number[]): number[] {
    console.log('arr in mergeSort', arr);

    // Base case: arrays of length 0 or 1 are already sorted
    if (arr.length <= 1) return arr.slice(); // return a copy

    // Step 1: Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left: number[] = arr.slice(0, mid);
    const right: number[] = arr.slice(mid);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Step 3: Merge sorted halves
    return merge(sortedLeft, sortedRight);
}

/**
 * Example run
 */
const nums = [3, -1, 0, -4, 2];
// const nums = [3, -1, 0, -4, 2];
console.log('Original:', nums);
console.log('Sorted:  ', mergeSort(nums));
// Output: [-4, -1, 0, 2, 3]

/**
 * Time Complexity:
 * - Splitting: O(log n) levels
 * - Merging: O(n) work per level
 * - Total: O(n log n)
 * 
 * Space Complexity:
 * - O(n) auxiliary for temporary arrays
 * - Non-mutating: original array is not changed
 */
