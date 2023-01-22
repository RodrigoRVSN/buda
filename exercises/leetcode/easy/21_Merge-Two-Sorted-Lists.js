// Runtime: 109 ms
// Memory: 44.3 MB

var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2

  if(!list2) return list1

  if(list1.val <= list2.val) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1
  }

  list2.next = mergeTwoLists(list1, list2.next)
  return list2
};