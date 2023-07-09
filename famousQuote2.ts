/*
Author: Ahmer Arman
Famous Quote 2: Repeat Exercise 4,
 but this time store the famous person’s name in a variable called famous_person.
 Then compose your message and store it in a new variable called message. Print your message.
*/
let author2: string = "Quaid e Azam Muhammad Ali Jinnah";
let quote2: string = "I do not believe in taking the right decision, I take a decision and make it right.";

let message: string = author2 + " once said, " + JSON.stringify(quote2);

console.log(message);