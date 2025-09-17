/**
 * Problem: 19. Remove Nth Node From End of List
 * ---------------------------------------------------
 * Given the head of a linked list, remove the nth node 
 * from the end of the list and return its head.
 *
 * Constraints:
 * - The number of nodes in the list is sz.
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 *
 * Example:
 * Input:  head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * Explanation:
 * The 2nd node from the end (value = 4) is removed.
 */

// Definition for singly-linked list
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Step 1: Create a dummy node pointing to head
    const dummy = new ListNode(0, head);

    // Step 2: Use two pointers (fast & slow), both start at dummy
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;

    // Step 3: Move fast ahead by n+1 steps to maintain a gap
    for (let i = 0; i <= n; i++) {
        fast = fast!.next;
    }

    // Step 4: Move both pointers until fast reaches the end
    while (fast) {
        fast = fast.next;
        slow = slow!.next;
    }

    // Step 5: Delete the target node
    slow!.next = slow!.next!.next;

    // Step 6: Return the new head
    return dummy.next;
}

/**
 * Example run
 */
// Helper function to build linked list from array
function buildList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (const val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function listToArray(head: ListNode | null): number[] {
    let res: number[] = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

const head = buildList([1,2,3,4,5]);
const newHead = removeNthFromEnd(head, 2);
console.log(listToArray(newHead)); 
// Output: [1,2,3,5]

/**
 * Time Complexity:
 * - O(L), where L = length of the list (each node visited once).
 *
 * Space Complexity:
 * - O(1), no extra space apart from pointers.
 */
