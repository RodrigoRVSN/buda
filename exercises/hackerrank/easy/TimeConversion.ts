function timeConversion(s: string): string {
  const isAM = s.includes('AM')
  const slicedTime = s.slice(0, -2).split(':')

  let hours = parseInt(slicedTime[0])
  const minutes = slicedTime[1]
  const seconds = slicedTime[2]

  if (isAM && hours === 12) {
    hours = 0
  }

  if (!isAM && hours !== 12) {
    hours += 12
  }

  return `${hours > 9 ? hours : `0${hours}`}:${minutes}:${seconds}`

}
