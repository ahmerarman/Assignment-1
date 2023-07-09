/*
Author: Ahmer Arman
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

let cars: string = "subaru";
let age: number = 10;
let fruits: string[] = ["apple", "banana", "orange"];
console.log("Is car == ‘subaru’? I predict " + (cars == "subaru"));
console.log(cars == "subaru");
console.log("Is car != ‘honda’? I predict " + (cars != "honda"));
console.log(cars != "honda");
console.log("Is car === ‘Subaru’? I predict " + (cars === "Subaru"));
console.log(cars === "Subaru");
console.log("Is car !== ‘honda’? I predict " + (cars !== "honda"));
console.log(cars !== "honda");
console.log("Is age > 5? I predict " + (age > 5));
console.log(age > 5);
console.log("Is age < 3? I predict " + (age < 3));
console.log(age < 3);
console.log("Is age >= 10? I predict " + (age >= 10));
console.log(age >= 10);
console.log("Is age <= 8? I predict " + (age <= 8));
console.log(age <= 8);
console.log("Is car == ‘subaru’ && age > 5? I predict " + (cars == "subaru" && age > 5));
console.log(cars == "subaru" && age > 5);
console.log("Is car == ‘honda’ || age > 10? I predict " + (cars == "honda" || age > 10));
console.log(cars == "honda" || age > 10);
console.log("Is ‘banana’ in fruits? I predict " + ("banana" in fruits));
console.log("banana" in fruits);
console.log("Is ‘grape’ not in fruits? I predict " + ('grape' !in fruits));
console.log("grape" !in fruits);
