"use strict"

var c = document.getElementById("Game-Container");
var a = document.getElementById("Ball");
var g = document.getElementById("Goal");
var t = document.getElementById("Goal-Number");

//listen for arrow keys
document.onkeydown = getKeyPressed;

var id; //name of the Interval function running everything
var isGameRunning;
var posX, posY; //position of the ball
var goalX, goalY; //position of the gial
var goals; //keeps track of the number of goals
var level = 1; //current level
var lastHorizontal, lastVertical; //last wall that the ball hit -it's direction
var wOV = []; //array for the four walls to say if each is vertical or not
var wC; //keeps track of which wall is being built/removed

var testVar;

reset();

function runGame() {
  if (isGameRunning === false) {
    //stop the game
    clearInterval(id);
  } else {

    //get position of the ball
    var bpTop = parseFromPX(a.style.top);
    var bpLeft = parseFromPX(a.style.left);

    populateBlocks(bpTop, bpLeft);

    checkIfGoalScored();

    checkBounceWall(bpTop, bpLeft);
    //make the ball go in the right direction after bouncing
    setBallDirection();

  }
  //set the new position of the ball
  a.style.top = posY + "px";
  a.style.left = posX + "px";
}
function getKeyPressed(e){
  e = e || window.event;

  if (e.keyCode == '37') reverseX();
  if (e.keyCode == '39') reverseY();
  if (e.keyCode == '38') start();
  if ((e.keyCode == '40')&&(testVar !== undefined)) alert(testVar);
}
function reset() {
  isGameRunning = false;
  posY = 0;
  posX = 0;
  goals = 0;
  lastHorizontal = "top";
  lastVertical = "left";
  wC = 0;
  a.style.top = "1px";
  a.style.left = "1px";
  g.style = "background-color: #442299;";

  document.getElementById("Level").innerHTML = "Level: " + level;

  var z = 1;
  //make the blocks for this level show up
  var thisLevelBlock = "Block" + level + "_";

  if (level!== 1) {
    //change border color to match level
    console.log(document.getElementById(thisLevelBlock + 1).style);
    document.getElementById('Game-Container').style.borderColor = document.getElementById(thisLevelBlock + 1).style.backgroundColor;
  }

  while (document.getElementById(thisLevelBlock + z) !== null)
  {
  document.getElementById(thisLevelBlock + z).style.display = "block";
  z++;
  }

  //reset the walls
  for (let a = 0; a < 4; a++){
    document.getElementById("Wall" + a).style = "top: 0; left: 0;";
  }

  var y = 1;
  //hide the last level's blocks (one still there)
  var lastLevelBlock = "Block" + (level - 1) + "_";

  while (document.getElementById(lastLevelBlock + y) !== null)
  {
  document.getElementById(lastLevelBlock + y).style.display = "none";
    y++;
  }

  setGoal();
}
function start() {
  if (isGameRunning === false){
    id = setInterval(runGame, 1);
    isGameRunning = true;
  }
}
function buildWallY(){

  var wallTop, wallLeft;

  //where to make the wall appear based on the ball's direction
  if (lastHorizontal == "top"){
      wallTop = parseFromPX(a.style.top) - 10;
  } else {
    wallTop = parseFromPX(a.style.top) + 10;
  }

  //this wall dimension isn't affected by the ball's direction
  wallLeft = parseFromPX(a.style.left);

  let currentWall = document.getElementById("Wall" + wC);

  //make a wall
  currentWall.style = "position: absolute; height: 6px; width: 30px; top: " + wallTop  + "px; left: " + wallLeft + "px; background-color: tan; z-index: 4;";

  wOV[wC] = false;

  wC++;

  //Ensure that no more than 4 walls get created
  if (wC == 4){
    wC = 0;
  }
}
function buildWallX(){

  var wallTop, wallLeft;

  //where to make the wall appear based on the ball's direction
  if (lastVertical == "left"){
      wallLeft = parseFromPX(a.style.left) - 10;
  } else {
    wallLeft = parseFromPX(a.style.left) + 10;
  }


  //this wall dimension isn't affected by the ball's direction
  wallTop = parseFromPX(a.style.top);

  let currentWall = document.getElementById("Wall" + wC);

  //make a wall
  currentWall.style = "position: absolute; height: 30px; width: 6px; top: " + wallTop  + "px; left: " + wallLeft + "px; background-color: tan; z-index: 4;";

  wOV[wC] = true;

  wC++;

  //Ensure that no more than 4 walls get created
  if (wC == 4){
    wC = 0;
  }
}
function reverseY() {
  if (lastHorizontal == "top") {
    lastHorizontal = "bottom";
  }else{
    lastHorizontal = "top";
  }
  buildWallY();
}
function reverseX() {
  if (lastVertical == "left") {
    lastVertical = "right";
  }else{
    lastVertical = "left";
  }
  buildWallX();
}
function setGoal(){
  goalX = Math.floor(Math.random() * 465);
  goalY = Math.floor(Math.random() * 465);

  g.style.left = goalX;
  g.style.top = goalY;
  t.innerHTML = goals + 1;
}
function checkIfGoalScored(){
  //parse: remove the px from pixels and switch the pixels into a number
  let checkX = parseFromPX(a.style.left);
  let checkY = parseFromPX(a.style.top);

  //If a goal is scored
  if ((checkY >= goalY)&&(checkY < (goalY+35))&&(checkX >= goalX)&&(checkX < (goalX+35))){
    goals++;

    if (goals == 10) {
      alert ("you win!");

      level++;

      reset();
    }

    if (goals%2 == 1){
      g.style = "background-color: #992244;";
    }else{
      g.style = "background-color: #442299;";
    }
    setGoal();
  }
}
function setBallDirection(){

  var gameHeight = parseFromPX(window.getComputedStyle(c).getPropertyValue('height')) - 11;
  var gameWidth = parseFromPX(window.getComputedStyle(c).getPropertyValue('width')) - 11;
  //going down
  if (lastHorizontal == "top"){
    posY++;



    //if at the bottom, going up
    if(parseFromPX(a.style.top) >= gameHeight){
      lastHorizontal = "bottom";
    }
  }else{
    //going up
    posY--;
    //if at the top, going down
    if(parseFromPX(a.style.top) <= 0){
      lastHorizontal = "top";
    }
  }

  //make the ball go in the right direction (left and right)

  //going right
  if (lastVertical == "left"){
    posX++;

    //if at the right side, going left
    if(parseFromPX(a.style.left) >= gameWidth){
      lastVertical = "right";
    }
  }else{
    //going left

    posX--;
    //if at the left side, going right
    if(parseFromPX(a.style.left) <= 0){
      lastVertical = "left";
    }
  }
}

function checkBounceBlocks(posTop, posLeft, Block_id) {

  let block =  document.getElementById(Block_id);

  let blockTop = parseFromPX(block.style.top) - 10; //(width of ball)
  let blockLeft = parseFromPX(block.style.left) -10;
  let blockBottom = blockTop + parseFromPX(block.style.height) + 10; //compensate for width of ball
  let blockRight = blockLeft + parseFromPX(block.style.width) + 10;

  //if the ball hits the top of the block
  if ((posTop == blockTop)&&(posLeft >= blockLeft)&&(posLeft <= blockRight)) {
    lastHorizontal = "bottom";
  }
  //if it hits the bottom of the block
  if ((posTop == blockBottom)&&(posLeft >= blockLeft)&&(posLeft <= blockRight)) {
    lastHorizontal = "top";
  }
  //if it hits the left side
  if ((posLeft == blockLeft)&&(posTop >= blockTop)&&(posTop <= blockBottom)) {
    lastVertical = "right";
  }
  //if it hits the right side
  if ((posLeft == blockRight)&&(posTop >= blockTop)&&(posTop <= blockBottom)) {
    lastVertical = "left";
  }
}
function checkBounceWall(pTop, pLeft){
  for (let a = 0; a< 4; a++) {

    //if the ball hits a wall again
    let currentWall = document.getElementById("Wall" + a);

    let wallTop = parseFromPX(currentWall.style.top);
    let wallLeft = parseFromPX(currentWall.style.left);

    if (wOV[a] === true) { //the wall is vertical

      if ((pTop == wallTop-10)&&(pLeft >= wallLeft-10)&&(pLeft <= wallLeft + 6)) {
        lastHorizontal = "bottom";
      }
      if ((pTop == wallTop + 30)&&(pLeft >= wallLeft-10)&&(pLeft <= wallLeft + 6)) {
        lastHorizontal = "top";
      }
      if ((pLeft == wallLeft -10)&&(pTop >= wallTop-10)&&(pTop <= wallTop + 30)) {
        lastVertical = "right";
      }
      if ((pLeft == wallLeft + 6)&&(pTop >= wallTop-10)&&(pTop <= wallTop + 30)) {
        lastVertical = "left";
      }
    }
    else if (wOV[a] === false) { //the wall is horizontal

      if ((pTop == wallTop-10)&&(pLeft >= wallLeft-10)&&(pLeft <= wallLeft + 30)) {
        lastHorizontal = "bottom";
      }
      if ((pTop == wallTop + 6)&&(pLeft >= wallLeft-10)&&(pLeft <= wallLeft + 30)) {
        lastHorizontal = "top";
      }
      if ((pLeft == wallLeft-10)&&(pTop >= wallTop-10)&&(pTop <= wallTop + 6)) {
        lastVertical = "right";
      }
      if ((pLeft == wallLeft + 30)&&(pTop >= wallTop-10)&&(pTop <= wallTop + 6)) {
        lastVertical = "left";
      }
    }
  }
}

function populateBlocks(bpTop, bpLeft){

  var z = 1;
  //make the blocks for the level physically there
  var blockInQuestion = "Block" + level + "_";
  while (document.getElementById(blockInQuestion + z) !== null)
  {
    checkBounceBlocks(bpTop, bpLeft, blockInQuestion + z);
    z++;
  }
}
