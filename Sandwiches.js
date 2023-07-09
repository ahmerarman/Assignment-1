/*
Author: Ahmer Arman
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.
*/
function order_sandwich(items) {
    console.log("Sandwich Order Summary:");
    console.log("Bread: Whole Wheat");
    console.log("Items: " + items.join(", "));
    console.log("Enjoy your sandwich!");
    console.log("-----------------------");
}
order_sandwich(['Cheese', 'Lettuce', 'Tomato']);
order_sandwich(['Turkey', 'Bacon', 'Avocado', 'Mayonnaise']);
order_sandwich(['Ham', 'Swiss Cheese']);
