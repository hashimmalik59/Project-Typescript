// TS simple type

// Type Assignment
// Jab hum varaible, banate hain to 2 tareeqo se banate hain:
// 1. Explicit => is mein hum pehle se declare kardeta hain k hamari value ka type yeh hai like: string
// 2. Implicit => is mein hum pehle se declara nahi karte lekin TS value ko dekh pehchan leta hai k ye string, number, boolean etc

// Explicit Assignment
const firstName: string = "Hashim";
// Note: TS error dega jab mein ne firstName mein string type k elawa kisi type ki value di

// Implicit Assignment
let lastName = "Malik"; // infer
lastName = "Ahmad";

// infer => yeh keyword TS ko bolta hai k bhai tu khud hi value ka type guess kar de