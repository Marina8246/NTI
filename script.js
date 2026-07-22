function test1() {
    x = 10;
}
test1();
console.log(x);


function test2() {
    "use strict";
    try {
        y = 20;
    } catch (error) {
        console.log(error.message);
    }
}
test2();


function test3() {
    "use strict";
    var localVar = "test";
    try {
        delete localVar;
    } catch (error) {
        console.log(error.message);
    }
    let obj = {
        name: "Ahmed"
    };
    delete obj.name;
    console.log(obj);
}
test3();


console.log(a);
var a = 10;
console.log(a);


// undefined
// 10

sayHi();
function sayHi() {
    console.log("Hi");
}


try {
    sayBye();
} catch (error) {
    console.log(error.message);
}
var sayBye = function () {
    console.log("Bye");
};


try {
    console.log(b);
    let b = 5;
} catch (error) {
    console.log(error.message);
}


var n = 1;
function demo() {
    console.log(n);
    var n = 2;
    console.log(n);
}
demo();
console.log(n);


function exampleVar() {
    if (true) {
        var num = 100;
    }
    console.log(num);
}
exampleVar();


function exampleLet() {
    if (true) {
        let age = 22;
        console.log(age);
    }
}
exampleLet();

var x1 = 5;
var x1 = 10;
console.log(x1);

let x2 = 5;
console.log(x2);

const student = {
    name: "Ahmed",
    age: 22,
    city: "Cairo"
};
console.log(student);
student.age = 23;
console.log(student);
student.grade = "A";
console.log(student);
delete student.city;
console.log(student);
try {
    student = {};
} catch (error) {
    console.log(error.message);
}


const nums = [1,2,3];
nums.push(4);
nums[0] = 100;
console.log(nums);
try{
    nums=[5,6];
}catch(error){
    console.log(error.message);
}

var a1;
console.log("var works");
let b1;
console.log("let works");

// const c1;

// Error because const needs a value


var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(window.g1);
console.log(window.g2);
console.log(window.g3);


const handlers = {};
for(let i=0;i<3;i++){
    handlers["fn"+i]=function(){
        return "index: " + i;
    };
}
console.log(handlers.fn0());
console.log(handlers.fn2());
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Ahmed"));


const fullInfo = (first, last, age) => {
    return `${first} ${last} is ${age} years old`;
};
console.log(fullInfo("Ali", "Hassan", 25));


const multiply = (a, b) => a * b;
console.log(multiply(5, 4));
const sum = (a, b) => {
    console.log(a);
    console.log(b);

    return a + b;
};
console.log(sum(5, 4));


const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title);
console.log(price);
console.log(inStock);

const courses = ["HTML", "CSS", "JS", "React"];
const [first, second] = courses;
console.log(first);
console.log(second);


function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Ahmed", "Welcome"));
console.log(greet("Ahmed"));
console.log(greet());


function sumAll(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));


const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const oldArray = [10, 20, 30];
const copyArray = [...oldArray];
copyArray.push(40);
console.log(oldArray);
console.log(copyArray);


const user = {
    name: "Sara",
    age: 22
};
const contact = {
    email: "sara@nti.com",
    age: 23
};
const result = {
    ...user,
    ...contact
};
console.log(result);

// age = 23

const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values));


let person1 = {
    name: "Ali",
    child: {
        age: 5
    }
};
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);
// Omar


const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
const shallow = {
    ...original
};
shallow.name = "Aya";
shallow.details.city = "Alex";
console.log(original);
console.log(shallow);


const deepCopy = structuredClone(original);
deepCopy.details.city = "Aswan";
console.log(original);
console.log(deepCopy);


const data = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};
localStorage.setItem("userdata", JSON.stringify(data));
const readData = JSON.parse(localStorage.getItem("userdata"));
console.log(typeof readData);
console.log(readData);
localStorage.removeItem("userdata");


const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "www.test.com",
        timeout: 5000
    },
    features: []
};
APP_CONFIG.api.timeout = 3000;
APP_CONFIG.features.push("Login");
console.log(APP_CONFIG);
try {
    APP_CONFIG = {};
} catch (error) {
    console.log(error.message);
}


function createCard(title, price = 0, ...tags) {
    return {
        title,
        price,
        tags,
        label: `${title} - ${price} EGP`
    };
}
console.log(createCard("Laptop", 15000, "Dell", "16GB"));
console.log(createCard("Mouse"));

const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}
// part 2

const fruits = ["apple", "banana", "cherry"];
console.log("for...in");
for (let i in fruits) {
    console.log(i, fruits[i]);
}
console.log("for...of");
for (let value of fruits) {
    console.log(value);
}



for (let [index, value] of fruits.entries()) {
    console.log(index + " -> " + value);
}


const word = "NTI";
console.log("for...in");
for (let i in word) {
    console.log(i, word[i]);
}
console.log("for...of");
for (let ch of word) {
    console.log(ch);
}

// for...in => index
// for...of => value

const user = {
    name: "Ali",
    age: 25
};


for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

const numbers = [1, 2, 3, 4, 5, 6];

for (let num of numbers) {

    if (num == 3) {
        continue;
    }

    if (num == 5) {
        break;
    }

    console.log(num);
}

// 1
// 2
// 4
const map = new Map();
map.set("name", "Ahmed");
map.set(100, "ID");
const obj = {
    id: 1
};
map.set(obj, "UserObject");
console.log(typeof map);

console.log(map.size);


console.log(map.get("name"));
console.log(map.has("age"));
map.delete(100);
console.log(map.size);

for (let [key, value] of map) {
    console.log(key, value);
}
for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}

map.clear();

console.log(map.size);


const set = new Set();
set.add(10);
set.add(21);
set.add(2);
set.add(3);
set.add(2);
set.add(10);
console.log(set);
console.log(set.size);


console.log(set.has(2));
set.delete(3);
console.log(set.has(3));


for (let value of set.values()) {
    console.log(value);
}
for (let entry of set.entries()) {
    console.log(entry);
}


const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log(unique);

const name = "Ahmed";
const age = 25;
const obj1 = {
    name: name,
    age: age
};
const obj2 = {
    name,
    age
};
console.log(obj1);
console.log(obj2);