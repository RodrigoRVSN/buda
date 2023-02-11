// Runtime 100 ms
// Memory 48.6 MB

// @ts-nocheck

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l1Sum = [l1.val]
    const l2Sum = [l2.val]

    while (l1.next) {
        l1 = l1.next
        l1Sum.push(l1.val)
    }

    while (l2.next) {
        l2 = l2.next
        l2Sum.push(l2.val)
    }

    const sum = BigInt(l1Sum.reverse().join('')) + BigInt(l2Sum.reverse().join(''))

    let List = new ListNode(0)
    let helper = List

    String(sum).split('').reverse().forEach(digit => {
        helper.next = new ListNode(Number(digit))
        helper = helper.next
    })

    return List.next
};