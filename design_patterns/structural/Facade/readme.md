# Facade

## What is?

- With this pattern, we provide a simplified interface to a complex set of classes, frameworks or libraries

___

## What this pattern solve?

- The business logic using 3rd-party libraries is hard to comprehend and mantain because the coupling with the implementation of them.

___

## Steps

- Check if is possible to provide a simpler interface to an subsystem.
- Declare and implement this interface in the facade class
- Call in the client code the facade implementation
- If becomes too big, extract to a new class

___

## When to use

- When we need a limited but straightforward interface
- When we want to structure a subsystem into layers