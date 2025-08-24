// Type Alias

// Alias => Yeh aik type ka nick name/short name hai jis ki help se hum code ko reuseable aur readable bana sakte hain

// Note: Alias ko hamesha Capital letter se start karen like Name, Age, Obj etc or han type aik keyword jo alias k saath use karna zaroori hai

// Array Object
type SMITStudent = {
    name: string;
    age: number;
    isActive: boolean;
    rollNo: string;
}

const student1: SMITStudent = {
    name: "Hashim",
    age: 24,
    isActive: true,
    rollNo: "WMA-69189",
}
// Note: Key values ka order upar neeche hosakta hai like name ki jagah age aur age ki jagah name aasakata hai lekin length same honi chahiye yani jitni keys: values aapke alias mein hain utni hi aap k object mein honi chahiye

// Array Aliases
type Names = string[];
const Names = ["Ali", "Khan", "Hashim"];

// Array in object Aliases
type StudentInfo = {
    id: number,
    name: string,
    age: number,
    isEnrolled: boolean,
};
const studentData: StudentInfo[] = [
    { id: 1, name: "Hashim", age: 22, isEnrolled: true },
    { id: 2, name: "Ali", age: 23, isEnrolled: true },
    { id: 3, name: "Khan", age: 20, isEnrolled: false },
]

// Array String, Number, Boolean Aliases
type Naam = string;
type Umar = number;
type StudentHoon = true;

const age: Umar = 23;
const myName: Naam = "Hashim";
const isStudent: StudentHoon = true;