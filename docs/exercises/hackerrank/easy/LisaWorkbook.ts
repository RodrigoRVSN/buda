
function workbook(n: number, k: number, arr: number[]): number {
  let countSpecialNumbers = 0
  let page = 1

  arr.forEach((number, index) => {
    for (let i = 1; i <= number; i++) {
      if (i === page) countSpecialNumbers++

      if (i % k === 0 && i !== number) page++
    }

    page++
  })

  return countSpecialNumbers
}