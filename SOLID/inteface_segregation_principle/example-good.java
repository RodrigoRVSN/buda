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