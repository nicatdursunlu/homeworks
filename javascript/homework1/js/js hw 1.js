//  JS homework 1

let name = prompt("Name ");
let age = prompt("Age: ");

if (age < 18)
    alert("You are not allowed to visit this website.");


else if (age >= 18 && age <= 22) {
    let query = confirm("Are you sure you want to continue?");
    if (query){
        alert("Welcome, "+ name);
    }
    else{
        alert("You are not allowed to visit this website");
    }
}

else if(age >= 22){
    alert("Welcome, "+ name);
}