export default class MaxHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number | undefined {
    if (this.length === 0) return undefined;

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(index: number): void {
    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);
    if (index >= this.length || leftIndex >= this.length) return;
    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const value = this.data[index];
    if (leftValue > rightValue && value < leftValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = value;
      this.heapifyDown(leftIndex);
    } else if (rightValue > leftValue && value < rightValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = value;
      this.heapifyDown(rightIndex);
    }
  }

  private heapifyUp(index: number): void {
    if (index === 0) return;
    const currentParent = this.parent(index);
    const parentValue = this.data[currentParent];
    const value = this.data[index];
    if (parentValue < value) {
      this.data[index] = parentValue;
      this.data[currentParent] = value;
      this.heapifyUp(currentParent);
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return index * 2 + 1;
  }

  private rightChild(index: number): number {
    return index * 2 + 2;
  }
}
