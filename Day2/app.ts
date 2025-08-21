// Typescript simple types

// Type: any

// any => "any" keyword ki madad se hum value ko koi bhi type de saktein hain(any keyword sab JS k hawale kardeta hai)

let age: any = 24;
age = "Hashim";
age = true;
age.length;
// unknown => yeh bhi any ki tarhan same hai but, use karne se pehle iska type batana zaroori hai like;

let myName: unknown = "Hashim";
myName = 24;
myName: ["Hahsim", 24, true];
myName.toUpperCase(); // error(pehle batana padega k type kya hai phir use karoge)

// void => yeh hamesha kuch return nahi karega

function sayHello(): void {
    console.log("void use hua to return nahi hoga!");
    // return ("void use hua to return nahi hoga!"); // void mein hum return keyword use nahi kar sakte hain
}

// never => yeh never ending function hai

function fnc(): never {
    console.log("Yeh kabhi execute nahi hoga!");
}