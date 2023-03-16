function periodIsLate(last, today, cycleLength) {
  const daysDifference = (today - last) / (1000 * 60 * 60 * 24)

  return daysDifference > cycleLength;
}