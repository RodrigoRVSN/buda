import { Queue } from "./Queue"

export const hotPotato = (elementsList: string[], numberPass: number) => {
  const queue = new Queue()
  const eliminatedList = [] as string[]

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while (queue.getSize() > 1) {
    for (let i = 0; i < numberPass; i++) {
      queue.enqueue(queue.dequeue())
    }

    eliminatedList.push(queue.dequeue() as string)
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}