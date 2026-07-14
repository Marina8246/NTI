var name = document.getElementById("nameInput").value;
var age = document.getElementById("ageInput").value;
var yearsOfExperience = document.getElementById("yearsOfExperienceInput").value;
var selfRating = +prompt("On a scale of 1 to 10, how would you rate your skills?");
var Salary = +prompt("Enter your current salary:");
var yearsOfExp;
if (+yearsOfExperience < 2) {
    yearsOfExp = "Junior";
} else if (+yearsOfExperience >= 2 && +yearsOfExperience < 5) {
    yearsOfExp = "Mid-level";
} else if (+yearsOfExperience >= 5 && +yearsOfExperience < 10) {
    yearsOfExp = "Senior";
} else if (+yearsOfExperience >= 10) {
    yearsOfExp = "Expert";
}
var experienceLevel;
if (selfRating >= 9) {
    experienceLevel = "Excellent";
} else if (selfRating >= 7 && selfRating < 9) {
    experienceLevel = "Good";
} else if (selfRating >= 5 && selfRating < 7) {
    experienceLevel = "Average";
} else {
    experienceLevel = "Needs Improvement";
}
var rating;
switch (true) {
    case (selfRating >= 9):
        rating = "Excellent";
        break;
    case (selfRating >= 7 && selfRating < 9):
        rating = "Good";
        break;
    case (selfRating >= 5 && selfRating < 7):
        rating = "Average";
        break;
    default:
        rating = "Needs Improvement";
}

var FinalSalary;
var bonus;

if (+yearsOfExperience < 2) {
    bonus = 0;
    FinalSalary = Salary;
} else if (+yearsOfExperience >= 2 && +yearsOfExperience <= 5) {
    bonus = Salary * 0.1;
    FinalSalary = Salary + bonus;
} else {
    bonus = Salary * 0.2;
    FinalSalary = Salary + bonus;
}

var currentHour = new Date().getHours();
var shift;

if (currentHour >= 9 && currentHour < 18) {
    shift = "Day Shift";
} else {
    shift = "Night Shift";
}

console.log(
    "Name: " + name +
    "\nAge: " + age +
    "\nYears of Experience: " + yearsOfExperience +
    "\nExperience Level: " + yearsOfExp +
    "\nSelf Rating with if: " + selfRating +
    "\nExperience Level: " + experienceLevel +
    "\nSelf Rating with switch: " + rating +
    "\nSalary: " + Salary +
    "\nBonus: " + bonus +
    "\nTotal Salary: " + FinalSalary +
    "\nShift: " + shift
);
alert(
    "Name: " + name +
    "\nAge: " + age +
    "\nYears of Experience: " + yearsOfExperience +
    "\nExperience Level: " + yearsOfExp +
    "\nSelf Rating with if: " + selfRating +
    "\nExperience Level: " + experienceLevel +
    "\nSelf Rating with switch: " + rating +
    "\nSalary: " + Salary +
    "\nBonus: " + bonus +
    "\nTotal Salary: " + FinalSalary +
    "\nShift: " + shift
);