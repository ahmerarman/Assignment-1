/*
Author: Ahmer Arman
Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same,
 but each message should be personalized with the person’s name.
*/

const names4: string[] = ['Usman', 'Rafi ul Aziz', 'Mirza Nadeem', 'Azhar', 'Junaid Ahmed Ghazali', 'Mahmood', 'Shoaib'];
for (let i=0; i<names4.length; i++) {
    const message: string = `Hello, ${names4[i]}! You’re an amazing friend.`;
    console.log(message);  
}
