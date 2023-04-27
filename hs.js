
renderHighScore();


function renderHighScore() {
  var initials = localStorage.getItem("initials");
  var score = localStorage.getItem("score");
  P= document.createElement("p");
  P.textContent = initials + " " + score;
  document.body.appendChild(P);
  }
