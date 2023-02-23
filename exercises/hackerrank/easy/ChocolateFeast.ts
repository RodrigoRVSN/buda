function chocolateFeast(budget: number, price: number, freeTime: number): number {
  let boughtChocolates = 0

  for (let i = budget; i >= 0; i -= price) {
    boughtChocolates++

    if (boughtChocolates % freeTime === 0) {
      boughtChocolates++
    }
  }

  return boughtChocolates
}