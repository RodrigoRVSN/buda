# Bread First Search

- Queues are FIFO (First In First Out)
- Stacks are LIFO (Last In First Out)
- Breadth-first Search tells you if there's a path from A to B, if has a path, this search will tell you the **shortest path**
- A directed graph has arrows and the relationship follows the arrow direction
- A undirected graph doesnt has arrows and the relationship goes both ways
- To find the shortest path, you need to check the elements in the order they are added to the search list. Because of this, we need to use a Queue
- Mark the viewed itens to not get a infinite loop