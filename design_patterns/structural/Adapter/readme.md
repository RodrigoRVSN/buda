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