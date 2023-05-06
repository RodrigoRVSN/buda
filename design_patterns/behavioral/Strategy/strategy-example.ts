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