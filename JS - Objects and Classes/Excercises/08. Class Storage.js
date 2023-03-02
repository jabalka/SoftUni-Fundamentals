class Storage {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct = (p) => {
        this.storage.push(p);
        this.capacity -= p.quantity;
        this.totalCost += p.price * p.quantity;
    };
    getProducts = () => {
        this.storage.map(x => console.log(JSON.stringify(x)));

        // --------- could be also used:       -------------
        // this.storage = this.storage.map((x) => JSON.stringify(x));
        // return console.log(this.storage.join('\n'));
    };
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
