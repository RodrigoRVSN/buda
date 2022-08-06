# Singleton

## What is?

- With this pattern, we provide an interface for creating objects in a superclass

___

## Problems

- To insert new feature, we need to make a pretty nasty code and repeat the code

___

## Steps

- Make all products follow the same interface
- Override in subclasses the methods

___

## When to use

- When we don’t know beforehand the exact types and dependencies of the objects your code should work with.
- When you want to provide users of your library or framework with a way to extend its internal components.
- When you want to save time reusing resources instead rebuilding them each time.