export function productArray(nums: number[]): number[] {
  const products: number[] = []
  
  nums.forEach((_, actualIndex) => {
    let sum = 1
    
    nums.forEach((value, index) => {
      if (index !== actualIndex) {
        sum *= value
      }
    })

    products.push(sum)
  })
  
  return products
}
