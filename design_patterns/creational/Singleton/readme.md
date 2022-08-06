# Singleton

## What is?

- With this pattern, we ensure that a class has only one global instance, providing the access to this instance.

___

## Problems

- This pattern solve 2 problems at the same time, violating the SRP (Single Responsibility Principle).
- **Problem 1:** Ensure that a class has just a single instance, using the same object.
- **Problem 2:** Provide a global access to that instance, accessing the same object from anywhere and protecting the is instance of being overwritten.

___

## Steps

- Make default constructor private, to prevent to not being called with `new`
- Create a static creation method that acts as a constructor and return this object.

___

## When to use

- When a class should have just a single instance available to all clients. F.e., a database connection
- When we need a stricter control over global variables