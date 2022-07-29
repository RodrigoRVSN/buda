class Queue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = -1
        self.rear = -1
        self.size = 0

    def enqueue(self, data):
        if self.size >= self.capacity:
            print("Queue error: Overflow (queue is full)")
            return
        
        else:
            if self.front == -1:
                self.front = 0
                self.rear = 0
            
            # if the last element is in the last indice, the new indice should be 0 (first index)
            # we could use too (rear + 1) % capacity
            elif self.rear == self.capacity-1:
                self.rear = 0
                
            # if not, increment the position of the self.rear
            else:
                self.rear = self.rear + 1
                
            # insert the data in the new index position of the queue
            self.queue[self.rear] = data
            
            self.size += 1

    def dequeue(self):
        if self.size == 0:
            print("Queue error: Underflow (empty queue)")
            return None
        
        else:
            # store the first element
            temp = self.queue[self.front]
            
            # if the size is 1, reset the front and rear
            if self.size == 1:
                self.front = -1
                self.rear = -1
            
            # if not, increment the front position (go to next element)
            else:
                self.front = self.front + 1
            
            self.size -= 1
            return temp
    
    def getSize(self):
        return self.size

    def isEmpty(self):
        return self.size == 0

    def isFull(self):
        return self.size == self.capacity

    def getFront(self):
        if self.isEmpty():
            print("Queue error: Empty queue")
            return None
        return self.queue[self.front]
    
    def clear(self):
        # reset the values
        self.front = -1
        self.rear = -1
        self.size = 0
        
    def __str__(self):
        helperQueue = Queue(self.capacity)
        
        # remove values of the original queue and push to the helper
        for i in range( self.size ):
            helperQueue.enqueue( self.dequeue() )
            
        # write in the helperString, unqueuing the helperQueue to store in the original queue again
        helperString = '['
        for i in range( helperQueue.size ):
            front = helperQueue.dequeue()
            self.enqueue(front)
            helperString += ' ' + str(front)
            
        helperString += ' ]'
        
        return helperString
            
            
#########################################################################

queue = Queue(10)
queue.enqueue(5)
print(queue)
queue.enqueue(3)
print(queue)
queue.enqueue(9)
print(queue)
print( 'Size: ', queue.getSize() )
valor = queue.dequeue()
print(queue)
valor = queue.dequeue()
print(queue)
print( 'Empty?: ', queue.isEmpty() )
valor = queue.dequeue()
print(queue)
print( 'Empty?: ', queue.isEmpty() )
valor = queue.dequeue()
print(queue)
queue.enqueue(2)
print(queue)
queue.enqueue(14)
print(queue)
print( 'Empty?: ', queue.isEmpty() )
queue.clear()
print( 'Empty after clear()?: ', queue.isEmpty() )