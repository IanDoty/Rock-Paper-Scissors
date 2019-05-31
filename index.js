let wins = 0;
let losses = 0;
let tie = 0;

function computersMove() {
let randint = Math.floor(Math.random()*3);//generates 0, 1 and 2
if (randint === 0){
return "Rock";
}
if (randint === 1){
return "Paper";
}
if (randint === 2){
return "Scissors";
}
}

function updateScore(result) {
let randint = Math.floor(Math.random()*10)
if (result === "won") {
wins = wins + 1
document.getElementById("wins").innerHTML = wins;
}
if (result === "losses") {
losses = losses + 1
document.getElementById("losses").innerHTML = losses;
}
if (result === "tie") {
tie = tie + 1
document.getElementById("ties").innerHTML = tie;
}
}

function onClickRock() {
let cm = computersMove();
if (cm === "Rock") {
//tie
updateScore ("won");
alert ("The computer decided to Save you. Lucky you Won")
}
if (cm === "Paper") {
//lost
updateScore ("losses");
alert ("The computer decided to explode you. SORRY you lost")
}
if (cm === "Scissors") {
//win
updateScore ("tie");
alert ("The computer decided to implode you. At least it was cool \(By The Way you tied\) ")
}
}

function onclickPaper() {
let cm = computersMove();
if (cm === "Rock") {
//tie
updateScore ("tie");
alert ("The computer desided to inplode you. At least it was cool \(By The Way you tied\)")
}
if (cm === "Paper") {
//lost
updateScore ("won");
alert ("The computer desided to Save you. Lucky you Won")
}
if (cm === "Scissors") {
//win
updateScore ("losses");
alert ("The computer desided to explode you. SORRY you lost")
}
}

function onclickScissors() {
let cm = computersMove();
if (cm === "Rock") {
//tie
updateScore ("losses");
alert ("The computer desided to explode you. Sorry you lost")
}
if (cm === "Paper") {
//lost
updateScore ("tie");
alert ("The computer desided to inplode you. At least it was cool \(By The Way you tied\)")
}
if (cm === "Scissors") {
//win
updateScore ("won");
alert ("The computer desided to Save you. Lucky you Won")
}
}

document.getElementById("Rock").onclick = onClickRock;
document.getElementById("Paper").onclick = onclickPaper;
document.getElementById("Scissors").onclick = onclickScissors;
    
