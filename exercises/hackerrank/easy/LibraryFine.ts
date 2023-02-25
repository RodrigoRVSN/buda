function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
  if (y1 < y2) return 0

  if (y1 > y2) return 10000

  if (m1 < m2) return 0

  if (m1 > m2) return 500 * (m1 - m2)
  if (d1 > d2) return 15 * (d1 - d2)

  return 0

}