/**
 * Palindrome Check
 * Check if a string is a palindrome (reads the same forwards and backwards).
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param str - String to check
 * @param caseSensitive - Whether to consider case (default: false)
 * @returns True if the string is a palindrome, false otherwise
 */
export function isPalindrome(str: string, caseSensitive: boolean = false): boolean {
  if (str.length <= 1) return true;
  
  const processedStr = caseSensitive ? str : str.toLowerCase();
  const cleanedStr = processedStr.replace(/[^a-zA-Z0-9]/g, '');
  
  let left = 0;
  let right = cleanedStr.length - 1;
  
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

/**
 * Check if a string is a palindrome using two-pointer approach
 * 
 * @param str - String to check
 * @returns True if the string is a palindrome, false otherwise
 */
export function isPalindromeTwoPointer(str: string): boolean {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}

/**
 * Check if a string is a palindrome using reverse comparison
 * 
 * @param str - String to check
 * @returns True if the string is a palindrome, false otherwise
 */
export function isPalindromeReverse(str: string): boolean {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
}

/**
 * Find the longest palindromic substring in a string
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param str - Input string
 * @returns Longest palindromic substring
 */
export function longestPalindrome(str: string): string {
  if (str.length <= 1) return str;
  
  let start = 0;
  let maxLength = 1;
  
  // Expand around center for odd length palindromes
  for (let i = 0; i < str.length; i++) {
    const len1 = expandAroundCenter(str, i, i);
    const len2 = expandAroundCenter(str, i, i + 1);
    const maxLen = Math.max(len1, len2);
    
    if (maxLen > maxLength) {
      maxLength = maxLen;
      start = i - Math.floor((maxLen - 1) / 2);
    }
  }
  
  return str.substring(start, start + maxLength);
}

function expandAroundCenter(str: string, left: number, right: number): number {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
