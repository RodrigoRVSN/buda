class Node:
  def __init__(self, data = None, left = None, right = None):
    self.data = data
    self.left = left
    self.right = right

class BinaryTree:
  def __init__(self):
    self.root = None

  def insert(self, value):
    if self.root is None:
      self.root = Node(value)
      return
    self._add(value, self.root)

  def _add(self, value, node):
    # if the value is bigger than node, insert in the right
    if value > node.data:
      if node.right is None:
        node.right = Node(value)
      # go throught right node if the right node is not None
      else:
        self._add(value, node.right)
      return
    
    # if the value is lower than node, insert in the left
    if node.left is None:
      node.left = Node(value)
    else:
      self._add(value, node.left)

  # print in root -> left -> right (hierarchy)        
  def strPreorder(self, node = -1, info = ''):
    if self.root is None:
      return ' '
            
    if node == -1:
      node = tree.root
            
    if node.data is not None:
                
      info += ' ' + str(node.data)
                
      if node.left is not None: 
        info += self.strPreorder(node.left)
                
      if node.right is not None:
        info += self.strPreorder(node.right)
                    
    return info

  # print in -> left -> root -> right (crescent)
  def strInorder(self, node = -1, info = ''):
    if self.root is None:
      return ' '
            
    if node == -1:
      node = tree.root
            
    if node.data is not None:
      
      if node.left is not None: 
        info += self.strInorder(node.left)
      
      info += ' ' + str(node.data) 

      if node.right is not None:
        info += self.strInorder(node.right)
      return info
    else:
      return info
            
  # print in -> left -> right -> root (down to up)
  def strPostorder(self, node = -1, info = ''):
    if self.root is None:
      return ' '
            
    if node==-1:
      node = tree.root
            
    if node.data is not None:
                              
      if node.left is not None: 
        info += self.strPostorder(node.left)
                
      if node.right is not None:
        info += self.strPostorder(node.right)
        
      info += ' ' + str(node.data)
                    
      return info
    else:
      return info
            
  
  def search(self, value):
    if self.root is None:
      print('BinaryTree Error: The tree is empty')
      return

    actual = self.root
    while actual.data != value:
      # if value is bigger than node data, seach in right
      if value > actual.data:
        actual = actual.right
      # if value is lower than node data, seach in left
      else:
        actual = actual.left
      if actual is None:
        return False
    return True


######################################################################

tree = BinaryTree()

tree.insert(1)
tree.insert(50)
tree.insert(44)
tree.insert(5)
tree.insert(32)
tree.insert(8)
tree.insert(35)
tree.insert(51)

print("Pre Order: ", tree.strPreorder())
print("Intra Order: ", tree.strInorder())
print("Pos Order: ", tree.strPostorder())

print('Found item: ', tree.search(6))