class Stack:
  def __init__ (self, stackSize):
    self.top = -1
    self.size = stackSize
    self.stack = [None] * stackSize
  
  # Increments the size of itens inside the stack pre-sized and insert the value on new top with position incremented
  def push(self, value):
    self.top += 1
    self.stack[self.top] = value

  # Remove the item on the top of the stack 
  def pop(self):
    if(self.isEmpty()):
      print('Stack error: stack is empty!')
      return
    helper = self.stack[self.top]
    self.top -= 1
    return helper

  # If the top index is equal the size of the stack, is full
  def isFull(self):
    return self.top + 1 == self.size

  # Empty if the top is -1
  def isEmpty(self):
    return self.top == -1

  # Peek the element on top
  def top(self):
    return self.stack[self.top]

  # Get the stack size (plus 1 because of the -1 initial value)
  def stackSize(self):
    return str(self.top + 1)
  
  # Clone the stack, removing the values (pop) and pushing back to print
  def __str__(self):
    cloneStack = Stack(self.size)

    while not self.isEmpty():
      value = self.pop()
      cloneStack.push(value)

    helper = '['
    while not cloneStack.isEmpty():
      cloneValue = cloneStack.pop()
      self.push(cloneValue)
      helper +=  ' ' + str(cloneValue)
    helper += ' ]'

    return helper

stack = Stack(2)
print(stack.isEmpty())
stack.push(5)
stack.push(2)
print(stack.isEmpty())
print(stack.stackSize())
print(stack.isFull())
print(stack)
stack.pop()
print(stack)