// ## Listing 3.7 - function in js
/*
function sum(first, second) {
	return first + second;
}

let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
*/

// Listing 3.8 - checking types in js
/*function sum(first, second) {
	if (typeof first == "number" && typeof second == "number") {
		return first + second;
	}
	throw Error("Expected two numbers.");
}

let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
*/

// Listing 3.9 - using ts to express types
/*
function sum(first:number, second:number) {
    return first + second;
}

let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
*/


// TypeScript compiler processes the index.ts file.
// Listing 3.9 - using ts to express types
/*
 npm run use_ts
 */


// Listing 3.11 - Supporting multiple types with index.ts file.
/*function sum(first: number, second: number) {
    if (typeof second == "string") {
        return first + Number.parseInt(second);
    } else {
        return first + second;
    }
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${ typeof result}`);
result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);*/

// Listing 3.12 - Using a type union in index.ts file.
/*
function sum(first: number, second: number | string) {
    if (typeof second == "string") {
        return first + Number.parseInt(second);
    } else {
        return first + second;
    }
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
*/



// Listing 3.13 - TypeScript compiler response to a type mismatch.
/*
function sum(first: number, second: number | string) {
    return first + second;
}
let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);

*/


// 3.14 Resolving ambiguity with the as keyword and any type.
/*
function sum(first: number, second: number | string) {
    return first + (second as any);
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
*/


// Defining Variables and Constants

// Listing 3.15  - Defining variables with let and constants with const.
/* let condition = true;
let person = "Bob";
const age = 40;*/


// Listing 3.16 - Specifying types in index.ts.
/*let condition: boolean = true;
let person: string = "Bob";
const age: number = 40;

// Listing 3.17 - Define variable without a value.
let place;
console.log("Place value: " + place + " Type: " + typeof(place));
place = "London";
console.log("Place value: " + place + " Type: " + typeof(place));*/


// Listing 3.18 - Assigning null, oddly is an object.
/*
let condition: boolean = true;
let person: string = "Bob";
const age: number = 40;

// Listing 3.17 - Define variable without a value.
let place;
console.log("Place value: " + place + " Type: " + typeof(place));
place = "London";
console.log("Place value: " + place + " Type: " + typeof(place));
place = null;
console.log("Place value: " + place + " Type: " + typeof(place));*/


// Listing 3.19 Using a type union in the index.ts file.
/*
let condition: boolean = true;
let person: string = "Bob";
const age: number = 40;

let place: string | undefined | null;
console.log("Place value: " + place + "Type: " + typeof(place));
place = "London";
console.log("Place value " + place + "Type: " + typeof(place));
place = null;
console.log("Place value: "+ place + "Type: " + typeof(place));
*/


// JavaScript Primitive Types...

// Booleans

// Listing 3.20 - Defining boolean values in  index.ts.
/*
let firstBool = true;
let secondBool = false;
*/

// Strings

// Listing 3.21 - Defining string variables in index.ts.
/*
let firstString = "This is a string";
let secondString = 'This is also a string';
*/


// Listing 3.22 - Using Template strings in index.ts.
/*
let place: string | undefined | null;
console.log(`Place value: ${place} Type: ${ typeof(place)}`);
*/


// Working with Numbers

// Listing 3.23 - Defining number values in index.ts.
/*let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;*/


// Null and undefined values.
// Can only assign these values to variables whose type is a union that includes null or undefined.

// Listing 3.24 Assigning null and undefined values.
/*
let person1 = "Alice";
let person2: string | undefined = "Bob";

console.log("Person value: " + person1 + "  Type: " + typeof(person1));
console.log("Person value: " + person2 + "  Type: " + typeof(person2));
*/


// Implementing JS operators:

// Using Conditional Statements
// Listing 3.25 using the if/else and switch conditional statements.

/*
let firstName = "Jacqui";

if (firstName == "Adam") {
    console.log("first name is Adam");
} else if (firstName == "Jacqui") {
    console.log("first name is Jacqui");
} else {
    console.log("first name is neither Adam nor Jacqui");
}

switch (firstName) {
    case "Adam":
        console.log("first name is Adam");
        break;
    case "Jacqui":
        console.log("first name is Jacqui");
        break;
    default:
        console.log("first name is neither Adam nor Jacqui");
        break;
}
*/

// The equality operator - tries to coerce operands into the same type.

// Listing 3.26 - Using the equality operator.
/*
let firstVal: any = 5;
let secondVal: any = "5";

if (firstVal == secondVal) {
    console.log("They are the same.");
} else {
    console.log("They are not the same");
}
*/

// The identity operator ensures values and types are the same.

// Listing 3.27: Using the identity Operator.
/*
let firstVal : any = 5;
let secondVal: any = "5";

if (firstVal === secondVal) {
    console.log("They are the same.");
} else {
    console.log("They are not the same.");
}
*/

// TypeScript compiler detects when variable types aren't matching.

// Listing 3.28 - Removing the variable type annotation.
/*
let firstVal = 5;
let secondVal = "5";

if (firstVal === secondVal) {
    console.log("They are the same.");
} else {
    console.log("They are not the same.");
}
*/

/*

Understanding Truthy and Falsy Values
One consequence of type coercion is JavaScript truthiness. A truthy value
is one that evaluates to true when coerced to a Boolean value, and a falsy value is
one that evaluates to false when coerced to a Boolean value.

Every value is truthy except false, 0, -0, "" (the empty string), null, undefined, and NaN.
Often used to check that a variable has been assigned a value.

Like this expression:
    ...
if (customer) {
...
*/

// Using Null and Nullish coalescing operators.
// Allowing a fallback value to be used instead of null or undefined values.
// The || operator returns the left-hand operand if it evaluates as truthy and returns the right-hand
// operand otherwise.

// Listing 3.29 - Using the null coalescing operator.

/*
let val1: string | undefined;
let val2: string | undefined = "London";

let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";

console.log(`Result 1: ${coalesced1}  Type: ${typeof(coalesced1)}`);
console.log(`Result 2: ${coalesced2}  Type: ${typeof(coalesced2)}`);
*/


// Listing 3.30 - An unexpected null coalescing result.
/*let val1: string | undefined;
let val2: string | undefined = "London";
let val3: number | undefined = 0;

let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";
let coalesced3 = val3 || 100;

console.log(`Result 1: ${coalesced1}  Type: ${typeof(coalesced1)}`);
console.log(`Result 2: ${coalesced2}  Type: ${typeof(coalesced2)}`);
console.log(`Result 3: ${coalesced3}  Type: ${typeof(coalesced3)}`);*/


// Using the coalescing operator returns the right hand operand
// when the left hand operand is null or undefined.

// Listing 3.31 - Using the nullish coalescing operator.
/*
let val1: string | undefined;
let val2: string | undefined = "London"
let val3: number | undefined = 0;


let coalesced1 = val1 ?? "fallback value";
let coalesced2 = val2 ?? "fallback value";
let coalesced3 = val3 ?? 100;

console.log(`Result 1: ${coalesced1} Type: ${typeof (coalesced1)}`);
console.log(`Result 2: ${coalesced2} Type: ${typeof (coalesced2)}`);
console.log(`Result 3: ${coalesced3} Type: ${typeof (coalesced3)}`);
*/


// Invoking the toFixed method, making sure that the count variable hasn’t been assigned
// null or undefined.

// Listing 3.32 - Guarding against null or undefined values in .ts files.
/*let count: number | undefined | null = 100;
if (count != null && count != undefined) {
    let result1: string = count.toFixed(2);
    console.log(`Result 1: ${result1}`);
}*/

// Optional chaining operator (?) simplifies the guarding process.

// Listing 3.33: Using the optional chaining operator.
/*
let count: number | undefined | null = 100;
if (count != null && count != undefined) {
    let result1: string = count.toFixed(2);
    console.log(`Result 1: ${result1} Type: ${typeof (result1)}`);
}

let result2: string | undefined = count?.toFixed(2);
console.log(`Result 2: ${result2} Type: ${typeof (result2)}`);
*/


// Defining and using functions.  If a function defines parameters,
// then TypeScript requires type annotations, TypeScript will allow
// functions to be invoked only when the number of arguments
// matches the number of parameters.

// Listing 3.34: - Defining a function in the index.ts file.
/*function writeValue(val: string | null) {
    console.log(`Value: ${val ?? "Fallback value"} Type: ${typeof (val)}`);
}

writeValue("London");
writeValue(null);
writeValue("Merton");
*/


// Defining optional parameters in ts,
// the ? character is used to define an optional parameter.

// Listing 3.35 - Defining an optional parameter.
/*
function writeValue(val?: string)  {
    console.log(`Value: ${val ?? "Fallback value"}`);
}

writeValue("London");
writeValue();
*/

// Defining the default parameter values.
// Can be useful to avoid dealing with undefined values as the function is invoked without an argument.

// Listing 3.36 - Defining a default parameter value.
/*
function writeValue(val: string = "default value") {
    console.log(`Value: ${val}`);
}

writeValue("London");
writeValue();
*/


// Rest parameters are used to include additional arguments when a function is invoked.

// Listing 3.37 - Using a rest parameter.
/*
function writeValue(val: string,...extraInfo: string[]) {
    console.log(`Value: ${val}, Extras: ${extraInfo}`);
}

writeValue("London", "Raining", "Cold");
writeValue("Paris", "Sunny");
writeValue("New York");
*/

// Defining functions that returns results.
// Declare the return data type with the return keyword.

// Listing 3.38 - Returning function results in ts.
/*function composeString(val: string) : string {
    return `Composed string: ${val}`;
}

function writeValue(val?: string) {
    console.log(composeString(val ?? "Fallback value"));
}

writeValue("London");
writeValue();*/


// Using functions as arguments to other functions...
// Below writeCity function defines a parameter called f, which is a function that it invokes
// to get the value to insert into the string it writes out.
// TypeScript requires the function parameter to be described
// so that the types of its parameters and results are declared

// Listing 3.39 - Using a function as an argument to another function.
/*function getUKCapital() : string {
    return "London";
}

function writeCity(f: () => string) {
    console.log(`City ${f()}`);
}

writeCity(getUKCapital);*/

// Defining functions using the arrow syntax.

// Listing 3.40 - Defining an arrow function.
/*
function getUKCapital() : string {
    return "London";
}

function writeCity(f: () => string) {
    console.log(`City: ${f()}`);
}

writeCity(getUKCapital);
writeCity(() => "Paris");
*/


// Understanding value closure.
// Functions can access values defined in the surrounding code.

// Listing 3.41  Using a closure
/*
function getUKCapital() : string {
    return "London";
}

function writeCity(f: () => string) {
    console.log(`City: ${f()}`);
}

let myCity= "Rome";
writeCity(getUKCapital);
writeCity(() => "Paris");

writeCity(() => myCity);
*/


// Working with arrays

// Listing 3.42 - Creating and populating an array.
/*
let myArray = [];
myArray[0] = "100";
myArray[1] = "Phil";
myArray[2] = true;

console.log(myArray);
*/

// Listing 3.43 - Using a type annotation in the index.ts.
/*
let myArray: any[] = [];
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

console.log(myArray);
*/

// Listing 3.44 - Restricting array value types.
/*
let myArray: (number | string | boolean)[] = [];
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;

console.log(myArray);
*/

// Listing 3.45 - Populate array in a single statement.
/*let myArray: (number | string | boolean)[] = [100, "Adam", true];

console.log(myArray)*/;

// Listing 3.46 - Reading data from an array.

/*
let myArray: (number | string | boolean)[] = [100, "Adam", true];
let val = myArray[0];

console.log(`Value: ${val}`);
*/


// Listing 3.47 - Modifying contents of an array.
/*
let myArray: (number | string | boolean)[] = [100, "Adam", true];

myArray[0] = "Tuesday";

let val = myArray[0];
console.log(`Value: ${val}`);
*/


// Enumerating the contents of an array.
// Using a for loop or the forEach method.

// Listing 3.48 - Enumerating the contents of an array.
/*
let myArray: (number | string | boolean)[] = [100, "Adam", true];

for (let i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}

console.log("---");

myArray.forEach((value, index) =>
    console.log("Index " + index + ": " + value));
*/

// Using the spread operator to expand an array's contents that
// can be used as function arguments or combined with other arrays.

// Listing 3.49 - Expand an array's items, then combine them with another array.
/*
let myArray: (number | string | boolean)[] = [100, "Adam", true];
// The spread operator is an ellipsis (...), this causes the array to be unpacked.
let otherArray = [...myArray, 200, "Bob", false];

    // for (let i = 0; i < myArray.length; i++) {
    //     console.log("Index " + i + ": " + myArray[i]);
    // }
    //
    // console.log("---")

otherArray.forEach((value, index) =>
    console.log("Index " + index + ": " + value));

*/

// Working with objects.
// Object properties contain a name and value.

// Listing 3.50 - Creating an object.
/*
   let hat = {
        name: "Hat",
        price: 100
    };

    let boots = {
        name: "Boots",
        price: 120
    };

    console.log(`Name: ${hat.name}, Price: ${hat.price}`);
    console.log(`Name: ${boots.name}, Price: ${boots.price}`);
 */

// Understanding Literal Object Types.
// If the TypeScript compiler encounters a literal object, it infers its type.
// Using type annotations allows the shape of the object to described or as function parameters.

// Listing 3.51 - Describing an object type.
/*
    let hat = {
        name: "Hat",
        price: 100
    };

    let boots = {
        name: "Boots",
        price: 500
    };

    function printDetails(product : { name: string, price: number }) {
        console.log(`Name: ${product.name} Price: ${product.price}`);
    }
    printDetails(hat);
    printDetails(boots);
*/

// Listing 3.52 - Adding a property.
/*
let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: 150,
    category: "Snow Gear"
};

function printDetails(product : { name: string, price: number }) {
    console.log(`Name: ${product.name} Price: ${product.price}`);
}
printDetails(hat);
printDetails(boots);
*/

// Define Optional properties in a type annotation.
// Can use a question mark to denote an optional property,
// Means the property category type is string | undefined.

// Listing 3.53 - Defining an optional property.
/*
let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: 150,
    category: "Snow Gear"
};

function printDetails(product : { name: string, price: number, category?: string }) {
    if (product.category != undefined) {
        console.log(`Name: ${product.name}, Price: ${product.price}, ` + `Category: ${product.category}`);
    } else {
        console.log(`Name: ${product.name}, Price: ${ product.price}`);
    }
}

printDetails(hat);
printDetails(boots);
*/


// Defining Classes.
// Classes are templates used to create objects.
// Class keyword declares a class followed by the name of the class.

// Constructor function invoked when a new object is created using the class,
// define setup and populate data values.

// Constructor (example below) uses parameters (name, price, category) to define the object properties,
// which are used to assign values to those properties.

// Listing 3.54 - Defining a class and using it to create objects.
/*
    class Product {
        constructor(name: string, price: number, category?: string) {
            this.name = name;
            this.price = price;
            this.category = category;
        }
        name: string
        price: number
        category?: string
    }
    // The new keyword uses the class to create an object,
    // passing arguments to be used by the constructor function.
    let hat = new Product("Hat", 100);

    let boots = new Product("Boots", 100, "Snow Gear");

    let clothes = new Product("Clothes", 300, "Snow Suit");

    function printDetails(product : { name: string, price: number, category?: string }) {
        if (product.category != undefined) {
            console.log(`Name: ${product.name}, Price: ${product.price}, ` + `Category: ${product.category}`);
        } else {
            console.log(`Name: ${product.name}, Price: ${product.price}`);
        }
    }

    printDetails(hat);
    printDetails(boots);
    printDetails(clothes);
*/


// Adding Methods to a Class.
// Method gains access to the  properties using the this keyword.

// Listing 3.55 - Defining method in a class
/*
class Product {

    constructor(name: string, price: number, category?: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    name: string
    price: number
    category?: string

    printDetails() {
        if (this.category != undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, ` +  `Category: ${this.category}`);
        } else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}

    let hat = new Product("Hat", 100);
    let boots = new Product("Boots", 160, "Snow Gear");
    let clothes = new Product("Clothes", 300, "Snow Suit");

// Invoking Methods through the object.
hat.printDetails();
boots.printDetails();
clothes.printDetails();
*/

// Access controls and simplified constructors
// Simplifying the class using the public control keyword within
// the constructor,  generates the constructor parameters.

// Listing 3.56 - Simplifying the class with the public keyword.
/*
class Product {

    constructor(public name: string, public price: number, public category?: string) {
        // this.name = name;
        // this.price = price;
        // this.category = category;
    }

    // name: string
    // price: number
    // category?: string

    printDetails() {
        if (this.category != undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, `
            + `Category: ${this.category}`);
        } else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }

}

let hat = new Product("Hat", 100);

let boots = new Product("Boots", 100, "Snow Gear");

hat.printDetails();
boots.printDetails();
*/

// Inheriting behaviour from other classes.
// The extends keyword is used to declare the class that will be inherited from,
// known as the super-class or base class.

// Listing 3.57 Using Class inheritance.
/*
class Product {

    constructor(public name: string, public price: number, public category?: string) {
    }

    printDetails() {

        if (this.category != undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, ` + `Category: ${this.category}`);
        } else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}

class DiscountProduct extends Product {

    constructor(name: string, price: number, private discount: number) {
        super(name, price - discount);
    }
}

let hat = new DiscountProduct("Hat", 100, 10);

let boots = new Product("Boots", 100, "Snow Gear");

hat.printDetails();
boots.printDetails();
*/

// Checking object types.
// Using an object value and the class keyword instanceof in the expression will then return true.

// Listing 3.58 - Checking object type.
/*
class Product {
    constructor(public name: string, public price: number, public category?: string) {
    }
    printDetails() {
        if (this.category != undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, ` + `Category: ${this.category}`);
        } else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}

class DiscountProduct extends Product {

    constructor(name: string, price: number, private discount: number) {
        super(name, price - discount);

    }
}

let hat = new DiscountProduct("Hat", 100, 10);
let boots = new Product("Boots", 100, "Snow Gear");

console.log(`Hat is a Product? ${hat instanceof Product}`);
console.log(`Hat is a DiscountProduct? ${hat instanceof DiscountProduct}`);
console.log(`Boot is a Product? ${boots instanceof Product}`);
console.log("Boots is a DiscountProduct? " + (boots instanceof DiscountProduct));
*/


// Creating and using modules
// Files added to projects are modules and as dependencies are resolved and loaded at runtime.
// See:  modules/name.ts
// Listing 3.59 - The contents of the name.ts file in the module folder.


// Listing 3.60 - The contents of weather.ts file in the modules folder.

// Listing 3.61 - Importing the specific types with the index.js file.
/*
import { Name } from "./modules/name";
import { WeatherLocation } from "./modules/weather";

let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("Sunny", "London");

console.log(name.nameMessage);
console.log(loc.weatherMessage);
*/

// Listing 3.62 - Contents of the index.ts file in modules/index.ts.

// Listing 3.63 - Importing a module folder in the index.ts file.
import { Name, WeatherLocation } from "./modules";

let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");

console.log(name.nameMessage);
console.log(loc.weatherMessage);














































