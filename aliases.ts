// ==================================================
// TYPE ALIAS IN TYPESCRIPT
// ==================================================
//
// Type alias creates a custom type using "type" keyword.
//
// Syntax:
// type TypeName = {
//      property: type
// };
//
// It is used to avoid writing the same structure again
// and again.



// Creating a custom type

type User = {
    name: string;
    age: number;
    email: string;
};



// Now User works like a normal type

const user: User = {

    name: "Sudais",
    age: 20,
    email: "sudais@gmail.com"

};


console.log(user);





// ==================================================
// TYPE ALIAS WITH FUNCTION
// ==================================================

// Function parameter can use custom types


function showUser(data: User): void {

    console.log(
        data.name,
        data.age,
        data.email
    );

}


showUser({

    name:"Ali",
    age:22,
    email:"ali@gmail.com"

});





// ==================================================
// TYPE ALIAS WITH ARRAY
// ==================================================
//
// Creating a custom array type
// ==================================================


type Numbers = number[];


let marks: Numbers = [

    80,
    90,
    95

];





// ==================================================
// TYPE ALIAS WITH UNION
// ==================================================
//
// Type alias can store multiple possible values
// ==================================================


type Status = 

    "loading" |
    "success" |
    "error";



let currentStatus: Status = "loading";


// Error:
// currentStatus = "done";







// ==================================================
// INTERSECTION TYPES (&)
// ==================================================
//
// Intersection combines multiple types
//
// Meaning:
// New type must contain properties from ALL types
//
// Syntax:
// type NewType = TypeA & TypeB
// ==================================================



type Student = {

    name:string;
    age:number;

};



type Education = {

    department:string;
    university:string;

};




// Combining both types

type StudentInfo = Student & Education;



// StudentInfo now contains:
// name
// age
// department
// university


const student: StudentInfo = {

    name:"Sudais",
    age:20,
    department:"Software Engineering",
    university:"AWKUM"

};





// ==================================================
// Intersection with Function
// ==================================================


function printStudent(
    data: Student & Education
):void {


    console.log(

        data.name,
        data.department,
        data.university

    );


}



printStudent({

    name:"Ali",
    age:21,
    department:"CS",
    university:"AWKUM"

});







// ==================================================
// TYPE ALIAS + INTERSECTION
// (Real React style)
// ==================================================


type CommonProps = {

    id:number;
    createdAt:string;

};


type ProductProps = {

    title:string;
    price:number;

};



// Combining props

type Product = CommonProps & ProductProps;



const product: Product = {


    id:1,
    createdAt:"2026",

    title:"Laptop",
    price:50000

};






// ==================================================
// IMPORTANT NOTES
// ==================================================


// Type Alias:
// - Creates a custom type
// - Uses "type"
// - Can create objects
// - Can create arrays
// - Can create unions
// - Can create tuples


// Example:
//
// type ID = string | number;



// Intersection:
// - Uses "&"
// - Combines types
// - Requires ALL properties


// Example:
//
// type Admin = User & Employee;



// Difference:
//
// Union (|):
// Either this OR that
//
// Example:
// string | number
//
//
//
// Intersection (&):
// This AND that
//
// Example:
// User & Admin



// Interface vs Type:
//
// Interface:
// - mainly for objects
// - can extend
// - can merge
//
//
// Type:
// - more flexible
// - supports union
// - supports intersection
// - supports primitive types



// In React:
// Type aliases are commonly used for:
//
// - Component Props
// - API Response Types
// - State Types
// - Form Data Types