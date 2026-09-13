class Product{
    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    getTotal(){
        return this.price * this.quantity
    }

    get totalPrice(){
        return this.price * this.quantity
    }

    set increasePrice(value){
        return this.price = value;
    }
}

const iphone = new Product('I phone X', 50000, 2)
console.log(iphone.totalPrice) // getters can be called without a prentices'()' with this we can read the property
console.log(iphone.increasePrice = 75000) // if we access a setter with dot notation, and then if we assign any value to it, it sets that value to the prop
console.log(iphone.totalPrice)