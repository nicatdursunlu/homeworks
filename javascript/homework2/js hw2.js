//  JS homework 2

function calculator(number1, number2, operator) {
    switch (operator) {
        case '+':
            alert(number1 + number2);
            break;
        case '-':
            alert(number1 - number2);
            break;
        case '*':
            alert(number1 * number2);
            break;
        case '/':
            alert(number1 / number2);
            break;
        default:
            alert("Try again");
    }
}

const num1 = +prompt("Enter the First number: ");
const num2 = +prompt("Eneter the Secons number: ");
const op = prompt("Enter the Operator: ");
calculator(num1, num2, op);
