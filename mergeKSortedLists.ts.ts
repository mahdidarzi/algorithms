/**
 * Problem: Merge k Sorted Lists
 * ---------------------------------------------------
 * You are given an array of k linked-lists, each of
 * which is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked
 * list and return it.
 *
 * Constraints:
 * - k == lists.length
 * - 0 <= k <= 10^4
 * - 0 <= lists[i].length <= 500
 * - -10^4 <= Node.val <= 10^4
 * - The total number of nodes across all lists is <= 10^4
 *
 * Example:
 * Input:  lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 *
 * Input:  lists = []
 * Output: []
 *
 * Input:  lists = [[]]
 * Output: []
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;

    /**
     * Step 1: Helper function to merge two sorted lists
     */
    function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const dummy = new ListNode(-1);
        let current = dummy;

        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        if (l1 !== null) current.next = l1;
        if (l2 !== null) current.next = l2;

        return dummy.next;
    }

    /**
     * Step 2: Merge lists using divide and conquer
     */
    function mergeRange(lists: Array<ListNode | null>, left: number, right: number): ListNode | null {
        if (left === right) return lists[left]!;
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const l1 = mergeRange(lists, left, mid);
        const l2 = mergeRange(lists, mid + 1, right);

        return mergeTwoLists(l1, l2);
    }

    return mergeRange(lists, 0, lists.length - 1);
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
console.log(listToArray(mergeKLists([
    arrayToList([1,4,5]),
    arrayToList([1,3,4]),
    arrayToList([2,6])
]))); // [1,1,2,3,4,4,5,6]

console.log(listToArray(mergeKLists([])));       // []
console.log(listToArray(mergeKLists([null])));   // []

/**
 * Time Complexity:
 * - O(N log k), where N is the total number of nodes
 *   and k is the number of lists.
 *   (Divide and conquer merges log k times).
 *
 * Space Complexity:
 * - O(log k) for recursion stack.
 */