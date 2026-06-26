// TypeScript Special Types Examples

// 1. any
// Meaning: anything allowed
// TypeScript stops checking the type

let anything: any;

anything = "Hello";
anything = 100;
anything = true;
anything = [1, 2, 3];

console.log(anything);


// 2. unknown
// Meaning: unknown, check first
// Safer version of any
// You must check the type before using it

let unknownValue: unknown;

unknownValue = "TypeScript";
unknownValue = 50;


// Error:
// unknownValue.toUpperCase();

if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}


// 3. void
// Meaning: returns nothing
// Used for functions that do not return value

function printMessage(message: string): void {

    console.log(message);

}


// No return value
printMessage("Hello");


// ==========================================
// 4. undefined
// Meaning: no value assigned
// Variable exists but has no value
// ==========================================

let username: string | undefined;

console.log(username);


// Function can return undefined

function getName(): string | undefined {

    return undefined;

}


// 5. null
// Meaning: intentionally empty
// We manually set no value

let user: string | null = null;


// Later value can be assigned

user = "Sudais";

console.log(user);


// 6. never
// Meaning: never happens / returns
// Function never finishes normally


// Infinite loop example

function forever(): never {

    while (true) {

    }

}


// Error throwing example

function throwError(message: string): never {

    throw new Error(message);

}


// throwError("Something went wrong");

// Quick Summary

// any       -> anything allowed
// unknown   -> unknown, check first
// void      -> returns nothing
// undefined -> no value assigned
// null      -> intentionally empty
// never     -> never happens/returns