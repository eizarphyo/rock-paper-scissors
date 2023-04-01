var heading = document.querySelector("h2");
var para = document.querySelector("p");

var ply = document.querySelector(".ply-img");
var comp = document.querySelector(".comp-img");

var random; 
var plyScore = 0;
var compScore = 0;

function start() {
    hideElems("hide");
    showElems("show");
    heading.innerText = "Choose Any Weapon You Like!";
    para.innerText = "Your Score: 0\n Computer Score: 0";
}

function hideElems(className){
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++ ) {
        var element = elements[i];
        element.style.display = "none";
    }
}

function showElems(className){
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++ ) {
        var element = elements[i];
        element.style.display = "inline";
    }
}

function rock(){
    random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    ply.setAttribute("src", "images/rock.png");
}

function paper(){
    random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    ply.setAttribute("src", "images/paper.png");
}

function scissors(){
    random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    ply.setAttribute("src", "images/scissors.png");
}

function btnPressed(val) {
    random = Math.floor(Math.random() * 3) + 1;
    var plyChoice = val;

    ply.setAttribute("src", `images/${val}.png`);
    
    if (random == 1) {
        comp.setAttribute("src", "images/rock.png");
    } else if (random == 2) {
        comp.setAttribute("src", "images/paper.png");
    } else {
        comp.setAttribute("src", "images/scissors.png");
    }
    updateScore(plyChoice, random);
    winner();
}

function updateScore(plyChoice, compChoice) {
    // compChoice: 1 -> rock| 2 -> paper| 3 -> scissors
    if (plyChoice == "rock") {
        if (compChoice == 1) {
            //draw
            heading.innerText = "A Draw!";
        } else if (compChoice == 2) {
            //lose
            heading.innerText = "Oops.. Paper Was Invicible";
            compScore++; 
        } else {
            //win
            heading.innerText = "Great! Beat That Scissors!";
            plyScore++;
        }
    } else if (plyChoice == "paper") {
        if (compChoice == 1) {
            //win
            heading.innerText = "Phew.. Good Job!";
            plyScore++;
        } else if (compChoice == 2) {
            //draw
            heading.innerText = "Oh, It Is a Draw!";
        } else {
            //lose
            heading.innerText = "Ouch.. Scissors Wins TvT";
            compScore++; 
        }
    } else if (plyChoice == "scissors") {
        if (compChoice == 1) {
            //lose
            heading.innerText = "Uh-Oh.. Couldn't Cut the Rock";
            compScore++; 
        } else if (compChoice == 2) {
            //win
            heading.innerText = "Yay! Cut that Paper!";
            plyScore++;
        } else {
            //draw
            heading.innerText = "Aww.. It's a Draw";
        }
    }
    para.innerText = `Your Score: ${plyScore}\n Computer Score: ${compScore}`;
    console.log(plyScore, compScore);
}

function winner() {
    if (plyScore >= 5) {
        heading.innerText = "Hooray! You win!!";
        hideElems("rps-btn");
        showElems("restart-btn");
    } else if (compScore >= 5) {
        heading.innerText = "Oh-No.. You Lose..";
        hideElems("rps-btn");
        showElems("restart-btn");
    } 
}

function restart() {
    plyScore = 0;
    compScore = 0;
    hideElems("restart-btn");
    start();
}