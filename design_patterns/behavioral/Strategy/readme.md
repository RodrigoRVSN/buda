# Strategy

## What is?

- With this pattern we define families of algorithms and make them interchangeable.

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