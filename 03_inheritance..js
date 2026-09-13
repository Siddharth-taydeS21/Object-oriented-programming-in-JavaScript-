class Human {
    constructor(firstName) {
        this.firstName = firstName
    }

    isAlive() {
        return 'I am Human'
    }
}

class NewGenerationHuman extends Human {
    constructor(firstName, lastName, age) {
        super(firstName) // has access to parent's props
        this.lastName = lastName
        this.age = age
    }

    introduce() {
        return `${this.firstName} ${this.lastName}`
    }

    printSpecies() {
        return `${super.isAlive()}, and my name is ${this.firstName}` // has access to parent's methods
    }
}

const user = new NewGenerationHuman('Siddharth', 'Tyade', 21)

class Student extends NewGenerationHuman {
    constructor(firstName, lastName, age, collage, standard) {
        super(firstName, lastName, age)
        this.collage = collage
        this.standard = standard
    }

    printOccupation(){
        return `I am Student and currently studying in ${this.collage}`
    }
}

const student = new Student('Karen', 'Page', 20, 'Stanford University', '15+')

class employee extends NewGenerationHuman {
    constructor(firstName, lastName, age, jobRole, specialization, company){
        super(firstName, lastName, age)
        this.jobRole =  jobRole
        this.specialization = specialization
        this.company = company
    }

    printQualifications(){
        return `My name is ${this.firstName}, i am a ${this.jobRole}, specialized in ${this.specialization}. I gained my experience while working in ${this.company}`
    }
}

const candidate = new employee('Siddharth', 'Tayde', 21, 'Backed Dev.', 'AI integrated Backend Apps', 'AI labs PVT. LTD') 

class Demo {
    constructor(a, b){
        this.a = a
        this.b = b
    }
    static justAValue = 'hello world'
}

console.log(Demo.justAValue)

const newDemo = new Demo('hi', 'hello')
