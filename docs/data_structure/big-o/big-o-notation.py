array = [1, 2, 5, 3, 4]

# Example 1 - O(log n) - Binary Search
def binarySearch(list, item):
    first = 0
    last = len(list) - 1
    found = False

    while first <= last and not found: # O(n)
        midpoint = (first + last) // 2 # O(log n)
        if list[midpoint] == item: # O(1)
            found = True
        else: # O(1)
            if item < list[midpoint]: # O(1)
              last = midpoint-1
            else: # O(1)
                first = midpoint+1
    return found

# Example 2 - O(1)
def findItem():
  print('Hi Lorena') # O(1)
  if(1 == array[0]): # O(1)
    return 1

# Example 3 - O(n)
def linear(n):
  for iterator in range(n): # O(n)
    print(iterator)

# Example 4 - O(n²)
def quadratic():
  for i in n: # O(n)
    for j in n: # O(n)
      print(i, j)
    print('---')  

# Example 5 - O(n!)
def fibonacci_of(n):
  if n in {0, 1}: # O(1)
      return n
  return fibonacci_of(n - 1) + fibonacci_of(n - 2)  # O (n!)


# Example 6 - Combination O(n)
# O(1) + O(5) + O(n) + O(n) + O(3)
# O(9) + O(2n) -> O(n)

def combination(n):
  # O(1)
  print(n[0])

  # O(5)
  for i in range(5):
    print('test ', i)

  # O(n)
  for i in n:
    print(i)

  # O(n)
  for i in n:
    print(i)

  # O(3)
  print('Python')
  print('Python')
  print('Python')