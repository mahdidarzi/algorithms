/**
 * Problem: Merge Two Sorted Lists
 * ---------------------------------------------------
 * You are given the heads of two sorted linked lists
 * list1 and list2. Merge the two lists into one
 * sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50].
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order.
 *
 * Example:
 * Input:  list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Input:  list1 = [], list2 = []
 * Output: []
 *
 * Input:  list1 = [], list2 = [0]
 * Output: [0]
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Step 1: Create a dummy node to build the merged list
    const dummy = new ListNode(-1);
    let current = dummy;

    // Step 2: Traverse both lists until one is exhausted
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Step 3: Append the remaining nodes of list1 or list2
    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;

    // Step 4: Return merged list (skip dummy)
    return dummy.next;
}

/**
 * Example runs
 */
// Helper to convert array to linked list
function arrayToList(arr: number[]): ListNode | null {
    let dummy = new ListNode();
    let curr = dummy;
    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper to convert linked list to array
function listToArray(head: ListNode | null): number[] {
    const res: number[] = [];
    while (head !== null) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

// Test cases
console.log(listToArray(mergeTwoLists(arrayToList([1,2,4]), arrayToList([1,3,4])))); // [1,1,2,3,4,4]
console.log(listToArray(mergeTwoLists(arrayToList([]), arrayToList([]))));           // []
console.log(listToArray(mergeTwoLists(arrayToList([]), arrayToList([0]))));          // [0]

/**
 * Time Complexity:
 * - O(m + n), where m and n are the lengths of list1 and list2.
 *   Each node is visited exactly once.
 *
 * Space Complexity:
 * - O(1), since we only use pointers (no extra data structures).
 */
