class Vertex:
  def __init__(self, data = None):
    self.data = data

class Graph:
  def __init__(self, directed = False):
    self.directed = directed
    self.vertexList = []
    self.matrixList = []

  def addVertex(self, data):
    vertex = Vertex(data)
    self.vertexList.append(vertex)

    # add a column of zeros
    for index in range (len(self.vertexList) - 1):
      self.matrixList[index].append(0)

    # add a row of zeros
    row = [0] * len(self.vertexList)
    self.matrixList.append(row)
  
  def addEdge(self, origin, destiny):
    indexOrigin = -1
    indexDestiny = -1

    # Get the index of the origin and destiny vertex 
    for index, vertex in enumerate(self.vertexList):
      if (origin == vertex.data):
        indexOrigin = index
      if (destiny == vertex.data):
        indexDestiny = index

    # add in the matrix column and row index the value 1 (has value)
    self.matrixList[indexOrigin][indexDestiny] = 1

    # if is not directed, the destiny will point to the origin too
    if self.directed == False:
      self.matrixList[indexDestiny][indexOrigin] = 1

  def __str__(self):
    info = '\nMatrix List:\n\n\n'

    info += '    '
    for row, vertex in enumerate(self.vertexList):
      info += str(vertex.data) + ' '

    info += '\n   ' + len(self.vertexList) * '-' * 2
    for row, vertex in enumerate(self.vertexList):
      info += '\n' + str(vertex.data) + ' | '

      for column, vertexAdjacent in enumerate(self.vertexList):
        info += str(self.matrixList[row][column]) + ' '

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
    