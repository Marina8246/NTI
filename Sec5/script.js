function display(arr) {
    var data = "";
    for (var i = 0; i < arr.length; i++) {
        data += "<tr>";
        data += "<td>" + arr[i].firstName + "</td>";
        data += "<td>" + arr[i].lastName + "</td>";
        data += "<td>" + arr[i].age + "</td>";
        data += "<td>" + arr[i].isGraduated + "</td>";
        data += "</tr>";
    }
    document.getElementById("tbody").innerHTML = data;
}
var users = JSON.parse(localStorage.getItem("users"));
if (users == null) {
    users = [];
}
display(users);
function addUser() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var graduate = document.getElementById("graduate").value;
    var user = {
        firstName: fname,
        lastName: lname,
        age: age,
        isGraduated: graduate
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    display(users);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("graduate").value = "Yes";
}
function search() {
    var text = document.getElementById("search").value.toLowerCase();
    var result = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].firstName.toLowerCase().includes(text)) {
            result.push(users[i]);
        }
    }
    display(result);
}
function Graduated() {
    var value = document.getElementById("filter").value;
    if (value == "All") {
        display(users);
        return;
    }
    var result = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].isGraduated == value) {

            result.push(users[i]);
        }
    }
    display(result);
}
