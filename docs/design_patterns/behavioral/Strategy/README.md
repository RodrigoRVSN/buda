# Strategy

## What is?

- With this pattern we define families of algorithms and make them interchangeable.
- Code closed to modification and open to expansion

___

## What this pattern solve?

- If we need to add a method in a class, without this pattern we need to write in the class, making a big code with possibility to has merge conflits.

___

## Steps

- Identify an algorithm that has frequent changes
- Declare the strategy common to all variants
- All variants need to implement that interface method in common

___

## When to use

- When we want to use variations of an algorithm and be able to switch one to another during runtime.
- When we have similar classes that differ the way they execute the behavior.
- When we want to have an isolate business logic
- When the class has a lot of conditional statement to change the behavior of the same algorithm

## Example (Typescript)

```ts
interface AnimalStrategy {
  saySomething(): string;
}

class Animal {
  // Keep a reference to the AnimalStrategy, but don't know the concrete class of the AnimalStrategy
  private strategy: AnimalStrategy;

  // Define strategy in constructor
  constructor(strategy: AnimalStrategy) {
    this.strategy = strategy;
  }

  // Let to change the strategy in runtime
  public setStrategy(strategy: AnimalStrategy) {
    this.strategy = strategy;
  }

  // The Animal class use the strategy to implement the method
  public giveAHello(): string {
    return this.strategy.saySomething();
  }
}

// Classes implementing the AnimalStrategy to define the behavior that the class will use
class Dog implements AnimalStrategy {
  public saySomething(): string {
    return "Au au";
  }
}

class Cat implements AnimalStrategy {
  public saySomething(): string {
    return "Meow";
  }
}

// Define a strategy and keep it in runtime
const context = new Animal(new Dog());
console.log('Animal Strategy is a Dog: ', context.giveAHello());

context.setStrategy(new Cat());
console.log('Animal Strategy is a Cat: ', context.giveAHello());
```