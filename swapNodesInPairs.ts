/**
 * Problem: Swap Nodes in Pairs
 * ---------------------------------------------------
 * Given a linked list, swap every two adjacent nodes 
 * and return its head. You must solve the problem 
 * without modifying the values in the list's nodes 
 * (i.e., only nodes themselves may be changed).
 *
 * Constraints:
 * - The number of nodes in the list is in the range [0, 100].
 * - 0 <= Node.val <= 100
 *
 * Example:
 * Input:  head = [1,2,3,4]
 * Output: [2,1,4,3]
 *
 * Input:  head = []
 * Output: []
 *
 * Input:  head = [1]
 * Output: [1]
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    // Step 1: Create a dummy node to simplify edge cases
    const dummy = new ListNode(-1, head);
    let prev = dummy;

    // Step 2: Traverse the list in pairs
    while (prev.next !== null && prev.next.next !== null) {
        // Identify the two nodes to swap
        const first = prev.next;
        const second = prev.next.next;

        // Step 3: Swap nodes
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Step 4: Move prev pointer two steps ahead
        prev = first;
    }

    // Step 5: Return the new head
    return dummy.next;
}

/**
 * Example runs
 */
// Helper: Convert array to linked list
function arrayToList(arr: number[]): ListNode | null {
    let dummy = new ListNode();
    let curr = dummy;
    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper: Convert linked list to array
function listToArray(head: ListNode | null): number[] {
    const res: number[] = [];
    while (head !== null) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

// Test cases
console.log(listToArray(swapPairs(arrayToList([1,2,3,4])))); // [2,1,4,3]
console.log(listToArray(swapPairs(arrayToList([]))));        // []
console.log(listToArray(swapPairs(arrayToList([1]))));       // [1]
console.log(listToArray(swapPairs(arrayToList([1,2,3]))));   // [2,1,3]

/**
 * Time Complexity:
 * - O(n), where n is the number of nodes in the list.
 *   Each node is visited once.
 *
 * Space Complexity:
 * - O(1), since we only use pointers.
 */
