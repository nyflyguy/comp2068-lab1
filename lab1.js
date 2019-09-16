var userChoice = prompt("Choose rock, paper, or scissors");
var computerChoice = Math.random();
if(computerChoice < 0.34){
	computerChoice = "rock";
} else if(computerChoice <= 0.67){
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);

if(userChoice === computerChoice){
  console.log("The result is a Tie.")
}

if(userChoice === "rock"){
  if(computerChoice === "paper"){
    console.log("Computer Wins.");
  } else if(computerChoice === "scissors"){
    console.log("You Win.");
  }
}

if(userChoice === "paper"){
  if(computerChoice === "scissors"){
    console.log("Computer Wins.");
  } else if(computerChoice === "rock"){
    console.log("You Win.");
  }
}

if(userChoice === "scissors"){
  if(computerChoice === "rock"){
    console.log("Computer Wins.");
  } else if(computerChoice === "paper"){
    console.log("You Win.");
  }
}


