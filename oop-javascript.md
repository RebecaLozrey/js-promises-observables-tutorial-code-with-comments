Advanced JS

OOP 4 pilars: Encapsulation, Abstraction, Inheritance, Polimorfism.
Procedural programing: functions and variables decoupled, interdependent.
localStorage Object, setItem method, removeItem method
OOP functions with no parameters, functions are properties contained in the object.
Encapsulation: Objects with related properties and methods, increases reusability.
Abstraction: Simple PUBLIC Interface is like a box with inputs buttons and outputs, reduce the impact of change
Inheritance: (HTMLElement) Eliminate redundat code, elements in the dom share the minimum properties and methods. Most generic object HTMLElement
Polymorphism: In prodecural we used switch case, in OOP we use the render() method to create different elements.
ECMAScript 6 / 2015 ECMA organization specification, javascript confirms this specification.
ECMA 6 Classes new features, before this Prototypes were inheriting this object.
Object LITERAL sintax { property: "name", method: function(){}}
Object FACTORIES: Created with any function createObject(){}
Object CONSTRUCTORS: Use a constructor function. Object(){this.property; this.method = function() ={}} then object = new Object(); Doesn't need a return.
Constructor Property: What was used to build this object.
Functions are objects, they have properties and methods.
call() method in functions, calls the function using an object passed as an argument. Circle.call({}, argument); is equivalent to const circl2 = Circle(argument), it creates an empty object and pass it to the method call, but you can pass a window object.
Primitives are value TYPES, ES6 new!!! symbol!! Number, String, Boolean, undefined and null.
Refrence TYPES are arrays, functions and objects, the three of the are objects
JS objects are dinamic, we can add properties after creation.
Notations for adding properties: circle.location = { x: 1} is equivalent to circle["location"] = {x: 1}
Notation for deleting a property: delete circle.location or bracket notation.
FOR IN to get all properties of an object. for (let key in circle) console.log(key, circle[key]);
Object.keys(circle); Returns all the keys of an object as an array.
if ("radius" in circle) to know if an object has a property
OOP abstraction, not all consumers of an object should have access to all properties and methods of an object, Example: Default values, or helper functions, or implementation details. Exposing just essentials, hide implementation details.
Closure: Variables in scope of parent function are passed to inner function, and are tied to the inner function. The inner function encloses this variables, even when the outerfunction was alreay been called.
Scope is temporary it is born and dies with the function
Getters and Setters: Object.defineProperty(this, 'defaultLocation', { get: function() { return defaultLocation; }, set: function(value){ defaultLocation = value; }});
const person = { _name: "Rodrigo", _age: 34, get name() { return this._name; }, get age() { return this._age; }, set age(num) { this._age = num }}
Classic Definition Inheritance, an object inherits properties from a base clase or a super class or a partent class
Classic Definition inheritance, a derived class, or a subclass, or a child class injerit from the parent class.
In JavaScript there are not classes just objects, in TypeScript there are classes. In JavaScript an object becomes a prototype and ca be inherited.
An empty object, is build with the Object() function, and inherits from the Object prototype, look the __proto__ property in the object.
Prototypical inheritance, JavaScript first look for the method in the object, and then, if it cant find it in the prototype.
An empty array, is build with the Array(0) function, and inherits from the Array prototype, look the __proto__ property in the array object.
Multilevel Inheritance: Array inherits from Object prototype, all objects created with the same constructor have the same prototype
Some Properties cant be enumerated, like the toString method, they are flaged as enumerable: false. And they wont show up as keys Object.keys('object')
ReadOnly Property : Object.defineProperty(object, 'propertyName', { writable: false, enumerable: false, configurable: false}); cant delete this property is not configurable
Using the console test an empty array. array.__proto__ is equal to Array.prototype, Array with Upercase, is an object constructor or a function constructor, and inherits from the same prototype as an empty array
A constructor function creates multiple instances of an object, repeating all the properties and methods in all objects, is memory space consuming, inheritance is the solution. Just move the implementatio of the method to Circle.prototype.draw = function(){console.log('draw')} and we can still access it as Circle.draw()
In JS objects we have 2 kinds of properties and methods, instance properties and methods, and prototype properties and methods
In JS we can override methods of the prototype object, as: Circle.prototype.toString = function (){ return 'the radius is: ' + this.radius}
This Prototype Object is a baseObject that is created every time we create a new object, and this prototype object has the Object as its prototype. Object is the root of all objects in JS
A method referenced as this.method inside a prototype method, will be found in the child object, and a method in the child will be found in the prototype object.
If an instance of a Circle object is created and the prototype change, when accesing the Circle, it is pointing to the prototype as a reference, so it will know the new version of the prototype
Object.keys(object) only lists instance properties
for (let key in object) list instance and prototype properties
Instance properties are called Own properties
ojb1.hasOwnProperty('name') prints own properties
BUILT IN JS object should not be modified
The interface of an object is what properties and methods are available to the consumer of the object
Reset the prototype of an object with: Circle.prototype = Object.create(Shape.prototype); and always as best practice reset the constructor to Circle.prototype.constructor = Circle; to be able to new up new Circles.
Object.prototype is an object in it self, with Object constructor
Shape.prototype is an object in it self, with Shape constructor
Shape.prototype has a this.color property that we need to pass to Circle function. We have to call Shape.call(this, color) within Circle to call the prototype function passing the Circle object "this" as a parameter.
Shape.call(this, color) means pleas call Shape function but using "this" new object, and other parameters
Function to extend an Object Base... function extend(Child, Parent){ Child.prototype = Object.create(Parent.prototype); Child.prototype.constructor = Child;} This function takes constructors as parameters.
If a method is defined both in the child and the parent, the child method is used, thats the way to overrie a method Circle.prototype.duplicate = f(){}
OOP Polymorphism diferent implementatins of Shape are Circle Square, each implementation has its own duplicate method, we avoid if statements to check the type, we can loop to call the same method for every shape.
Best Practice is to keep inheritance to one level, or inheritance hierachies can become too complicated
Composition is better to manage big hierarchies, Person Object can be created composing a canWalk object with a canEat object, and Goldfish object can be composed with canSwim and canEat objects.
