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

/******************************************************
 * Change Burger Health (used for the bar)
 * @param newPercent
 ******************************************************/
function changeBurgerHealth(newPercent) {
  document.getElementById("burgerInnerHealth").style.width = newPercent + "%";
}

/************************************************************
 * Change Enemy Health (Used for the bar)
 * @param newPercent
 ************************************************************/
function changeEnemyHealth(newPercent) {
  document.getElementById("enemyInnerHealth").style.width = newPercent + "%";
}


//TODO there's some redundant code and errors down here? \/

/********************************************************
* Function for Progress Bar
*********************************************************/
function increaseAttack() {
    if (holyMolies >= (upAttack)) {
        attack += 5;
        holyMolies -= upAttack;
   		upAttack = attack *2;
    }
}

function increaseDefense() {
    if (holyMolies >= (upDefense)) {
        defense += 5;
        holyMolies -= upDefense;
   		upDefense = defense *3;
        //
    }
}

function increaseHelth() {
    if (holyMolies >= (upHealth)) {
        health += 50;
        holyMolies -= upHealth;//
        upHealth = health *4;
    }
}

/********************************************************
* Update Progress Bar
*********************************************************/
function attackBar(){
	document.getElementById("increaseAttack").style.width = newPercent + "%";
}

function defenseBar(){
	document.getElementById("increaseDefense").style.width = newPercent + "%";
}

function healthBar(){
	document.getElementById("increaseHealth").style.width = newPercent + "%";
}

function updateBars(){
	newAttack=holyMolies/upAttack;
	document.getElementById("attackUpBar").style.width = newAttack % 1;
	newDefense=holyMolies/upD;
	document.getElementById("defenseUpBar").style.width = newDefenseBar % 1;
	newHealth=holyMolies/upAttack;
	document.getElementById("healthUpBar").style.width = newHealth % 1;
}