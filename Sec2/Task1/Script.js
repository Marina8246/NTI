var Username = prompt("Please enter your username:");
var Password = prompt("Please enter your password:");
if (Username === "") {
    alert("Username is required");
}
else if (Password.length < 8) {
    alert("Password must be at least 8 characters");
}else {
    console.log(Username +"     "+ Password);
}


