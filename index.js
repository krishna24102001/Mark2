const { log } = require("console");
var rlsync = require("readline-sync");
var userName = rlsync.question("Hi there, type your name ");

console.log("Hello ", userName, ". Do you know about The Avengers?, Well, let's play a Game and see...\n")
var questionList = [{
  question: "What is the name of the green monster guy? ",
  answer: "Hulk"
}, {
  question: "Which of them is a god? ",
  answer: "Thor"
}, {
  question: "What's the name of Iron Man? ",
  answer: "Tony Stark"
}, {
  question: "Who is the first avenger? ",
  answer: "Captain America"
}, {
  question: "What do we call the stones that Thanos wanted? ",
  answer: "Infinity stones"
}]

var score = 0

for (let i = 0; i < questionList.length; i++) {
  var userAnswer = rlsync.question(questionList[i].question);
  if (userAnswer.toLowerCase() === questionList[i].answer.toLowerCase()) {
    score++;
    console.log("Right!\n");
  } else {
    console.log("You're wrong.\n");
  }
  console.log("Your current score is:", score);
}
console.log(userName, ",your final score is:", score);