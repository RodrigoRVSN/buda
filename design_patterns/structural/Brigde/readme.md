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