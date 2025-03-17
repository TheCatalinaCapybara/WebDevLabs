let x = 5;
let y = 7;
let z = x + y;

console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;

console.log(C);

function SumNPrint (x1, x2){
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint (x, y);
SumNPrint (A, B);

if (C.length > z){
    console.log(C);
} else if (C.length < z){
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana (array){
    array.forEach((item, index) => {
        if (item == "Banana"){
            alert("We found a banana in this array");
        }
    });
}

findTheBanana (L1)
findTheBanana (L2)

function greetingFunc () {
    let d = new Date();
    let h = d.getHours();
    let greet = "";
    if (h < 12){
        greet = "Good morning, I'm Jennifer!";
    } else if (h < 18){
        greet = "Good afternoon, I'm Jennifer!";
    } else if (h < 20){
        greet = "Good evening, I'm Jennifer!";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)){
        greet = "Good night, I'm Jennifer!";
    }
    let E = document.getElementById("greeting");
    if (E){
        E.innerHTML = greet;
    }
}

if (window.location.href.includes("index.html")){
    window.onload = greetingFunc;
}

greetingFunc ();