class Node():
  def __init__(self, value, next = None):
    self.value = value
    self.next = next

class Queue():
  def __init__(self, value = None):
    self.front = None
    self.rear = None
    self.size = 0

    if value is not None:
      self.enqueue(value)

  def isEmpty(self):
    return self.size == 0

  # add item in end of the queue
  def enqueue(self, value):
    nodeTemporary = Node(value)
    if self.front is None:
      self.front = nodeTemporary
      self.rear = nodeTemporary
    else:
      # changes address of old rear
      self.rear.next = nodeTemporary
      # changes the last element
      self.rear = nodeTemporary
    self.size += 1

  # remove the first element on the queue
  def dequeue(self):
    if self.isEmpty():
      print('ERROR: Queue empty')
      return
    # get the front value
    data = self.front.value
    # front value is now the next element in the queue
    self.front = self.front.next
    self.size -= 1
    return data

  def getFront(self):
    if self.isEmpty():
      print('ERROR: Queue empty')
      return None
    value = self.front.value
    return value

  def getSize(self):
    return self.size

  def clear(self):
    while not self.isEmpty():
      self.dequeue()

  def __str__(self):
    helperQueue = Queue()

    strQueue = ''
    while not self.isEmpty():
      value = self.dequeue()
      helperQueue.enqueue(value)
      strQueue += str(value) + ' '
      
    while not helperQueue.isEmpty():
      value = helperQueue.dequeue()
      self.enqueue(value)
      
    return strQueue

################################################################################

queue = Queue()

queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(7)

print(queue)
queue.dequeue()
print(queue)
queue.dequeue()
print(queue)

print('\nElement in the front of the queue: ', queue.getFront())
print('Queue size: ', queue.getSize())
print('Is empty: ', queue.isEmpty())

queue.dequeue()
print('\nIs empty: ', queue.isEmpty())
print('Element in the front of the queue: ', queue.getFront())

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print('\nQueue before clear(): ', queue)
queue.clear()
print('Queue after clear(): ', queue)
print('Is empty: ', queue.isEmpty())

      