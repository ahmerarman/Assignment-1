/*
Author: Ahmer Arman
Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged,
 return the new array and store it in a separate array.
 Call show_magicians() with each array to show
 that you have one array of the original names and
 one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var modifiedMagicianNames = make_great(__spreadArray([], magicianNames, true)); // Using spread operator to create a copy
console.log("Original Magician Names:");
show_magicians(magicianNames);
console.log("\nModified Magician Names:");
show_magicians(modifiedMagicianNames);
