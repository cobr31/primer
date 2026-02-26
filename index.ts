// Listing 3.7 - function in js
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
    console.log("first name is neither Adam or Jacqui");
}

switch (firstName) {
    case "Adam":
        console.log("first name is Adam");
        break;
    case "Jacqui":
        console.log("first name is Jacqui");
        break;
    default:
        console.log("first name is neither Adam or Jacqui");
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
let count: number | undefined | null = 100;
if (count != null && count != undefined) {
    let result1: string = count.toFixed(2);
    console.log(`Result 1: ${result1}`);
}
































