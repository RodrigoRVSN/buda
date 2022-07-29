class Vertex:
    def __init__(self, data):
        self.data = data
        
class Graph:
    def __init__(self, directed = False):
        self.vertexList = []
        self.adjList = []
        self.directed = directed
        
    def addVertex(self, data, directed = False):
        tempVertex = Vertex(data)
        
        # add a vertex
        self.vertexList.append(tempVertex)
        
        # add a empty list of vertex adjacents
        vertexAdj = []
        self.adjList.append( vertexAdj )
        
    def addEdge(self, origin, destination):
        indexOrigin = -1
        indexDestiny = -1
        for index, vertex in enumerate(self.vertexList):
            if vertex.data == origin:
                indexOrigin = index
            if vertex.data == destination:
                indexDestiny = index  
        
        # aadd the destiny vertex to the original list of adjacents
        self.adjList[indexOrigin].append( indexDestiny )
        
        # if the graph is not directed, add the origin in the destiny
        if self.directed == False: 
            self.adjList[indexDestiny].append( indexOrigin )
            
    def depthFirstSearch(self, firstVertex = 0):
        stringDFS = ''
        
        white = 0
        gray = 1
        black = 2
        
        # mark all vertex as white, with as an array [0, 0, ...]
        color = [white] * len(self.vertexList)
        
        # explore by the first node wanted by the user
        stringDFS, color = self.exploreVertexDFS(firstVertex, color)
        
        stringDFS = '('+ stringDFS + ')'
            
        # visit the vertex
        for indexVertex in range(len(self.vertexList)):
            # if the item is white (not visited), make a search
            if color[indexVertex] == white:
                helperStringDFS, color = self.exploreVertexDFS(indexVertex, color)
                stringDFS += '('+ helperStringDFS + ')'
                
        return stringDFS
                
    def exploreVertexDFS(self, indexVertex, color = None):
        stringDFS = ''
        
        white = 0
        gray = 1
        black = 2
        
        # if has not a empty color list pint all as white
        if color is None:
            color = [white] * len( self.vertexList )
        
        # pint the actual vertex as gray
        color[indexVertex] = gray
        
        # the vertex was pinted gray, so he is the first element in the string
        stringDFS += str(self.vertexList[indexVertex].data) + ' '
        
        # go through all the vertex adjacents
        for indexAdj in self.adjList[indexVertex]:
            if color[indexAdj] == white:
                helperStringDFS, color = self.exploreVertexDFS( indexAdj,color )
                stringDFS += helperStringDFS
                
        # after go through all the elements, pint the vertex as black (visited)
        color[indexVertex] = black
        return stringDFS, color
    
    def breadthFirstSearch(self, firstVertex = 0):
        white = 0
    
        # visit the first node provided by the user
        stringBFS, color = self.exploreVertexBFS(firstVertex)
        
        stringBFS = '('+ stringBFS + ')'
        
        # verify if has nodes not visited
        for indexVertex in range(len(self.vertexList)):
            # if the item is white (not visited), make a search
            if color[indexVertex] == white:
                auxStrBFS, color = self.exploreVertexBFS(indexVertex, color)
                stringBFS += '(' + auxStrBFS + ')'
                
        return stringBFS
        
    def exploreVertexBFS(self, firstVertex = 0, color = None):
        stringBFS = ''
        
        white = 0
        gray = 1
        black = 2

        if color is None:
            color = [white] * len( self.vertexList )

        # mark the actual vertex as gray and keep in the stringBFS
        color[firstVertex] = gray
        stringBFS += str(self.vertexList[firstVertex].data) + ' '
        
        # create a queue to mark vertex not visited
        queue = []
        queue.append( firstVertex )

        while len(queue) > 0:
            indexVertex = queue[0]

            # go throught all the adjacents vertex
            for indexAdj in self.adjList[indexVertex]:
                if color[indexAdj] == white:
                    # mark the vertex as visited
                    color[indexAdj] = gray
                    queue.append(indexAdj)
                    
                    stringBFS += str(self.vertexList[indexAdj].data) + ' '
                    
            # remove the vertex of the queue because the elements was visited
            queue.pop(0)
            
        return stringBFS, color
        
        
            
    def __str__(self):
        info = '\nLista de adjacencia:\n' + 20 * '=' + '\n'
        for index, vertex in enumerate(self.vertexList):
            info += str(vertex.data) + ': ['

            for indexAdj in self.adjList[index]:
                data = self.vertexList[indexAdj].data
                info += str(data) + ' '
            
            info += ']\n'
            
        info += 20 * '=' + '\n'
        return info
            
        
        
############################################################################### 
        
        
if __name__ == "__main__":
    graph = Graph(directed=False)
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F') 
    graph.addVertex('G')
    graph.addVertex('H')
    graph.addEdge('B','F')
    graph.addEdge('B','A')    
    graph.addEdge('A','E')
    graph.addEdge('F','C')
    graph.addEdge('F','G')
    graph.addEdge('C','G')
    graph.addEdge('C','D')
    graph.addEdge('D','H')
    graph.addEdge('H','G')
    
    print(graph)
    print( 'BFS (breadth): ', graph.breadthFirstSearch(firstVertex = 1) )
    print( 'DFS (depth): ', graph.depthFirstSearch(firstVertex = 1) )
     
############################## SECOND GRAPH ###################################

    graph = Graph(directed = True)
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F') 
    graph.addEdge('A','C')    
    graph.addEdge('A','B')
    graph.addEdge('B','C')
    graph.addEdge('C','F')
    graph.addEdge('D','E')
    graph.addEdge('E','C')
    
    print()
    print(graph)
    print('BFS (breadth): ', graph.breadthFirstSearch() )
    print('DFS (depth): ', graph.depthFirstSearch() )
    