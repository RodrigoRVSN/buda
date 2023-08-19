class Node:
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next
        
class Stack:
    def __init__(self, data  = None):
        self.head = None
        self.size = 0
        if data is not None:
            self.push(data)

    def push(self, data):
        if self.head is None:
            self.head = Node(data)
            
        else:
            # Create a new node with data param
            temp = Node(data, self.head)
            # change the actual node
            self.head = temp
        self.size += 1

    def pop(self):
        if self.head is None:
            print("Stack underflow: Empty stack")
            return None
        
        # save the element in top of the list to return
        data = self.head.data
        # head is now the next element on the stack
        self.head = self.head.next
        
        self.size -= 1
        return data
    
    def getSize(self):
        return self.size

    def isEmpty(self):
        return self.head is None

    def getTop(self):
        if self.head is None:
            print("Stack vazia")
            return None
        return self.head.data
            
    def clear(self):
        while not self.isEmpty():
            self.pop()
            
    def __str__(self):
        helperStack = Stack()
        
        # to print all elements, pop each element in a helper const
        while not self.isEmpty():
            data = self.pop()
            helperStack.push( data )
            
        strStack = '['
        # pop each element of helper stack to replace values in the main stack
        while not helperStack.isEmpty():
            top = helperStack.pop()
            
            self.push(top)
            
            strStack += ' ' + str(top)
            
        strStack += ' ]'
        
        return strStack    
        
###############################################################################

stack = Stack()
stack.push(5)
print(stack)
stack.push(3)
print(stack)
stack.push(9)
print(stack)
print( "Size before pop's: ", stack.getSize())
valor = stack.pop()
print(stack)
valor = stack.pop()
print(stack)
print( 'Empty?: ', stack.isEmpty() )
valor = stack.pop()
print(stack)
print( 'Empty?: ', stack.isEmpty() )
valor = stack.pop()
print(stack)
stack.push(2)
print(stack)
stack.push(14)
print(stack)
print( 'Empty?: ', stack.isEmpty() )
stack.clear()
print( 'Empty?: ', stack.isEmpty() )