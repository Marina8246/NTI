// 1
var fullName = "Ahmed Ali";
console.log(fullName.length);

// 2
var text = "I am learning JavaScript";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 3
var email = "student@nti.com";
console.log(email.includes("@"));

// 4
var word = "JavaScript";
console.log(word[0]);
console.log(word[word.length - 1]);

// 5
var text2 = "This is a bad day";
console.log(text2.replace("bad", "good"));

// 6
var text3 = "I love coding";
var arr = text3.split(" ");
console.log(arr.join("-"));

// 7
var text4 = " nti egypt training ";
text4 = text4.trim();
text4 = text4.toUpperCase();
text4 = text4.replace("EGYPT", "CAIRO");
console.log(text4);

// 8
var num = parseFloat("45.8");
console.log(num);

// 9
var num2 = 7.6;
console.log(Math.round(num2));
console.log(Math.floor(num2));
console.log(Math.ceil(num2));

// 10
console.log(Math.max(12, 5, 28, 9));
console.log(Math.min(12, 5, 28, 9));

// 11
var random = Math.floor(Math.random() * 20) + 1;
console.log(random);

// 12
var price = 19.4567;
console.log(price.toFixed(2));

// 13
var n1 = [];
for (var i = 0; i < 5; i++) {
    n1[i] = Math.floor(Math.random() * 50) + 1;
}
var max = n1[0];
var min = n1[0];
var sum = 0;
for (var i = 0; i < n1.length; i++) {
    if (n1[i] > max) {
        max = n1[i];
    }
    if (n1[i] < min) {
        min = n1[i];
    }
    sum += n1[i];
}
var avg = sum / n1.length;

console.log(n1);
console.log(max);
console.log(min);
console.log(avg.toFixed(2));

// 14
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

// 15
for (var i = 1; i <= 15; i += 2) {
    console.log(i);
}

// 16
var i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 17
var names = ["Sara", "Omar", "Mona", "Youssef"];

for (var name of names) {
    console.log(name);
}

// 18
for (var i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}

// 19
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}

// 20
for (var i = 1; i <= 30; i++) {
    if (i == 25) {
        break;
    }
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}

// 21
var word2 = "HELLO";

for (var i = 0; i < word2.length; i++) {
    console.log(word2[i]);
}

// 22
var num = [10, 20, 30, 40];
var sum = 0;

for (var i = 0; i < num.length; i++) {
    sum += num[i];
}

console.log(sum);

// 23
var sent = "JavaScript is amazing and awesome";
var count = 0;

for (var i = 0; i < sent.length; i++) {
    if (sent[i] == "a" || sent[i] == "A") {
        count++;
    }
}

console.log(count);

// 24
var grades = [70, 85, 92, 60, 77, 88];

for (var i = 0; i < grades.length; i++) {
    if (grades[i] % 2 == 0) {
        console.log(grades[i]);
    }
}

// 25
for (var i = 1; i <= 4; i++) {
    var stars = "";
    for (var j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}

// 26
var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var countt = 0;

for (var i = 0; i < students.length; i++) {
    var name = students[i].toUpperCase();

    if (name.startsWith("A") || name.startsWith("S")) {
        console.log(name);
        countt++;
    }
}

console.log(countt);