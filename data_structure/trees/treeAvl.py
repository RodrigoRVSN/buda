class Node:
  def __init__(self, data = None, left = None, right = None):
    self.data = data
    self.left = left
    self.right = right
    # used to calculate balancing
    self.height = 1

class AVLTree:
  def __init__(self):
    self.root = None
        
  def insert(self, data, node = None):
    # if three has not a node root
    if self.root == None:
      self.root = Node(data)
      node = self.root
      return node

    if node is None: 
      node = self.root

    # the data is smaller than the current one (left)
    if data < node.data:
      # if left is empty insert the node
      if node.left is None:
        node.left = Node(data)
      # if not empty, check left in loop
      else:
        node.left = self.insert( data, node.left )

      # the data is bigger than the current one (right)
    else:
      # if right is empty insert the node
      if node.right is None:
        node.right = Node(data)
      # if not empty, check right in loop
      else:
        node.right = self.insert( data, node.right )  
            
    # increment the node height of the max valuem after success insertion
    node.height = 1 + self.getMax(self.getHeight(node.left),self.getHeight(node.right))
            
    balance = self.getBalance(node)
            
    # make balancing if necessary (bigger than 1 and lower than -1)
    if balance > 1 and data < node.left.data:
      return self.rightRotation(node)
          
    elif balance < -1 and data > node.right.data:
      return self.leftRotation(node)
          
    elif balance > 1 and data > node.left.data:
      return self.leftRightRotation(node)
          
    elif balance < -1 and data < node.right.data:
      return self.rightLeftRotation(node)
      
    self.root = node
    return node

  # search and delete the provided data
  def delete(self, data, node = -1):
    if node == -1: 
      node = self.root
    
    if node is None:
      return node
    
    # if the data is lower than node.data, recursively search for left of node
    if data < node.data:
      node.left = self.delete( data, node.left )
        
    # if the data is bigger than node.data, recursively search for right of node
    elif data > node.data:
      node.right = self.delete( data, node.right )

    # if the value was found, delete the node 
    else:
      # if hasnt left, return the right subtree
      if node.left is None:
        tempNode = node.right
        if node == self.root:
          self.root = tempNode
        node = None
        return tempNode

      # if hasnt right, return the left subtree
      elif node.right is None:
        tempNode = node.left
        if node == self.root:
          self.root = tempNode
        node = None 
        return tempNode
        
      # if the node has 2 childrens, go to successor
      else:
        # get smaller node of the right subtree to be the successor
        smallerNode = self.getSmaller(node.right)
        # change the node data
        node.data = smallerNode.data
        # remove the successor of right subtree
        node.right = self.delete(smallerNode.data,node.right)
            
    if node is None:
      return node

    # make the balancing if necessary
    node.height = 1 + self.getMax(self.getHeight(node.left),self.getHeight(node.right))
    balance = self.getBalance(node)
    
    if balance > 1 and self.getBalance(node.left) >= 0:
      node = self.rightRotation(node)
        
    elif balance > 1 and self.getBalance(node.left) < 0:
      node = self.leftRightRotation(node)
    
    elif balance < -1 and self.getBalance(node.right) <= 0:
      node = self.leftRotation(node)
    
    elif balance < -1 and self.getBalance(node.right) > 0:
      node = self.rightLeftRotation(node)
    
    self.root = node
    return node

  # get the bigger value between 2 numbers
  def getMax(self, num1, num2):
    if num1 > num2:
      return num1
    return num2
        
  # makes left rotation if right subtree is heavy
  def leftRotation(self, node):
    # gets the new right value
    tempNode = node.right
    # because the rotation, the right value will be None
    node.right = tempNode.left
    # left value will be now the node
    tempNode.left = node

    node.height = 1 + max(self.getHeight(node.left),
self.getHeight(node.right))
        
    tempNode.height = 1 + max(self.getHeight(tempNode.left),
self.getHeight(tempNode.right))
        
    return tempNode
    
  # makes right rotation if left subtree is heavy
  def rightRotation(self, node):
    tempNode = node.left
    node.left = tempNode.right
    tempNode.right = node

    node.height = 1 + max(self.getHeight(node.left), self.getHeight(node.right))

    tempNode.height = 1 + max(self.getHeight(tempNode.left), self.getHeight(tempNode.right))  
    
    return tempNode
    
  def rightLeftRotation(self, node):
    # makes the right rotate of the right element, and left rotate of root
    node.right = self.rightRotation(node.right)
    return self.leftRotation(node)
      
  def leftRightRotation(self, node):
    # makes the left rotate of the left element, and right rotate of root
    node.left = self.leftRotation(node.left)
    return self.rightRotation(node)
  
  # get the height of the node
  def getHeight(self, root):
    if not root:
      return 0
    return root.height
  
  # get the balancing of the node
  def getBalance(self, node):
    if not node:
      return 0
    # subtract the leftHeight and rightHeight
    return self.getHeight(node.left) - self.getHeight(node.right)
  
  # get the minor node recursively checking left of each node
  def getSmaller(self, root):
    # if the root is None, return the root
    if root is None:
      return root
    # if the root.left is None, the minor node is the actual root.
    if root.left is None:
      return root
    # if root.left is not none, recursively to the next root.left
    return self.getSmaller(root.left) 

  # print int root -> left -> right  
  def strPreorder(self, node = -1, info = ''):
    if self.root is None:
      return ' '
            
    if node == -1:
      node = self.root
            
    if node.data is not None:
                
      info += ' ' + str(node.data)
      info += '('
                
      if node.left is not None: 
        info += self.strPreorder(node.left)
                
      if node.right is not None:
        info += self.strPreorder(node.right)
      info += ')'            
      return info
    return info

#######################################################################

tree = AVLTree()

tree.insert(1)
print('insert(1):', tree.strPreorder())
tree.insert(2)
print('insert(2):', tree.strPreorder())
tree.insert(3)
print('insert(3):', tree.strPreorder())
tree.insert(4)
print('insert(4):', tree.strPreorder())
tree.insert(5)
print('insert(5):', tree.strPreorder())
tree.insert(6)
print('insert(6):', tree.strPreorder())

tree.delete(6)
print('\ndelete(6):', tree.strPreorder())
tree.delete(2)
print('delete(2):', tree.strPreorder())
tree.delete(5)
print('delete(5):', tree.strPreorder())
tree.delete(1)
print('delete(1):', tree.strPreorder())
tree.delete(3)
print('delete(3):', tree.strPreorder())
tree.delete(4)
print('delete(4):', tree.strPreorder())