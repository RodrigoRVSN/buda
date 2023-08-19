import { Deque } from "./Deque"

export const palindromeChecker = (text: string) => {
  const deque = new Deque()

  const lowerString = text.toLocaleLowerCase().split(' ').join('')

  let isEqual = true, firstLetter, lastLetter

  for (let i = 0; i < lowerString.length; i++) {
    deque.enqueueTail(lowerString[i])
  }

  while (deque.getSize() > 1 && isEqual) {
    firstLetter = deque.dequeueFront()
    lastLetter = deque.dequeueTail()

    if (firstLetter !== lastLetter) {
      isEqual = false
    }
  }

  return isEqual
}