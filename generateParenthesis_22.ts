/**
 * Problem: Generate Parentheses
 * ---------------------------------------------------
 * Given n pairs of parentheses, write a function to
 * generate all combinations of well-formed parentheses.
 *
 * Constraints:
 * - 1 <= n <= 8
 *
 * Example:
 * Input:  n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Input:  n = 1
 * Output: ["()"]
 */

function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    /**
     * Step 1: Use backtracking
     * - Keep track of how many open and close brackets we can still add
     * - Ensure at any point close <= open (to stay valid)
     */
    function backtrack(current: string, open: number, close: number): void {
        // Step 2: Base case - if string length == 2*n, add to result
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        // Step 3: Try to add "(" if possible
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Step 4: Try to add ")" if valid (close < open)
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    // Step 5: Start recursion
    backtrack("", 0, 0);

    return result;
}

/**
 * Example runs
 */
console.log(generateParenthesis(3)); 
// ["((()))","(()())","(())()","()(())","()()()"]

console.log(generateParenthesis(1)); 
// ["()"]

/**
 * Time Complexity:
 * - O(4^n / √n), based on Catalan numbers (number of valid parentheses strings).
 *
 * Space Complexity:
 * - O(2n) for recursion depth and result storage.
 */
