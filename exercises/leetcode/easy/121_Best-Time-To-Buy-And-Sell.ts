// Runtime 98 ms
// Memory 52.1 MB

function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPrice = prices[0]

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }

    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }

  return maxProfit
};