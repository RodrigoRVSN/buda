# Observer

## What is?

- With this pattern, we define a subscription to notify multiple objects about the events of the object they're observing.
- The object notifying about the changes is called publisher and the interested objects are called subscribers.

___

## What this pattern solve?

- To notify an update to others, we need to use this pattern to make an observer who will send the updates to specific objects interesteds in this feedback.
- Without that, we could waste resources sending notifications to the wrong objects, or wasting time making the interested object checking the interested object.

___

## Steps

- Make an array field for storing a list of references to Subscribers.
- Create methods which allow add and remove the subscribers from the list.
- Create a method in Publisher to notify the Subscribers
- Create a method in the subscriber interface to update

___

## When to use

- When a change in a object require a change in another object
- When some objects needs to observe others in specific cases
