// Simple Type

// Type Annotation(Explicit): Is mein hum force fully batate hain k variable ka type kya hoga like: string, number, boolean etc.
var myName = "Hashim";
var myAge = 23;
var isStudent = true;

function sumTwoNum(num1, num2) {
    var num3 = num1 + num2;
    return num3;
}
sumTwoNum(3, 5);

var friends = ["abc", "def", "ghi"];

var myInfo = {
    name: "Hashim",
    age: 23,
    isStudent: true,
};

// Type Inference(Implicit): Is mein hum variable ka type khud define nahi karte hain TS khud samajh jata hai k is ka type kya hai like: string, number, boolean etc.
var meraName = "Hashim";
var meriAge = 23;
var kyaMeinStudentHun = true;

var fruits = ["Apple", "Banana", "Mango"];

var studentData = {
    name: "Hashim",
    age: 23,
    isStudent: true,
};

// Note: yahan TS value ko dekh kar samajh jata hai k uska type kya hai