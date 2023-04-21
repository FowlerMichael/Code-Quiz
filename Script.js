var timerEl = document.getElementById("timer");
const question = document.getElementById("questions");
const start = document.getElementById("start-btn");
let secondsLeft = 10;
var questions = ("What is 1+1 ?");

start.addEventListener("click", function () {
    console.log("start");
    startQuiz();
});
    
function startQuiz() {
  document.getElementById("start-btn").style.display = "none";
   var timerInterval = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log("Time is up!");
      }

  }, 1000);

  question.innerHTML = questions;

 }