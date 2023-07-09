/*
Author: Ahmer Arman
Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same,
 but each message should be personalized with the person’s name.
*/
var names4 = ['Usman', 'Rafi ul Aziz', 'Mirza Nadeem', 'Azhar', 'Junaid Ahmed Ghazali', 'Mahmood', 'Shoaib'];
for (var i = 0; i < names4.length; i++) {
    var message = "Hello, ".concat(names4[i], "! You\u2019re an amazing friend.");
    console.log(message);
}
