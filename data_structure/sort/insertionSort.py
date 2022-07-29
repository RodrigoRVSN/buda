# Sort an array as crescent, verifying each value and adjusting position.
def insertionSort(array):
  length = len(array)

  # start in the second number in the array
  for index in range(1, length):
    # mark the value to be compared to the previous values
    marked = array[index]

    # create the index who will be decremented and used to verify the order
    preIndex = index - 1
    
    # while preIndex is positive and marked value is lower than the actual value
    while preIndex >= 0 and marked < array[preIndex]:
      # pass the valeu to the next index, because the value is bigger
      array[preIndex + 1] = array[preIndex]
      preIndex -= 1
    
    # put the marked value in the array position after sort allocations
    array[preIndex + 1] = marked

  return array


#####################################################################

print(insertionSort([5, 3, 20, 1, 2, 50, 10]))  
# Returns [1, 2, 3, 5, 10, 20, 50]

print(insertionSort([10, 9, 8, 7, 6]))          
# Returns [6, 7, 8, 9, 10]