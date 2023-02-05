// Runtime: 87ms
// Memory: 45.7 MB

function combinationSum(candidates: number[], target: number): number[][] {
  const finalArray: Array<number[]> = []
  const temporaryArray: number[] = []

  const iterateCandidates = (index = 0, sum = 0) => {
      if (sum > target) return
      
      if (sum === target) {
          finalArray.push([...temporaryArray])
          return
      }
  
      for (let i = index; i < candidates.length; i++) {
          if (candidates[i] > target) continue

          temporaryArray.push(candidates[i])
          iterateCandidates(i, sum + candidates[i])
          temporaryArray.pop()
      }
  }

  iterateCandidates()

  return finalArray
};