function divCon(x) {
  let stringSum = 0, numberSum = 0

  x.forEach(number => {
    if (typeof number === 'string') {
      stringSum += Number(number)
    }


    if (typeof number === 'number') {
      numberSum += number
    }
  })

  return numberSum - stringSum
}