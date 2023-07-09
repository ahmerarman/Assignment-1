/*
Author: Ahmer Arman
Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let firstName: string = "Ahmer"; //Declare variable and assign value
let lastName: string = "Arman";

console.log("Lower case : " + firstName.toLowerCase() + " " + lastName.toLowerCase()); //Change value into lowercase
console.log("Upper case : " + firstName.toUpperCase() + " " + lastName.toUpperCase()); //Change value into UPPERCASE

console.log("Title case : " + firstName + " " + lastName);