class TopTrumps {
    constructor(name, health) {
        this._name = name;
        this._health = health;
    }
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
}

const stack1 = [
    a = new TopTrumps("x", 90),
    b = new TopTrumps("y", 90),
    c = new TopTrumps("z", 100)
]

const stack2 = [
    x = new TopTrumps("x", 70),
    y = new TopTrumps("y", 80),
    z = new TopTrumps("z", 90)
]

console.log(stack1[0].health > stack2[0].health);