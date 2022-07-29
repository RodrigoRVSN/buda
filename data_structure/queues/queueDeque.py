class Node:
  def __init__(self, value, next = None):
    self.value = value
    self.next = next

class Queue:
  def __init__(self, value = None):
    self.front = None
    self.rear = None
    self.size = 0

    if value is not None:
      self.enqueue(value)

  def isEmpty(self):
    return self.size == 0

  # add item in front of the queue
  def enqueueFront(self, value):
    nodeTemporary = Node(value)
    
    if self.front is None:
      self.front = nodeTemporary
      self.rear = nodeTemporary

    else:
      # changes address of old front
      nodeTemporary.next = self.front
      # changes the first element
      self.front = nodeTemporary

    self.size += 1

  # add item in end of the queue
  def enqueueRear(self, value):
    nodeTemporary = Node(value)
    if self.size == 0:
      self.front = nodeTemporary
      self.rear = nodeTemporary

    else:
      # changes address of old rear
      self.rear.next = nodeTemporary
      # changes the last element
      self.rear = nodeTemporary

    self.size += 1

  # remove a element in the front
  def dequeueFront(self):
    if self.isEmpty():
      print('ERROR: Queue empty')
    else:
      nodeFront = self.front
      value = nodeFront.value
      # get the next value of the actual self.front
      self.front = nodeFront.next
      self.size -= 1
      del nodeFront
      return value

  # remove a element in the rear
  def dequeueRear(self):
    if self.isEmpty():
      print('ERROR: Queue empty')
    else:
      nodeRear = self.rear
      value = nodeRear.value
      helperFront = self.front

      # go through by the front until the next node is none to get the new rear
      while helperFront.next is not None:
        helperFront = helperFront.next

      self.rear = helperFront
      self.size -= 1
      del nodeRear
      return value

  def getFront(self):
    if self.isEmpty():
      print('ERROR: Queue empty')
      return None
    value = self.front.value
    return value

  def getRear(self):
    if self.isEmpty():
      print('ERROR: Queue empty')
      return None
    value = self.rear.value
    return value

  def getSize(self):
    return self.size

  def clear(self):
    while not self.isEmpty():
      self.dequeueFront()
      
  def __str__(self):
    helperQueue = Queue()

    strQueue = ''

    while not self.isEmpty():
      value = self.dequeueFront()
      helperQueue.enqueueRear(value)
      strQueue += str(value) + ' '
      
    while not helperQueue.isEmpty():
      value = helperQueue.dequeueFront()
      self.enqueueRear(value)
      
    return strQueue 

######################################################################

queue = Queue()
queue.enqueueRear(5)
queue.enqueueRear(2)
queue.enqueueRear(9)
queue.dequeueFront()
queue.enqueueFront(5)
queue.dequeueRear()
queue.dequeueRear()
queue.enqueueFront(3)
queue.enqueueFront(2)
queue.enqueueFront(1)
queue.enqueueFront(15)
queue.dequeueFront()
queue.dequeueRear()

print('Elements on the queue: ', queue)
print('Item on the front of the list: ', queue.getFront())
print('Item on the rear of the list: ', queue.getRear())
print('Size of the list: ', queue.getSize())

print('\n\n---------------- CLEAR ----------------\n\n')
queue.clear()
print('After clear: ', queue)
print('Item on the front of the list after clear: ', queue.getFront())
print('Item on the rear of the list after clear: ', queue.getRear())
print('Size of the list after clear: ', queue.getSize())
