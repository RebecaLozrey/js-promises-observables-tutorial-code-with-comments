
//adding elements
// at the end
myArray.push(element1, element2, element3)
// at the begining
myArray.unshift(element1, element2, element3)
// in the middle
myArray.splice(index, deleteCount, newElement)

//finding elements
//finding the index of the element first ocurrence, or return -1
myArray.indexOf(elementValue, startAtIndex?)
//finding the index of the element last ocurrence, or return -1
myArray.lastIndexOf(elementValue, startAtIndex?)
// array includes a value anywhere in the array
myArray.includes(elementValue);

// finding elements in array of objects
//find first ocurrence of an object
// is like filter but is find
myArray.find((object)=>{
    return object.name == "almendra";
}); // returns the first object with name almendra

//returning the index of the first object matching the criteria
myArray.findIndex((object)=>{
    return object.name == "almendra";
}); // returns the index of the first ocurrence

//delete element from the end
myArray.pop();
//delete element from the begining
myArray.shift();
//delete element from the middle
myArray.splice(3,1);

//right way to empty an array
myArray.lenght = 0;
myArray.splice(0, myArray.lenght)

// concatenate two arrays
myArray.concat(secondArray);

// slice from sourounding indexes
// the slice do not include the choosen indexes
myArray.slice(indexAnterior, indexPosterior)


CONCAT AND SLICE with objects or arrays are copies passed as reference
this new arrays contain references to the original arrays

let fruits = [
{name: "apple"},
{name: "bannana"}
];
let breads = [
{name: "baguette"},
{name: "doughnut"}    
];
let groceries = fruits.concat(breads);
// remember that the new array holds references to the original array 
fruits[0].name = 'lemon';

console.log(fruits);
console.log(groceries);

let fruits = [
    {name: "apple"},
    {name: "bannana"}
    ];
    let breads = [
    {name: "baguette"},
    {name: "doughnut"}    
    ];

let groceries = [...fruits, ...breads];
let list = [...groceries];
fruits[0].name = "lemon";
console.log(list);

for concatenate for slice for spead operator
arrays and objects are passed as reference

for function to iterate over the values of the array
for (let e of list){
    console.log(e);
}
// array.forEach to iterate and get back the value, index and array
list.forEach( (e, i, a) => { console.log(e,i,a)})

turn an array into a string with a custom separator

let listFruits = list.map( object => {
    return object.name;
});

console.log(listFruits);
console.log("---------");
let listArray = listFruits.join("; ");
console.log(listArray);

miArray.splice(i,d,1,2,3,)
myString = "this is my string to words"
wordsArray = myString.split(" ");
console.log(wordsArray);

// the oposite of split is join
newString = wordsArray.join("-");
console.log(newString);

// sorting and reversing arrays
numbers = [2,6,3,4,8,4];
console.log(numbers.sort());
letters = ["a","s","f","e","y","d","w"];
console.log(letters.reverse());

arrayOfObjects = [
    {n: 7, lastname: "Lopez"},
    {n: 2, lastname: "Gonzalez"},
    {n: 5, lastname: "Perez"}
];

sortedArray = arrayOfObjects.sort((a,b)=>{
    if (a.lastname < b.lastname) return -1
    if (a.lastname > b.lastname) return 1 // in case of a positive 1 switches de pair
    else if (a.lastname === b.lastname) return 0
});

console.log(sortedArray);

sortedByNumber = arrayOfObjects.sort((a,b)=>{
    return a.n - b.n;
});

console.log(sortedByNumber);

check if some condition apply to every element of the array

num = [2,3,7];
// positive = num.every( n => n > 0);
// console.log(positive);
// the array has some sevens___???
atLeastOneNumSeven = num.some(
    n => {
        return n == 7;
    }
);
console.log(atLeastOneNumSeven);

var permissions = "admin";

switch (permissions) {
    case "admin": console.log("admin");
    break;
    case "no-admin": console.log("no-admin");
    break;
    default: console.log("no permissions");
}

for (let index=0; index<10; index++){console.log(index)}

js 
for in
for of

let person = { name: "mosh", age: 12};
let colors = ["red", "yellow", "blue"];
// square brakets notation when the key is unknown
for (let key in person) { console.log(key); } 
for (let index in colors) { console.log(index); }
for (let index in colors) { console.log(colors[index]); }
for (let color of colors) { console.log( color ); }


break; jumps out of loop
continue; starts the next iteration, ignoring the rest of this iteration



// clone an object
let person = { name: "mosh", age: 12};
let clone = Object.assign({ original: "original property"},person);


// clone array or objects with spead operator ...
let clone2 = { ...person };
console.log(clone2);

strings are like arrays have method
word = " Gloria Gloria ";
console.log(word.length);
console.log(word[0]);
console.log(word.includes("Gloria"));
console.log(word.startsWith("G"));
console.log(word.indexOf("o"));
console.log(word.lastIndexOf("o"));
console.log(word.replace("ria","bo"));
console.log(word.trim());

color = "red";
stringLiteral = `
test
${color}
test
`
console.log(stringLiteral);

this points to the object executing the current function

this and bind and arrow func

pass the this object with second argument of foreach
let customer = {
    name: "Carlos",
    age: 24,
    nickNames: ["Char", "Charly", "Car"],
    printNickNames: function(){
        this.nickNames.forEach(
            // this function points to the window or global object
            function(n){
                console.log(n, this.age);
            }
        ,this);      
    }
};

pass the this object with the BIND method
let customer = {
    name: "Carlos",
    age: 24,
    nickNames: ["Char", "Charly", "Car"],
    printNickNames: function(){
        this.nickNames.forEach(
            // this function points to the window or global object
            function(n){
                console.log(n, this.age);
            }.bind(this)
        )      
    }
};


injerit the object using arrow function
let customer = {
    name: "Carlos",
    age: 24,
    nickNames: ["Char", "Charly", "Car"],
    printNickNames: function(){
        this.nickNames.forEach(
            // this function points to the window or global object
           n => {
                console.log(n, this.age);
            }
        )      
//     }
// };

// customer.printNickNames();

//factory function

function createCustomer(n){
    return {name: n}
}
let customer1 = createCustomer("Jorge");
console.log(customer1);
//constructor function

function Customer(name){
    this.name = name;
}
let customer2 = new Customer("Michael");
console.log(customer2);

factory function to create objects
function createCircle(radius){
    return {radius: radius}
}
circle1 = createCircle(31);
console.log(circle1);
//constructor function to create objects
function Circle(radius){
    this.radius = radius;
}
circle2 = new Circle(11);
console.log(circle2);

hoisting === levantando
functions declared on the window object or the global object
are hoisted on run time
they are moved to the top of the code
function asigned to a variable are called function expresion
this functions are not HOISTED to the top of the code.

process unlimited number of arguments ARGUMENTS

function sum(){
    //arguments is an object
    sum = 0;
    for (let arg of arguments){
       sum += arg; 
    }
    return sum;
}
console.log(sum(2,6,4));

// rest operator is the ...rest of the arguments, unlimited number of arguments
    //args is an array
function mult(shape, ...sides){
    let volume = sides.reduce( (a,c) => a*c );
    return `the ${shape} has a volumen of ${volume}`
}
console.log(mult("box",2,4,1));

javascript closure is the oposite to psychology closure
in psychology closure is letting go of the past
in javascript closure is how dependencies from an outer or contextual functions
get carried to the inner function
and if a reference to this inner functions is returned
this conection o closure with the original context is saved by js

guessing getter and setter

const person = {
    _name: "Rodrigo",
    _age: 34,
    get name() { return this._name; },
    get age() { return this._age; },
    set age(num) { this._age = num }
}
person.age = 24;
console.log(person.name);
console.log(person.age);


//SASS
//scss

// create modules
_variables.scss
_header.scss

// import modules, order matters
@import './variables'

//create mixins, are like functions with parameters
@mixin specialStyle ($background){}

//include your mixins in other selectors
div{@include specialStyle(red);}

//extend other selectors, and overrides
div{@extend header;}

//nesting
header {
    div {}
}
