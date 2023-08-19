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

## Example (typescript)

```ts
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor () { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance (): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic () {
    // ...
  }
}

/**
* The client code.
*/
function clientCode () {
  const s1 = Singleton.getInstance()
  const s2 = Singleton.getInstance()

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.')
  } else {
    console.log('Singleton failed, variables contain different instances.')
  }
}

clientCode()

```