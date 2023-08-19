class Node:
  def __init__(self, data, next = None, previous = None):
    self.next = next
    self.previous = previous
    self.data = data

class List: 
  def __init__(self):
    self.size = 0
    self.front = None
    self.rear = None
  
  # insert a value in the list start
  def pushFront(self, data):
    tempNode = Node(data)

    if self.isEmpty():
      self.front = tempNode
      self.rear = self.front
      return self._incrementSize()
    
    tempNode.next = self.front
    self.front = tempNode 
    self.front.next.previous = tempNode
    self._incrementSize()

  # insert a value in the list end
  def pushRear(self, data):
    tempNode = Node(data)

    if self.isEmpty():
      self.front = tempNode
      self.rear = self.front
      return self._incrementSize()
    
    tempNode.previous = self.rear
    self.rear = tempNode
    self.rear.previous.next = tempNode
    self._incrementSize()

  # insert a value in a position
  def insert(self, data, position):
    if position == 0:
      return self.pushFront(data)
    
    if position > self.getSize() - 1:
      return self.pushRear(data)

    tempNode = Node(data)
    frontHelper = self.front

    for i in range(0, position):
      frontHelper = frontHelper.next

    tempNode.previous = frontHelper.previous
    tempNode.next = frontHelper
    frontHelper.previous.next = tempNode
    frontHelper.previous = tempNode
    self._incrementSize()

  # search the value
  def searchValue(self, value):
    rearHelper = self.rear

    if rearHelper.data == value:
      return '✅'

    while rearHelper.previous is not None:
      rearHelper = rearHelper.previous
      if rearHelper.data == value:
        return '✅'

    return '❌'

  # remove a value of the list
  def remove(self, value):
    frontHelper = self.front
    self._decrementSize()

    if frontHelper.data == value:
      self.front.next.previous = None
      self.front = self.front.next
      return 
      
    if self.rear.data == value:
      self.rear.previous.next = None
      self.rear = self.rear.previous
      return

    while frontHelper.data != value:
      frontHelper = frontHelper.next

    frontHelper.previous.next = frontHelper.next
    frontHelper.next.previous = frontHelper.previous

  def _incrementSize(self):
    self.size += 1

  def _decrementSize(self):
    self.size -= 1

  def isEmpty(self):
    return self.size == 0  
  
  def getSize(self):
    return self.size

  def __str__(self):
    stringHelper = '['
    frontHelper = self.front
    stringHelper += str(frontHelper.data)

    while frontHelper.next is not None:
      frontHelper = frontHelper.next
      stringHelper += ', ' + str(frontHelper.data)

    stringHelper += ']'
    return stringHelper

####################################################################

list = List()

list.pushFront(3)
list.pushFront(5)
list.pushFront(6)
list.pushRear(2)
list.pushRear(1)
list.pushFront(7)

list.insert(4, 3)

print('List: ', list)

print('\nList size: ', list.getSize())

print('\nThe value 1 was found? ', list.searchValue(1))
print('The value 2 was found? ', list.searchValue(2))
print('The value 3 was found? ', list.searchValue(3))
print('The value 4 was found? ', list.searchValue(4))
print('The value 7 was found? ', list.searchValue(7))
print('The value 12 was found? ', list.searchValue(12))

list.remove(6)
print('\nList after remove the number 6: ', list)
list.remove(7)
print('List after remove the number 7: ', list)
list.remove(1)
print('List after remove the number 1: ', list)

print('\nList size after remove: ', list.getSize())

print('\nThe value 7 was found after removed? ', list.searchValue(7))
print('The value 6 was found after removed? ', list.searchValue(6))
print('The value 1 was found after removed? ', list.searchValue(1))
