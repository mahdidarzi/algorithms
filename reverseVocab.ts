/**
 * Problem: Reverse Each Word in a Sentence
 * ---------------------------------------------------
 * Given a sentence (string), reverse the characters of each word
 * while keeping the word order the same.
 *
 * Constraints:
 * - 1 <= sentence.length <= 10^5
 * - sentence consists of printable ASCII characters and spaces
 *
 * Example:
 * Input:  "hello world"
 * Output: "olleh dlrow"
 * Explanation:
 * Each word is reversed individually, but word order is preserved.
 */

function reverseVocab(sentence: string): string {
    let tempSentence = '';
    let tempSentenceReverse = '';

    // Step 1: Traverse through each character in the sentence
    for (let index = 0; index < sentence.length; index++) {
        tempSentence += sentence[index];

        // Step 2: If we reach a space or the end of the sentence
        if (sentence[index] === ' ' || index === sentence.length - 1) {
            // Step 3: Reverse the collected word
            for (let j = tempSentence.length - 1; j >= 0; j--) {
                tempSentenceReverse += tempSentence[j];

                // When done, reset tempSentence
                if (j === 0) {
                    tempSentence = '';
                }
            }
        }
    }

    return tempSentenceReverse;
}

/**
 * Example run
 */
console.log(reverseVocab("hello world"));
// Output: "olleh dlrow"

/**
 * Time Complexity:
 * - O(n^2) in worst case, because for every word (size k)
 *   we loop k times again to reverse it → sum of k^2 ≤ O(n^2).
 * - A more optimal method using stack or two-pointer could achieve O(n).
 *
 * Space Complexity:
 * - O(1) auxiliary (ignoring output string).
 */
