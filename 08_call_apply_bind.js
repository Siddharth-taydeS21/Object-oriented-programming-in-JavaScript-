function GreetFullName(){
    return this.name + ' ' + this.lastName
}

const User = {
    name: 'Frank',
    lastName: 'castle',
    getFullName() {
        return this.name + ' ' + this.lastName
    }
}

const User1 = {
    name: 'Billy',
    lastName: 'Rusoow',
}

const User2 = {
    name: 'Matt',
    lastName: 'murdock',
}

const stolenFunction = User.getFullName;

// console.log(stolenFunction.call(User1)) // immediately calls the function with his reference of 'this'
// console.log(stolenFunction.bind(User)()) // returns a function which we can called later 

function introduce(role, skill) {
    return `My name is ${this.name}. i am a ${role}, and my skills are : ${skill}`
}

// .call() example
console.log(introduce.call(User, 'Us Marine', 'An Elite soldier in hand-to-hand combats and assassinations'))

// .apply() example
console.log(introduce.apply(User1, ['Bad guy/villain', 'Pro Assassin and mind manipulator']))

// .bind() example
const dareDeviLIntro = introduce.bind(User2, 'Crime Fighter', 'Super human like senses and mixed martial arts');
console.log(dareDeviLIntro())