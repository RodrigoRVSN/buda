function chocolateFeast(budget: number, price: number, freeTime: number): number {
  let boughtChocolates = 0

  for (let i = budget - price; i >= 0; i -= price) {
    boughtChocolates++

    if (boughtChocolates > 1 && boughtChocolates % freeTime === 0) {
      boughtChocolates++
    }
  }

  return boughtChocolates
}
