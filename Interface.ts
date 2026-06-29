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

interface admin extends User{
    isadmin:boolean
}

interface superadmin extends admin{
    issuperadmin?:boolean
}

// ============================================
// Function with Interface parameter
// obj: User means:
// The function only accepts objects
// that follow the User interface structure
// :void means:
// Function does not return any value
// ============================================

function inforamtion(c: superadmin): void {


    // Accessing object properties
    console.log(
        c.age,
        c.department,
        c.universty,
        c.issuperadmin
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
    universty: "AWKUM",
    isadmin: false,
    issuperadmin: true
});

// ============================================
// This will also work because department is optional
// ============================================

inforamtion({
    name: "Ali",
    age: 22,
    universty: "AWKUM",
    department: "Software Engineering",
    isadmin: true,
});

interface Student{
    name:string
    Age : number
    CNIC: number
}

interface Educationinfo extends Student{
        Department: string,
        Decipline:string,
        batch:number
}

function getdata(Data:Educationinfo):void{
    console.log(Data.Age,Data.CNIC,Data.Decipline,Data.Department,Data.batch,Data.name);
}
getdata({
    name: "Sudais",
    Age: 20,
    CNIC: 12334,
    Department: "CS",
    Decipline: "Software Engineering",
    batch: 18

});