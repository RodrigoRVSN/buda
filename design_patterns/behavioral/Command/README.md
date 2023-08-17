# Command

## What is?

- With this pattern, we decouple the Receiver from the Sender.
- The command class methods are abstract, so the classes that implement this command interface have their own implementation.

## Benefits

- Decoupling, the methods have a better modularity
- Flexibility: New commands can being added without modifying existing code
- Extensibility, we can add new features through new commands

## Use cases

- The method could be applied in a home automation, where I create the methods responsible for turn on and off the lights of the home using a remote control.
- Transactional systems, tracking, logging and adding more information.
- Game development, handling the user actions
- GUI applications, handling the user interactions

## Example


```ts
/* Define the command interface with the abstract method "execute" */
interface Command {
  execute(): void;
}

/* Implements the command class and executes using its own abstract method "execute" */
class TurnOnLightsCommand implements Command {
  constructor(private light: Light) {} // Constructor to store the instance of the class Light

  execute() {
    this.light.turnOn(); // Execute the turnOn method of the class Light
  }
}

/* Implements the command class and executes using its own abstract method "execute" */
class TurnOffLightsCommand implements Command {
  constructor(private light: Light) {} // Constructor to store the instance of the class Light

  execute() {
    this.light.turnOff(); // Execute the turnOff method of the class Light
  }
}

class Light {
  constructor(private location: string, private isOn: boolean = false) {}

  turnOn() {
    this.isOn = true;
    console.log(`Light in ${this.location} turned on.`);
  }

  turnOff() {
    this.isOn = false;
    console.log(`Light in ${this.location} turned off.`);
  }

  getStatus() {
    return this.isOn ? 'on' : 'off';
  }
}

/* Create instances for the living room and the room */
const livingRoomLight = new Light('living room');
const roomLight = new Light('room');

/* Create instances of the command classes, providing the corresponding Light instances */
const turnOnLivingRoomLight = new TurnOnLightsCommand(livingRoomLight);
const turnOffLivingRoomLight = new TurnOffLightsCommand(livingRoomLight);

const turnOnRoomLight = new TurnOnLightsCommand(roomLight);
const turnOffRoomLight = new TurnOffLightsCommand(roomLight);

turnOnLivingRoomLight.execute();
turnOffLivingRoomLight.execute();

turnOnRoomLight.execute();
turnOffRoomLight.execute();

console.log('Lights Status:');
console.log(`Living Room Light: ${livingRoomLight.getStatus()}`);
console.log(`Room Light: ${roomLight.getStatus()}`);
```