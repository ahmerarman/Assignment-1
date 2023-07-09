/*
Author: Ahmer Arman
Magicians: Make a array of magician’s names.
 Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.
*/
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
show_magicians(magicianNames);
