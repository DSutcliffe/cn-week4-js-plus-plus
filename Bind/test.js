class Test {
    constructor() {
        this.button = document.getElementById('button');
        // this.button.addEventListener('click', this.onClick);
        // this.button.addEventListener('click', this.onClick.bind(this));
        this.button.addEventListener('click', this.onClick.bind("Hello"));
    }

    onClick() {
        // without bind (above) would refernce the button, not the class.
        console.log(this);
    }

}

let test = new Test()