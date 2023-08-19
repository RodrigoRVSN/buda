# Adapter

## What is?

- With this pattern we allow objects with different interfaces collaborate  

___

## What this pattern solve?

- If we need to make a different implementation in a class, we could have a problem if the behavior of this class was made to make something different, so we need to adapt this behavior to our use.

___

## Steps

- Identify if we have 2 classes with incompatible interfaces
- Declare client interface and declare how to communicate with the service
- Create adapter class following the client interface
- Add a field to the adapter to store the service reference
- Use the adapter via client interface, without affecting the client code

___

## When to use

- When we want to use a existing class but the interface is not compatible with what we need
- When we want to reuse a class and add a method, that can't be added direct in the Super Class

## Example (Typescript)

```ts
/**
 * The Target defines the domain-specific interface used by the client code.
 */
 class Target {
  public request(): string {
      return 'Target: The default target\'s behavior.';
  }
}

/**
* The Adaptee contains some useful behavior, but its interface is incompatible
* with the existing client code. The Adaptee needs some adaptation before the
* client code can use it.
*/
class Adaptee {
  public specificRequest(): string {
      return 'bla bla bla';
  }
}

/**
* The Adapter makes the Adaptee's interface compatible with the Target's
* interface.
*/
class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
      super();
      this.adaptee = adaptee;
  }

  public request(): string {
      const result = this.adaptee.specificRequest().split('').reverse().join('');
      return `Adapter: (TRANSLATED) ${result}`;
  }
}

/**
* The client code supports all classes that follow the Target interface.
*/
function clientCode(target: Target) {
  console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);
```