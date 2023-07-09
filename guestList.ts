/*
Author: Ahmer Arman
Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.
*/

const dinnerGuests: string[] = ['Mirza Nadeem', 'Azhar', 'Junaid Ahmed Ghazali'];
for (let i=0; i<dinnerGuests.length; i++) {
  const guest: string = dinnerGuests[i];
  console.log(`Dear ${guest}, you are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}

//Excercise # 15
//Changing the Guest List
const guestCannotMakeIt: string = dinnerGuests[1]; // Assuming the second guest can’t make it
const newGuest: string = 'Rafi ul Aziz'; // New person to invite
console.log(`${guestCannotMakeIt} can’t make it to the dinner.`);
dinnerGuests[1] = newGuest; // Replace the guest who can’t make it with the new guest
for (let i=0; i<dinnerGuests.length; i++) {
  const guest: string = dinnerGuests[i];
  console.log(`Dear ${guest}, you are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}

//Excercise # 16
//Find a bigger table
console.log('Good news! I found a bigger dinner table.');
// Add new guests to the array
dinnerGuests.unshift('Mahmood'); // Add one guest to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length/2), 0, 'Usman'); // Add one guest to the middle
dinnerGuests.push('Mahwish'); // Append one guest to the end
// Print invitation messages for all guests
for (let i=0; i<dinnerGuests.length; i++) {
  const guest: string = dinnerGuests[i];
  console.log(`Dear ${guest}, you are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}

//Exercise # 17
//Remove from array
console.log('Unfortunately, the new dinner table won’t arrive in time. I can only invite two people for dinner.');
while (dinnerGuests.length > 2) {
  const removedGuest: string = dinnerGuests.pop()!;
  console.log(`Sorry, ${removedGuest}, I can’t invite you to dinner this time.`);
}
console.log(`The number of people invited to dinner is ${dinnerGuests.length}.`); //Exercise # 19: Display # of guests
for (let i=0; i<dinnerGuests.length; i++) {
  const guest: string = dinnerGuests[i];
  console.log(`Dear ${guest}, you are still invited to dinner at my place.`);
}
dinnerGuests.splice(0); // Remove the last two names from the list
console.log('Updated guest list:', dinnerGuests);
