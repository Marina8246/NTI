// 1
var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White"
};
console.log(car);

// 2
console.log(car.brand);
console.log(car["year"]);

// 3
car.color = "black";
car.price = 1000000;
console.log(car);

// 4
delete car.year;
console.log(car.year);

// 5
var student = {
  "student-name": "Sara",
  age: 20
};
console.log(student["student-name"]);

// 6
var book = {
  title: "JavaScript",
  author: {
    firstName: "John",
    lastName: "Smith"
  }
};
console.log(book.author.lastName);

// 7
var person = {
  name: "Ali",
  age: 25,
  city: "Cairo"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));

// 8
var settings = {
  theme: "dark",
  lang: "en"
};
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log(settings);

// 9
var cities = ["Cairo", "Giza", "Alex", "Aswan", "Luxor"];
console.log(cities);
console.log(cities.length);

// 10
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length - 1]);

// 11
cities.push("Hurghada");
console.log(cities);

cities.unshift("Port Said");
console.log(cities);

// 12
cities.pop();
console.log(cities);

cities.shift();
console.log(cities);

// 13
var tech = ["HTML", "CSS", "JS", "React"];
console.log(tech.indexOf("JS"));
console.log(tech.includes("Python"));

// 14
var items = ["pen", "book", "bag"];
items.forEach(function(item, index){
    console.log(index, item);
});

// 15
var colors = ["red", "green", "blue", "yellow"];
for(var color of colors){
    if(color === "blue"){
        break;
    }
    console.log(color);
}

// 16
var letters = ["A", "B", "C"];
letters.push("D");
letters.push("E");
letters.shift();
console.log(letters);
console.log(letters.length);

// 17
var fruits = ["apple", "banana", "cherry"];
var upper = fruits.map(function(fruit){
    return fruit.toUpperCase();
});
console.log(upper);
console.log(fruits);

// 18
var numbers = [10, 55, 30, 80, 45, 90];
var result = numbers.filter(function(num){
    return num > 50;
});
console.log(result);

// 19
var places = ["Cairo", "Giza", "Alex", "Aswan"];
console.log(places.find(function(city){
    return city.startsWith("A");
}));
console.log(places.findIndex(function(city){
    return city.startsWith("A");
}));

// 20
var arr = ["a", "b", "c", "d", "e"];
var copy = arr.slice(1,4);
console.log(copy);
console.log(arr);

// 21
var words = ["one", "two", "three", "four", "five"];
var removed = words.splice(1,2);
console.log(removed);
console.log(words);

// 22
var nums = [40,100,1,5,25];
nums.sort(function(a,b){
    return a-b;
});
console.log(nums);

// 23
var ages = [16,21,17,19];
console.log(ages.some(function(age){
    return age >= 18;
}));
console.log(ages.every(function(age){
    return age >= 18;
}));

// 24
var values = [5,10,15,20];
var total = values.reduce(function(acc,num){
    return acc + num;
},0);
console.log(total);

// 25
var stu= [
    {name:"Omar", grade:80},
    {name:"Mona", grade:90},
    {name:"Ali", grade:70}
];

stu.forEach(function(student){
    console.log(student.name, student.grade);
});

// 26
var passed = stu
.filter(function(student){
    return student.grade >= 80;
})
.map(function(student){
    return student.name;
});
console.log(passed);

// 27
var products = [
    {name:"Pen", price:10},
    {name:"Book", price:50},
    {name:"Bag", price:100}
];

var totalPrice = products.reduce(function(acc, product){
    return acc + product.price;
},0);

console.log(totalPrice);

// 28
var langs = ["js", "html", "css", "js", "react", "js"];

var count = langs.reduce(function(acc, item){
    return item === "js" ? acc + 1 : acc;
},0);

console.log(count);

// 29
var classroom = {
    teacher: "Mr Ahmed",
    students: ["Ali", "Sara", "Mona", "Omar"]
};

console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

// 30
var products2 = [
    {id:1, title:"Pen", price:10},
    {id:2, title:"Book", price:50},
    {id:3, title:"Bag", price:25}
];

var titles = products2.map(function(product){
    return product.title.toUpperCase();
});

var cheap = products2.filter(function(product){
    return product.price < 30;
});

var sum = products2.reduce(function(acc, product){
    return acc + product.price;
},0);

console.log(titles);
console.log(cheap);
console.log(sum);