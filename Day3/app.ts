// Typescript Arrays

let studentNames: string[] = ["Hashim", "Ahmad", "Malik"];
// ab is mein just string type hi aayega warna error

// readonly => is keyword se sirf value ko read kar sakte hain usko modify nahi kar saktein hain

const arr: readonly string[] = ["Ali", "Khan", "Zia"];

const arr2: [string, number] = ["Hashim", 24,]

// inference => yeh automatically type guess kar leta hai based on value, lekin agar reassignment ki to error
let isStudent = true; // ✅
isStudent = "Student hun bhai"; // error