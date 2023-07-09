/*
Author: Ahmer Arman
Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.
*/
var dinnerGuests = ['Mirza Nadeem', 'Azhar', 'Junaid Ahmed Ghazali'];
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner at my place. It would be an honor to have you join us."));
}
//Excercise # 15
//Changing the Guest List
var guestCannotMakeIt = dinnerGuests[1]; // Assuming the second guest can’t make it
var newGuest = 'Rafi ul Aziz'; // New person to invite
console.log("".concat(guestCannotMakeIt, " can\u2019t make it to the dinner."));
dinnerGuests[1] = newGuest; // Replace the guest who can’t make it with the new guest
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner at my place. It would be an honor to have you join us."));
}
//Excercise # 16
//Find a bigger table
console.log('Good news! I found a bigger dinner table.');
// Add new guests to the array
dinnerGuests.unshift('Mahmood'); // Add one guest to the beginning
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, 'Usman'); // Add one guest to the middle
dinnerGuests.push('Mahwish'); // Append one guest to the end
// Print invitation messages for all guests
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner at my place. It would be an honor to have you join us."));
}
//Exercise # 17
//Remove from array
console.log('Unfortunately, the new dinner table won’t arrive in time. I can only invite two people for dinner.');
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can\u2019t invite you to dinner this time."));
}
console.log("The number of people invited to dinner is ".concat(dinnerGuests.length, ".")); //Exercise # 19: Display # of guests
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner at my place."));
}
dinnerGuests.splice(0); // Remove the last two names from the list
console.log('Updated guest list:', dinnerGuests);
