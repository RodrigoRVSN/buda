class Vertex:
  def __init__(self, data = None):
    self.data = data

class Graph:
  def __init__(self, directed = False):
    self.directed = directed
    self.vertexList = []
    self.adjacentsList = []

  def addVertex(self, data):
    vertex = Vertex(data)
    self.vertexList.append(vertex)
    self.adjacentsList.append([])
  
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
    self.adjacentsList[indexOrigin].append(destinyVertex)

    # If the graph is not directed, the destiny will point to origin too 
    if (self.directed == False):
      originVertex = self.vertexList[indexOrigin]
      self.adjacentsList[indexDestiny].append(originVertex)

  def __str__(self):
    info = '\nAdjacents List:\n'

    for index, vertex in enumerate(self.vertexList):
      info += '\n' + str(vertex.data) + ': '

      listAdjacents = self.adjacentsList[index]
      for indexAdjacent, vertexAdjacent in enumerate(listAdjacents):
        info += str(vertexAdjacent.data) + ' '

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
    