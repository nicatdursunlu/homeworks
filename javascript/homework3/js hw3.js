//  JS homework 3

function createNewUser() {
    let firstname = prompt("Enter the fisrtname: ");
    let lastname = prompt("Enter the lastname: ");

    let newUser = {

        firstname: firstname,
        lastname: lastname,

        getLogin() {
            alert(newUser.firstname.charAt(0).toLowerCase() + newUser.lastname.toLowerCase()) ;
        }
    };

    newUser.getLogin();
}

let user = {
    result: createNewUser()
};