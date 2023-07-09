/*
Author: Ahmer Arman
Your Own Array: Think of your favorite mode of transportation,
 such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
*/

const transportationModes: string[] = ['car', 'motorcycle', 'bicycle', 'train'];
for (let i=0; i<transportationModes.length; i++) {
  const mode: string = transportationModes[i];

  switch (mode) {
    case 'car':
      console.log('I would like to own a BMW car.');
      break;
    case 'motorcycle':
      console.log('I would like to own a Honda motorcycle.');
      break;
    case 'bicycle':
      console.log('I would like to ride a mountain bicycle.');
      break;
    case 'train':
      console.log('I would like to travel by high-speed train.');
      break;
    default:
      console.log('Unknown transportation mode.');
      break;
  }
}
