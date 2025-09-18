/**
 * Problem: Valid Parentheses
 * ---------------------------------------------------
 * Given a string s containing just the characters 
 * '(', ')', '{', '}', '[' and ']', determine if the 
 * input string is valid.
 *
 * A string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only '()[]{}'
 *
 * Example:
 * Input:  s = "([{}])"
 * Output: true
 *
 * Input:  s = "(]"
 * Output: false
 */

function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    // Step 1: Traverse each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Step 2: If opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // Step 3: If closing bracket, check match
        else {
            if (stack.pop() !== map[char!]) {
                return false;
            }
        }
    }

    // Step 4: If stack is empty, it's valid
    return stack.length === 0;
}

/**
 * Example runs
 */
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true

/**
 * Time Complexity:
 * - O(n), where n = length of string s.
 *   Each character is pushed/popped at most once.
 *
 * Space Complexity:
 * - O(n), for the stack in the worst case (all open brackets).
 */
