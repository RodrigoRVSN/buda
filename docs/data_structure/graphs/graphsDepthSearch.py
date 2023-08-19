################################## Vertex ######################################

class Vertex:
  def __init__(self, data = None):
    self.data = data
    self.adjacentsList = []
    self.visited = False
  
  def addAdjacents(self, adjacent):
    self.adjacentsList.append(adjacent)
  
  def getAdjacents(self):
    info = ''
    for item in self.adjacentsList:
      info += str(item.data) + ' '
    return info

################################## Graph ######################################

class Graph:
  def __init__(self, directed = False):
    self.directed = directed
    self.vertexList = []

  def addVertex(self, data):
    vertex = Vertex(data)
    self.vertexList.append(vertex)
  
  def addEdge(self, origin, destiny):
    indexOrigin = -1
    indexDestiny = -1

    # Get the index of the origin and destiny vertex 
    for index, vertex in enumerate(self.vertexList):
      if (origin == vertex.data):
        indexOrigin = index
      if (destiny == vertex.data):
        indexDestiny = index

    # Get the destiny vertex by the index of destiny in the vertex list
    destinyVertex = self.vertexList[indexDestiny]
    # Append the destiny vertex in the adjacents list in the origin index
    destinyVertex.addAdjacents(self.vertexList[indexOrigin])

    # If the graph is not directed, the destiny will point to origin too 
    if (self.directed == False):
      originVertex = self.vertexList[indexOrigin]
      originVertex.addAdjacents(self.vertexList[indexDestiny])

  def __str__(self):
    info = '\nAdjacency List:\n'

    for index, vertex in enumerate(self.vertexList):
      info += '\n' + str(vertex.data) + ': ' + vertex.getAdjacents()

    return info

###############################################################################

graph = Graph()  

# add the vertex
graph.addVertex(6)
graph.addVertex(5)
graph.addVertex(4)
graph.addVertex(3)
graph.addVertex(2)
graph.addVertex(1)

# add the edges
graph.addEdge(6,4)
graph.addEdge(4,3)
graph.addEdge(3,2)
graph.addEdge(2,1)
graph.addEdge(1,5)
graph.addEdge(5,4)
graph.addEdge(5,2)

print(graph)

################################## Stack ######################################

class Node:
  def __init__(self, data = None, next = None):
    self.data = data
    self.next = next

class Stack:
  def __init__(self):
    self.head = None
    self.size = 0

  def push(self, value):
    node = Node(value)

    if self.head == None:
      self.head = node
    
    else:
      node.next = self.head
      self.head = node

    self.size += 1
  
  def pop(self):
    if self.isEmpty(): 
      raise Exception('Underflow Error: Stack is empty!')
    
    helperData = self.head.data
    self.head = self.head.next
    self.size -= 1

    return helperData
  
  def __str__(self):
    stringHelper = '\nStack values: '
    nodeHelper = Stack()

    while not self.isEmpty():
      nodeHelper.push(self.pop())
      stringHelper += ' ' + str(nodeHelper.head.data)
    
    while not nodeHelper.isEmpty():
      self.push(nodeHelper.pop())

    return stringHelper    

  def isEmpty(self):
    return self.size == 0
  
  def getTop(self):
    return self.head.data

###############################################################################

stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(5)
print(stack)

stack.pop()
print(stack)

############################### Depth Search ###################################

class DepthSearch:
  def __init__(self, start):
    self.start = start
    self.start.visited = True
    self.stack = Stack()
    self.stack.push(start)

  def search(self):
    top = self.stack.getTop()
    print('\nThe element in top is: {}'.format(top.data))

    for adjacent in top.adjacentsList:
      print('Top is {}. {} has being visited? {}'.format(top.data, adjacent.data, '✅' if adjacent.visited else '❌'))
      
      if adjacent.visited == False:
        adjacent.visited = True
        self.stack.push(adjacent)
        print('[PUSH] -> {} has being pushed!'.format(adjacent.data))
        self.search()

    print('[POP] -> {} has being popped!'.format(self.stack.pop().data))
      

###############################################################################

depthSearch = DepthSearch(graph.vertexList[0])
depthSearch.search()