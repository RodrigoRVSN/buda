function howManyGames(price: number, discount: number, minimun: number, budget: number): number {
  let boughtGames = 0
  let remainingBudget = budget
  let actualPrice = price

  while (remainingBudget >= actualPrice) {
    if (remainingBudget >= actualPrice) {
      boughtGames++
    }

    remainingBudget -= actualPrice
    actualPrice -= actualPrice - discount > minimun ? discount : actualPrice - minimun
  }

  return boughtGames
}