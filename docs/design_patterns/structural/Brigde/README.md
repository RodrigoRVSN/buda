# Bridge

## What is?

- With this pattern we can split a large class in two separate independents hierarchies, Implementation and Abstraction.

___

## What this pattern solve?

- If we need to make a different implementation in a class, we need to make a lot of code when add a new attribute, so we need to use composition instead inheritance

___

## Steps

- Identify the ortogonal dimensions in the classes, like abstraction/platform, domain/infrastructure, front-end/back-end, or interface/implementation.
- Define the abstractions that client needs in the abstraction class
- Declare in implementation interface what'll be need of the abstraction class
- Create implementation classes, following the implementation interfaces
- Reference in the abstraction class, the implementation class. The abstraction class will delegate a lot of work to the referenced implementation class.
- If we have several variants of high-level logic, we should create more abstractions methods extending the base abstraction class
- The client should pass an implementation object to the abstraction class and he'll use the abstraction, forgotting the implementation.

___

## When to use

- When we want to divide and organize a monolithic that has several variants of functionality
- When we need to extend a class in several orthogonal dimensions
- When we need to switch the implementation in runtime

## Example (Typescript)

```ts
/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
 class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
      this.implementation = implementation;
  }

  public operation(): string {
      const result = this.implementation.operationImplementation();
      return `Abstraction: Base operation with:\n${result}`;
  }
}

/**
* You can extend the Abstraction without changing the Implementation classes.
*/
class ExtendedAbstraction extends Abstraction {
  public operation(): string {
      const result = this.implementation.operationImplementation();
      return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

/**
* The Implementation defines the interface for all implementation classes. It
* doesn't have to match the Abstraction's interface. In fact, the two
* interfaces can be entirely different. Typically the Implementation interface
* provides only primitive operations, while the Abstraction defines higher-
* level operations based on those primitives.
*/
interface Implementation {
  operationImplementation(): string;
}

/**
* Each Concrete Implementation corresponds to a specific platform and
* implements the Implementation interface using that platform's API.
*/
class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
      return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
      return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}

/**
* Except for the initialization phase, where an Abstraction object gets linked
* with a specific Implementation object, the client code should only depend on
* the Abstraction class. This way the client code can support any abstraction-
* implementation combination.
*/
function clientCode(abstraction: Abstraction) {
  // ..

  console.log(abstraction.operation());

  // ..
}

/**
* The client code should be able to work with any pre-configured abstraction-
* implementation combination.
*/
let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
```