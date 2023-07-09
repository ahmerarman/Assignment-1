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

function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      modifiedMagicians.push(`${magicians[i]} the Great`);
    }
    return modifiedMagicians;
  }
  let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  let modifiedMagicianNames = make_great([...magicianNames]); // Using spread operator to create a copy
  console.log("Original Magician Names:");
  show_magicians(magicianNames);
  console.log("\nModified Magician Names:");
  show_magicians(modifiedMagicianNames);
