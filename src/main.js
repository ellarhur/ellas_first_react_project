// här SKAPAR jag en funktion. Olika sätt
function exempelFunktion () {
    console.log('En normal så kallad funktion i JS');
}
// Den dyker inte upp i webbläsaren. Jag måste ropa på den. Så att den kommer springande.

exempelFunktion();

const arrowFunktion = () => {
    console.log('Detta är en arrow funktion, den har en arrow.')
};
arrowFunktion();

// nästa sätt

function exempelFunktionMedReturn() {
    return "hej hej, detta är ett exempel på en funktion med return"
}
console.log(exempelFunktionMedReturn());

// nästa sätt


const arrowFunktionMedReturn = () => {
    return "detta är ett exempel på en arrow funktion med return!"
}
console.log(arrowFunktionMedReturn());

// nästa sätt


const arrowFunktionMedReturn2 = () => ("Arrow funktion med return utan måsvingar och ordet return");
console.log(arrowFunktionMedReturn2());

// nästa sätt

const arrowFunktionMedReturn3 = () 0> (
    {
        name:"Ella",
        functionName:"arrowFunktionMedReturn3"
    }
);
console.log(arrowFunktionMedReturn3())
// I denna sista, så returneras det direkt.

// JS-TERNARY-OPERATOR

let isRaining = true;
if (isRaining) {
    console.log("Stay home");
} else {
    console.log("Go out");
}
// Helt vanlig if-sats ovan. Omskriven med ternary operator:

isRaining
? console.log("Stay home")
: console.log("Go out")

// nestade if-satser

let isSunShining = true;

if (isRaining) {
    console.log("Stay home");
} else {
if (isSunShining) {
    console.log("Eat ice cream");
} else {
    console.log("Take a walk");
}
}
// Nestad if-sats ovan. Omskriven med ternary operator:

isRaining
? console.log("Stay home")
: isSunShining
? console.log("Eat Ice Cream")
: console.log("Take a walk")

// Slipp console.log överallt med detta sätt och med ternary operator!

result = isRaining
? "Stay home"
: isSunShining
?  "Eat Ice Cream"
:  "Take a walk"

console.log(result)
//  Det är smidigt med teranry operator. Det blir kortare, tydligare kod.
// Btw i en sån true or false sats så skriver man först if it is TRUE med frågetecknet
// Sen if false med : som i annars:

console.log(isRaining && "Stay home");

// Det här kallas villkorsbaserad rendering. Man sätter upp villkor som sedan
// renderas, alltså visas i webbläsaren.

