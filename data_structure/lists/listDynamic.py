class Node:
    def __init__(self, data = None, next = None, previous = None):
      self.data = data
      self.next = next
      self.previous = previous

class List:
    def __init__(self):
      self.head = None
      self.tail = None
      self.size = 0

    # Insert in the head
    def pushHead(self, data):
      tempNode = Node(data)

      if self.head is None:
        self.head = tempNode
        self.tail = self.head

      else:
        # actual head previous is null and will be the temporary node
        self.head.previous = tempNode
        # next of the new node receives the actual head
        tempNode.next = self.head
        # new head receives tempNode after connections
        self.head = tempNode
      self.size += 1

    # Insert in the end of the list
    def pushTail(self, data):
      tempNode = Node(data)

      if self.head is None:
        self.head = tempNode
        self.tail = self.head
      
      else:
        # actual tail next is null and will be the temporary node
        self.tail.next = tempNode
        # previous of the new node receives the actual tail
        tempNode.previous = self.tail
        # new tail receives tempNode after connections
        self.tail = tempNode

      self.size += 1

    # Insert value in a X position
    def insert(self, data, position):
      tempNode = Node(data)
      helperHead = self.head
      
      for iterator in range(1, position):
        helperHead = helperHead.next
        
      tempNode.next = helperHead.next
      tempNode.previous = helperHead
      helperHead.next.previous  = tempNode
      helperHead.next  = tempNode
      self.size += 1

    # Return size of the list
    def getSize(self):
      return self.size

    # Return if the list is empty
    def isEmpty(self):
      return self.head is None

    # Remove the first value
    def removeHead(self):
      temp = self.head
      self.head = self.head.next
      self.size -= 1
      return temp

    # Remove the last value
    def removeTail(self):
      temp = self.tail
      # the next after the tail previous will be now None
      self.tail.previous.next = None
      # the new tail value will be her previous Node
      self.tail = self.tail.previous
      self.size -= 1
      return temp

    # Remove a value in a X position
    def remove(self, position):
      helperHead = self.head
      iterator = 1

      # find the position
      while (iterator <= position):
        helperHead = helperHead.next
        iterator += 1

      # if is the first element, just move to the next
      if position == 0:
        self.head = self.head.next
      # if is not the first element, change the next of the previous
      else:
        helperHead.previous.next = helperHead.next
      
      # if is the last element, just move to the previous
      if position == self.size - 1:
        self.tail = self.tail.previous
      # if is not the last element, change the previous of the next 
      else:
        helperHead.next.previous = helperHead.previous
      self.size -= 1

    # Search value in list
    def search(self, value):
      tempNode = self.head
      tempValue = tempNode.data

      if (tempValue == value):
        return 0

      index = 1
      # go throught each next element and return incremented index (position)
      while tempNode.next is not None:
        tempNode = tempNode.next
        tempValue = tempNode.data

        if tempValue == value:
          return index
        index += 1
      return -1

    # Print all values in list
    def __str__(self):
      items = ''
      nodeTemporary = self.head
      while nodeTemporary != None:
        items += str(nodeTemporary.data) + ' '
        nodeTemporary = nodeTemporary.next
      return items


####################################################################

list = List()

list.pushHead(2)
list.pushHead(1)
list.pushTail(3)
list.pushTail(5)
list.insert(4, 3)
print('List (insert): ' + str(list))
print('Search: ' + str(list.search(5)))

list.removeTail()
list.removeHead()
print('List (removeTail, removeHead): ' + str(list))

list.remove(2)
print('List (remove()): ' + str(list))

list.removeTail()
print('List (removeTail): ' + str(list))
