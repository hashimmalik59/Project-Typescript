// Simple Type

// Type Annotation(Explicit): Is mein hum force fully batate hain k variable ka type kya hoga like: string, number, boolean etc.

const myName: string = "Hashim";
const myAge: number = 23;
const isStudent: boolean = true;

function sumTwoNum(num1: number, num2: number): number {
    const num3: number = num1 + num2;
    return num3
}
sumTwoNum(3, 5)

const friends: string[] = ["abc", "def", "ghi"];

const myInfo: { name: string, age: number, isStudent: boolean } = {
    name: "Hashim",
    age: 23,
    isStudent: true,
}

// Type Inference(Implicit): Is mein hum variable ka type khud define nahi karte hain TS khud samajh jata hai k is ka type kya hai like: string, number, boolean etc.

const meraName = "Hashim";
const meriAge = 23;
const kyaMeinStudentHun = true;

const fruits = ["Apple", "Banana", "Mango"];

const studentData = {
    name: "Hashim",
    age: 23,
    isStudent: true,
};
// Note: yahan TS value ko dekh kar samajh jata hai k uska type kya hai