# ============= 4 Pillars of Object oriented programming ==================

# Encapsulation
* In object-oriented programming, encapsulation is the process of bundling the data (such as class properties) and logic (such as  class methods) into a single unit (like a class), while restricting direct access to some properties or methods. It helps us to write maintainable and readable & scalable code. it prevents pollution in the global environment Because all unnecessary variables and methods only lives under that one unit (class).
    
# Abstraction
* In object-oriented programming, abstraction is the process where we hide the complex logic, such as methods and data properties, using private fields, and we only expose the simple instance, interface of a method. It reduces the overall complexity of our code and helps us to keep it readable and maintainable.

# Inheritance
* In object-oriented programming, inheritance is the process where a child class can inherit the properties, methods, and behavior of its parent class. In modern JavaScript programming, we can implement inheritance using the `extends` and `super` keywords. It promotes the reusability and flexibility of our code and also prevents duplicate code writing.

# Polymorphism
* In object-oriented programming, polymorphism is a practice where different objects can respond to the same method call in their own unique way. It helps us to write flexible and reusable code because the objects can reuses the methods of their parents, but they respond in their own unique way, using a single unified method.

# ============= `this` keyword in JavaScript ==================
 * The value of `this` is determined by how the function is called in different modes of JS scripts Such as `strict mode` and normal mode.
 * In a normal JavaScript function, (not an arrow function), `this` point towards the `window` object.
 * In an arrow function, `this` point to `window` object.
 * In an object's normal function, `this` point towards it's parent object.
 * In an object's arrow function, `this` point towards `window` object.
 * In an event Listener where the event handler is a normal function, `this` point towards the `html element` who receives the event.
 * In an event Listener where the event handler is an arrow function, `this` point towards `window` object.

 # ============= Value of `this` in strict mode JS scripts ==================
 * In Strict mode JS scripts where we specially write `type="module"` into our HTML script tag or we write `"use strict";` at the very top of a script or a function definition, the Value of `this` is becomes undefined.
 * In the same mode, when we use normal functions in event listener calls, the value of `this` becomes that `HTML element` which receives that event.
 * In the same mode, when we define a method in an object or in a class, the value of `this` becomes that `object`.

# ============= thing we should know about 'Classes' in JS ==================
* `new` keyword 
    We use the `new` keyword to create an instance of an object or a class.
    Under the hood, it executes the four-step process:
    1. It creates a blank object.
    2. It links the prototype so it can inherit some methods and properties from the prototype chain.
    3. It creates and connects the `this` context. This means `this` of that object will point to that object itself.
    4. It returns that newly created object with its new `this` context.

* `extends` keyword : We use the `extends` keyword for defining a child class which inherits the properties and methods of a parent
    class. This is the way to implement object-oriented inheritance in modern JavaScript programming.

* `super` keyword/method : We use the `super` keyword in classes to access parent's props and methods. It operates in two ways:
    1. It can be used as a method, to invoke parent's constructor.
    2. It can be used as a property lookup to call the methods of the parent class.

* `private props` & `private methods`  :
    We can simply write `#` at the start of any property or method in a class to make it a private property or private method. These private properties and private methods cannot be accessed by anyone who belongs to the outer world, by anyone who belongs to the outside scope of the class.

* `static props` & `static methods` :
    Static Properties and methods belong to the class itself, and they will not be attached or added to the instance, which is gonna be created with the help of that specific class.

* `getters` :
    Getters are the methods used to retrieve or read the value of a property in a class. They can be called just using the dot notation and without writing parentheses().
    `console.log(classInstance.getterName)` // done, it's called!

* `setters` :
    Setters are the methods used to set a value as a class property. It can be called directly when we define any value to the setter using the `=` operator.
    `classInstance.setterName = 'updated value'` // this is how to update a prop of a class using the setters