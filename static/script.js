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

// findTheBanana (L1)
// findTheBanana (L2)

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

function addYear() {
    let year = new Date().getFullYear();
    let yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerText = `© ${year}`;
    }
}

// function showList() {
//     let list = document.getElementById("myList");
//     let button = document.getElementById("showButton");
//     if (list && button) {
//         list.style.display = "block";
//         button.style.display = "none";
//     }
// }

window.onload = function (){
    greetingFunc ();
    addYear ();
}

$(document).ready(function() {
    $("#readMoreBtn").click(function() {
        $("#shortBio").hide();  // Hide short bio
        $("#longBio").fadeIn(); // Show full bio
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function() {
        $("#longBio").hide();   // Hide full bio
        $("#shortBio").fadeIn(); // Show short bio
        $("#readLessBtn").hide();
        $("#readMoreBtn").show();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formError = document.getElementById("formError");
    const submitButton = document.getElementById("submit_button");

    if (submitButton) { // Check if submit_button exists before adding event listener
        submitButton.addEventListener("click", function (event) {
            console.log("submit");
            let valid = true;

            // Name validation
            const name = document.getElementById("name");
            const nameError = document.getElementById("nameError");
            if (!name || !name.checkValidity()) {
                if (nameError) nameError.textContent = "Please enter your name.";
                valid = false;
            } else {
                if (nameError) nameError.textContent = "";
            }

            // Email validation
            const email = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (!email || !email.checkValidity()) {
                if (emailError) emailError.textContent = "Please enter a valid email.";
                valid = false;
            } else {
                if (emailError) emailError.textContent = "";
            }

            // Comment validation
            const comment = document.getElementById("comment");
            const commentError = document.getElementById("commentError");
            if (!comment || !comment.checkValidity()) {
                if (commentError) commentError.textContent = "Please enter a message.";
                valid = false;
            } else {
                if (commentError) commentError.textContent = "";
            }

            // Show form error message if validation fails
            if (!valid) {
                console.log("Form is invalid.");
                if (formError) formError.innerHTML = "Please fill out the form properly so I can get back to you soon :)";
                event.preventDefault(); // Prevent form submission
            } else {
                if (formError) formError.textContent = "";
            }
        });
    }
});

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").textContent = data.slip.advice;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").textContent = "Oops! Couldn't fetch advice. Try again!";
        });
}
