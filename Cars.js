/*
Author: Ahmer Arman
Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs,
 such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly.
*/
/*
In this code, we define a function store_car_info()
 that takes a required manufacturer and model as parameters,
 and uses the rest parameter ...kwargs to accept an arbitrary number of keyword arguments.
Inside the function, we create an empty object called carInfo.
 The required manufacturer and model are stored as properties in the object.
Using a for loop, we iterate over each keyword argument in kwargs.
 Each keyword argument is an array containing the key and value.
 We extract the key and value from the array and assign it as a property-value pair in the carInfo object.
Finally, the carInfo object is returned.
We call the store_car_info() function with the required manufacturer and model,
 along with two other name-value pairs: ['color', 'blue'] and ['year', 2022].
 The function returns an object which is stored in the carInfo variable.
We then use console.log() to print the carInfo object.
The printed output shows the object carInfo containing
 the manufacturer, model, color, and year of the car.
 The information is stored correctly in the object.
*/
function store_car_info(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < kwargs.length; i++) {
        var _a = kwargs[i], key = _a[0], value = _a[1];
        carInfo[key] = value;
    }
    return carInfo;
}
var carInfo = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
console.log(carInfo);
