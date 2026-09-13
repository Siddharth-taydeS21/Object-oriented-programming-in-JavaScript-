// Factory functions are simple functions which return new objects. 
// They allow us to write different instances of objects without needing to write duplicate code. 
// The reason behind calling it a factory function is that this functions can produces multiple copies on an object form a blueprint, just how the factory works.  
// (It's not considered as a class or constructor method)

const createUser = function(userName, age, city){
    const obj = {
        userName,
        age,
        city,
        getUserBirthYear() {
            return new Date().getFullYear() - age;
        }
    }
    return obj
}

const user1 =  createUser('Siddharth', 22, 'Mumbai')
const birthYearOfUsee1 = user1.getUserBirthYear();

const user2 =  createUser('Sonal', 19, 'Amravati')
const birthYearOfUsee2 = user2.getUserBirthYear();

console.log(user1)
console.log(user2)
console.log(birthYearOfUsee1)
console.log(birthYearOfUsee2)