/*
Author: Ahmer Arman
Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.
*/
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("".concat(magicians[i], " the Great"));
    }
    return modifiedMagicians;
}
var magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
var modifiedMagicianNames = make_great(magicianNames);
show_magicians(modifiedMagicianNames);
