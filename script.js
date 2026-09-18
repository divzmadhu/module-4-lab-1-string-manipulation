/**
 * Title: Module 4 Lab 1 - String Manipulation
 * Description: Practices string manipulation using custom functions.
 * Author: DJ
 * Date: 09-17-2026
 */




// Task 01 - Flexible String Manipulation with Functions

function display() {
    return ("Invalid Input");
}

function getInput() {
    let firstName = prompt("Enter your first Name: ")
    let lastName = prompt("Enter your Last Name: ")
    if (firstName == "" || lastName == "") {
        disp = display();
        console.log(disp);
    }
    else {
        formatFullName(firstName, lastName);

    }

}



function formatFullName(firstName, lastName) {

    let fn = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let ln = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    fullName = firstName + " " + lastName;
    console.log("Full Name is " + fullName + ".")

}
//getInput()



// Task 2: Mathematical Operations with Multiple Parameters

// function getInput2()
// {
//     let price=parseFloat(prompt("Enter the price: "));
//     let quantity=parseFloat(prompt("Enter the quantity: "));
//     let taxRate =parseFloat(prompt("Enter the taxRate: "));

//     if(isNaN(price)|| isNaN(quantity) || isNaN(taxRate))
//     {
//         disp=display();
//         console.log(disp);

//     }
//     else
//     {
//          let totalCost =calculateTotalCost(price, quantity, taxRate);
//          console.log(totalCost);

//     }
// }

// function calculateTotalCost(price, quantity, taxRate)
// {
//     let totalCost =parseFloat((price * quantity) * (1 + taxRate));
//     return(totalCost)

// }
// getInput2()

//Task 3: Functions with Conditional Logic

function getInput3() {

    let age = prompt("Enter your age : ");
    let isEmployed = prompt("Are you employed (Y/N) : ");

    if (age === null || age.trim() === "" || isEmployed === null || isEmployed.trim() === "") {
        let disp = display();
        console.log(disp);
    }
    else {
        isEmployed = isEmployed.toUpperCase();

        if (isEmployed !== "Y" && isEmployed !== "N") {
            let disp = display();
            console.log(disp);
        }
        else {
            age = Number(age);
            checkEligibility(age, isEmployed);
        }
    }
}

function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed == 'Y') {
        console.log("They are eligible");
    }
    else if (age > 18 && isEmployed === 'N') {
        console.log("They are conditionally eligible");
    }
    else if (age <= 18) {
        console.log("They are not eligible!");
    }

}
//getInput3();



//Task 4 Refactoring for Reusability

function getInput2() {
    let price = parseFloat(prompt("Enter the price: "));
    let quantity = parseFloat(prompt("Enter the quantity: "));
    let taxRate = parseFloat(prompt("Enter the Tax Rate: "));
    let disChoice = prompt("Would you like to have a discount(Y/N)? : ");
    let discount = 0;

    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate) || disChoice === null || disChoice.trim() === "") {
        let disp = display();
        console.log(disp);

    }
    else {

        disChoice = disChoice.toUpperCase();
        if (disChoice !== 'Y' && disChoice !== 'N') {
            let disp = display();
            console.log(disp);

        }
        else if (disChoice === 'N') {
            let totalCost = calculateTotalCost(price, quantity, taxRate)
            console.log("Total Cost is " + totalCost);
        }
        else {
            let totalCost = calculateTotalCost(price, quantity, taxRate, 5)
            console.log("Total Cost is " + totalCost);
        }

    }

}

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    let totalCost = parseFloat(((price * quantity) - discount) * (1 + taxRate));
    return (totalCost);

}
//getInput2();


let choice;

do {
    choice = Number(prompt("Menu \n1. Task-1\n2. Task-2 & Task-4 ( combined )\n3. Task-3 \n4. Exit\n\nEnter your choice (1/2/3/4) : "));
    switch (choice) {
        case 1:
            console.log("Executing Task 1 .....\n");
            getInput();
            break;

        case 2:
            console.log("Executing Task 2 & Task 4  .....\n");
            getInput2();
            break;
        case 3:
            console.log("Executing Task 3 .....\n");
            getInput3();
            break;
        case 4:
            console.log("Exiting.....\n");
            break;
        default:
            console.log("Invalid Entry");
    }
} while (choice != 4);