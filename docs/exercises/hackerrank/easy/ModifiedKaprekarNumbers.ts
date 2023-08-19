function kaprekarNumbers(lower: number, higher: number): void {
  const kaprekar = []

  for (let i = lower; i <= higher; i++) {
    const squaredNumber = String(i * i).split('')
    const firstHalf = squaredNumber.splice(0, squaredNumber.length / 2).join('')
    const secondHalf = squaredNumber.join('')

    if (Number(firstHalf) + Number(secondHalf) === i) {
      kaprekar.push(i)
    }
  }

  console.log(kaprekar.length ? kaprekar.join(' ') : 'INVALID RANGE')
}