/**
 * Problem: 17. Letter Combinations of a Phone Number
 * ---------------------------------------------------
 * Given a string containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number could represent.
 * The mapping of digit to letters is the same as on a telephone button.
 * 
 * Constraints:
 * - 0 <= digits.length <= 4
 * - digits[i] is a digit in the range ['2', '9'].
 * 
 * Example:
 * Input:  digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * Explanation:
 * '2' → ["a","b","c"], '3' → ["d","e","f"]
 * Combine them → 3 × 3 = 9 combinations.
 */

function letterCombinations(digits: string): string[] {
    // Step 1: Handle edge case → empty input
    if (!digits.length) return [];

    // Step 2: Mapping from digit → possible letters
    const phoneMap: Record<string, string[]> = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    const result: string[] = [];

    // Step 3: Backtracking function to build combinations
    function backtrack(index: number, path: string) {
        // Base case: if we've used all digits, push path to result
        if (index === digits.length) {
            result.push(path);
            return;
        }

        // Step 4: Iterate over possible letters for current digit
        const letters = phoneMap[digits[index]!]!;
        for (const letter of letters) {
            backtrack(index + 1, path + letter);
        }
    }

    // Step 5: Start recursion from index 0 with empty path
    backtrack(0, "");

    return result;
}

/**
 * Example run
 */
console.log(letterCombinations("23"));
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

/**
 * Time Complexity:
 * - Each digit expands into up to 4 letters
 * - Total combinations: O(4^n) where n = digits.length
 * 
 * Space Complexity:
 * - O(n) for recursion depth
 * - O(4^n) for storing results
 */
