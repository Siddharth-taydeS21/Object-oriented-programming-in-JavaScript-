class OrderACoffee {
    constructor(drinkName){
        this.coffee = drinkName
    }

    // internal/complex logic is hidden/restricted, while the simple method is accessible for the outer world
    #boilWater(){
        return `boiling water for your ${this.coffee}`
    }
    #addMilk(){
        return `Adding milk into your ${this.coffee}`
    }
    #addSugar(){
        return `Adding sugar into your ${this.coffee}`
    }
    #garnishing(){
        return `giving the finishing touches to your ${this.coffee}`
    }

    makeACoffee(){
        return `
${this.#boilWater()}
${this.#addMilk()}
${this.#addSugar()}
${this.#garnishing()}
Your ${this.coffee} is ready!
        `
    }
}

const newDrink = new OrderACoffee('Cold coffee')