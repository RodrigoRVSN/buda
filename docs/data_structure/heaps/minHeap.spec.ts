import { describe, expect, it } from "vitest";
import MinHeap from "./heap";

describe("should implement min heap correctly", () => {
  it("should implement min heap correctly", () => {
    const heap = new MinHeap();
    expect(heap.length).toBe(0);

    heap.insert(5);
    heap.insert(3);
    heap.insert(69);
    heap.insert(420);
    heap.insert(4);
    heap.insert(1);
    heap.insert(8);
    heap.insert(7);

    expect(heap.length).toBe(8);
    expect(heap.delete()).toBe(1);
    expect(heap.delete()).toBe(3);
    expect(heap.delete()).toBe(4);
    expect(heap.delete()).toBe(5);
    expect(heap.length).toBe(4);
    expect(heap.delete()).toBe(7);
    expect(heap.delete()).toBe(8);
    expect(heap.delete()).toBe(69);
    expect(heap.delete()).toBe(420);
    expect(heap.length).toBe(0);
  });
});
