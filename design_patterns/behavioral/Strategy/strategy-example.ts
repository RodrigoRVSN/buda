interface AnimalStrategy {
  saySomething(): string;
}

class Animal {
  // Mantem uma referencia do tipo AnimalStrategy, mas nao conhece a classe concreta da classe AnimalStrategy
  private strategy: AnimalStrategy;

  // Define a estrategia via construtor e no tempo de execucao
  constructor(strategy: AnimalStrategy) {
    this.strategy = strategy;
  }

  // Permite alterar a estrategia em tempo de execucao
  public setStrategy(strategy: AnimalStrategy) {
    this.strategy = strategy;
  }

  // A classe Animal delega para a strategy a implementacao do metodo
  public giveAHello(): string {
    return this.strategy.saySomething();
  }
}

// Classes implementando o AnimalStrategy para definir o comportamento que a classe ira utilizar
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

// Define a Strategy e muda em tempo de execucao
const context = new Animal(new Dog());
console.log('Animal Strategy is a Dog: ', context.giveAHello());

context.setStrategy(new Cat());
console.log('Animal Strategy is a Cat: ', context.giveAHello());