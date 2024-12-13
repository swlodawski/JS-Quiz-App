let questions = [
    {
        prompt :`Inside which HTML Elements do we 
        put the JavaScript?`,
        options: [
            "<javascript>",
            "<js>",
            "<script>",
            "<scripting>",
        ],
        answer: "<script>",
    },

    {
        prompt: `How do you call a function named myFunction?`,
        options: [
            "<call myFunction()>",
            "<myFunciton()>",
            "<call function myFunction>",
            "<Call.myFunction>"
        ],
        answer: "<myFuntion()>"
    },

    {
        prompt: `How does a for loop start?`,
        options: ["|", "&&", "%", "/"],
        answer: "&&"
    },

    {
        prompt: `A named element in a JavaScript program that is used to 
        store and retrieve data is a ____`,
        options: [
            "method",
            "assignment operator",
            "letiable",
             "string"
        ],
        answer: "letiable"
    },
];

let questionsEl =  document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#retart");

