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