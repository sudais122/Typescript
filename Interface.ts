// Interface in TypeScript
// Interface creates a custom type/structure
// It defines what properties an object should have

interface User {

    // Required property
    // Every User object MUST have a name
    name: string;
    // Required property
    age: number;
    // Required property
    universty: string;
    // Optional property
    // ? means this property is not required
    // Object can have it or skip it
    department?: string;
}



// ============================================
// Function with Interface parameter
// obj: User means:
// The function only accepts objects
// that follow the User interface structure
//
// :void means:
// Function does not return any value
// ============================================

function inforamtion(obj: User): void {


    // Accessing object properties
    console.log(
        obj.age,
        obj.department,
        obj.universty
    );

}



// ============================================
// Function call
//
// This object matches the User interface:
// name      -> string ✅
// age       -> number ✅
// universty -> string ✅
//
// department is optional, so we don't need to provide it
// ============================================

inforamtion({
    name: "Sudais",
    age: 20,
    universty: "AWKUM"
});



// ============================================
// This will also work because department is optional
// ============================================

inforamtion({
    name: "Ali",
    age: 22,
    universty: "AWKUM",
    department: "Software Engineering"
});