var height = 0;  //used for screen height
var width = 0;   //used for screen width

function GameObject()
{
    //object data
    
    //object functions
    this.initializeScreen = initializeScreen;
    this.loadHolyMolies = loadHolyMolies;
    this.changeBurgerHealth = changeBurgerHealth;
    this.changeEnemyHealth = changeEnemyHealth;
    this.toggleSound = toggleSound;
}

/****************************************************
 * Sets up canvas and div by determining screen size
 ****************************************************/
function initializeScreen() {
  width = window.innerWidth;                //get window width
  height = window.innerHeight;              //get window height
  document.getElementById("gameScreen").width = width * 0.98;  //set canvas width to 98%
  document.getElementById("gameScreen").height = height * 0.7; //set canvas height to 70%
  document.getElementById("controlsDiv").style.width = width * 0.98;  //set div width to 98% 
  document.getElementById("controlsDiv").style.height = height * 0.3; //set div height to 30%
  loadHolyMolies(0);
}

/*******************************************************
 * Updates Holy Molies. Takes a number.
 *******************************************************/
function loadHolyMolies(molies) {
  var screen = document.getElementById("gameScreen").getContext('2d');;
  screen.font = '24px "Slackey" cursive';
  screen.fillStyle = '#FFDF00';
  screen.textBaseline = 'top';
  screen.fillText  (molies, width*0.01, height * 0.01); //Fills screen with number of molies
}

function changeBurgerHealth(newPercent) {
  document.getElementById("burgerInnerHealth").style.width = newPercent + "%";
}

function changeEnemyHealth(newPercent) {
  document.getElementById("enemyInnerHealth").style.width = newPercent + "%";
}

/*************************************************
 * Toggle Sound
 *************************************************/
function toggleSound() {
  var sound = document.getElementById("backgroundSound");
  if(sound.muted === true){
    sound.muted = false;
  }
  else {
    sound.muted = true;
  }
}

/*******************************************************
* function gameOver
* Author: Patti Jones
*******************************************************/
function gameOver()
{
	isGameOver = true;
	alert("Looks like Holy Burger is now Holy Charcoal.");
}