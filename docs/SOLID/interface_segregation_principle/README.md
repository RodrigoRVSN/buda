# Interface Segregation Principle (ISP)

## What is this?

- This principle say: 
  
`A class should not be forced to implement interfaces and methods who will not be used`

___

## Why?

- We need to create specific interfaces instead a generic interface
- With specific interfaces, the classes do not require useless information

## Examples (Java)

### Bad example

```js
interface Birds {
    public function setLocale($longitude, $latitude);

    public function setAltitude($altitude);

    public function render();
}

class Parrot implements Birds {
    public function setLocale($longitude, $latitude) {
        // bla bla bla
    }

    public function setAltitude($altitude) {
        // bla bla bla   
    }

    public function render() {
        // bla bla bla
    }
}

/* Here the "setAltitude" is required to penguim, but penguins doesnt fly! */
class Penguim implements Birds {
    public function setLocale($longitude, $latitude) {
        // bla bla bla
    }

    public function setAltitude($altitude) {
        // ! bla bla bla   
    }

    public function render() {
        // bla bla bla
    }
}
```

### Good example

```js
interface Birds {
    public function setLocale($longitude, $latitude);
    public function render();
}

/* Here we're implementing a specific class to be used by birds who fly */
interface BirdsFly extends Birds {
    public function setAltitude($altitude);
}

class Parrot implements BirdsFly {
    public function setLocale($longitude, $latitude) {
        // bla bla bla
    }
    
    public function setAltitude($altitude) {
        // bla bla bla   
    }
    
    public function render() {
        // bla bla bla
    }
}

class Penguim implements Birds {
    public function setLocale($longitude, $latitude) {
        // bla bla bla
    }
    
    public function render() {
        // bla bla bla
    }
}
```
