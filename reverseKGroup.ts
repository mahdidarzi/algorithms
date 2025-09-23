/**
 * Problem: Reverse Nodes in k-Group
 * ---------------------------------------------------
 * Given the head of a linked list, reverse the nodes
 * of the list k at a time, and return the modified list.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range [0, 5000].
 * - 0 <= Node.val <= 1000
 * - 1 <= k <= 5000
 * - You may not alter the values in the list’s nodes,
 *   only the nodes themselves may be changed.
 *
 * Example:
 * Input:  head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 *
 * Input:  head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null || k === 1) return head;

    // Step 1: Count total nodes
    let length = 0;
    let node: ListNode | null = head;
    while (node) {
        length++;
        node = node.next;
    }

    // Step 2: Use dummy to simplify handling head changes
    const dummy = new ListNode(0, head);
    let prevGroupEnd: ListNode = dummy;

    // Step 3: Process groups of size k
    while (length >= k) {
        let prev = null;
        let curr = prevGroupEnd.next;
        let next: ListNode | null = null;

        // Save the start of this group to connect later
        let groupStart = curr!;

        // Reverse k nodes
        for (let i = 0; i < k; i++) {
            next = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = next;
        }

        // Connect reversed group with previous and next parts
        prevGroupEnd.next = prev;
        groupStart.next = curr;

        // Move prevGroupEnd pointer forward
        prevGroupEnd = groupStart;

        length -= k;
    }

    return dummy.next;
}

/**
 * Example runs
 */
function arrayToList(arr: number[]): ListNode | null {
    const dummy = new ListNode();
    let curr = dummy;
    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
    const res: number[] = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

console.log(listToArray(reverseKGroup(arrayToList([1,2,3,4,5]), 2))); // [2,1,4,3,5]
console.log(listToArray(reverseKGroup(arrayToList([1,2,3,4,5]), 3))); // [3,2,1,4,5]

/**
 * Time Complexity:
 * - O(n), each node is visited and reversed once.
 *
 * Space Complexity:
 * - O(1), in-place reversal with pointers.
 */
