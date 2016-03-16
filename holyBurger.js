var height = 0;  //used for screen height
var width = 0;   //used for screen width
var enemyAttack; //used for the periodical enemy strikes
var attackInterval = 1; //number of attacks per second
var attackRate = 1000/attackInterval; //number of periodical attacks per second
var enemies = []; //array of enemies

function changeBurgerHealth(newPercent) {
	document.getElementById("burgerInnerHealth").style.width = newPercent + "%";
}

function changeEnemyHealth(newPercent) {
	document.getElementById("enemyInnerHealth").style.width = newPercent + "%";
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
	var screen = document.getElementById("gameScreen").getContext('2d');
	screen.font = '24px "Slackey" cursive';
	screen.fillStyle = '#FFDF00';
	screen.textBaseline = 'top';
	screen.fillText  (molies, width*0.01, height * 0.01); //Fills screen with number of molies
}

/*******************************************************
 * Saves character to localStorage
 * Author: Joseph Nixon
 *******************************************************/
function saveCharacter() {
	localStorage.setItem('savedCharacter', JSON.stringify(holyBurger));
}

/*******************************************************
* Loads character from LocalStorage
* Author: Joseph Nixon
*******************************************************/
function loadCharacter() {
	if (!localStorage) {
		return;
	}
	var tempChar = JSON.parse(localStorage('savedCharacter'));
	holyBurger.attackValue = tempChar.attackValue;
	holyBurger.healthPoints = tempChar.healthPoints;
	holyBurger.defense = tempChar.defense;
	holyBurger.currency = tempChar.currency;
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

/**************************************************
 * Start Enemy Attack (Periodical function)
 **************************************************/
function startEnemyAttack() {
	enemyAttack = setInterval(attack(enemy, character), attackRate); //have the enemy attack the character periodically
}

function endEnemyAttack() {
	clearInterval(enemyAttack); //Halt enemy onslaught
}

/*******************************************************
* Character & Enemy
* Author: Patti Jones
*******************************************************/

var enemyTypes = {
	pistolPep: 0,
	slimShakey: 1,
	terribleTom: 2
};

function Character()
{
	this.attackValue = 1;
	this.healthPoints = 20;
	this.defense = 1;
	this.currency = 0;
}
	
function Enemy(enemyType)
{
	this.healthPoints = 10;
	this.attackValue = 1;
	this.currencyValue = 2;
	this.defense = 1;
	if (enemyType == enemyTypes.pistolPep)
	{
		this.healthPoints = 7;
	}
	else if (enemyType == enemyType.slimShakey)
	{
		this.attackValue = 2;
	}
	else if (enemyType == enemyType.terribleTom)
	{
		this.healthPoints = 50;
		this.attackValue = 5;
	}
	else
	{
		throw ArgumentException('Enemy type not recognized.')
	}
}

var holyBurger = new Character();
var pistolPep = new Enemy(enemyTypes.pistolPep);
var slimShakey = new Enemy(enemyTypes.slimShakey);
var terribleTom = new Enemy(enemyTypes.terribleTom);

function attack(attacker,defender)
{
	//10 & 10 -> 5
	//a & a -> a/2
	//10 & 5 -> (⅔)10 == 6.666...
	//2 & 1 -> 4/3 = 1.333...
	//1 & 2 -> ⅓ 
	//a & d -> h

	//x/10 == y/2
	
	//a * (a / (a + d) ) = 

	var attack = attacker.attackValue;
	var defense = defender.defense;

	var damageDealt = attack * attack / (attack + defense);
	defender.healthPoints -= damageDealt;

	if (defender.healthPoints <= 0)
	{
		if (defender instanceof Enemy)
		{
			destroyEnemy(defender);
		}
		else //the defender must be the character		{
			gameOver();
		}		
	}
}

/*******************************************************
* function createEnemy
* Author: Patti Jones
*******************************************************/

function createEnemy()
{
	var randomNum = Math.floor(Math.random() *3); //0,1,2

	//var enemy = new Enemy(randomNum);

	var enemy;
	if (randomNum == 0)
	{
		enemy = new Enemy(enemyTypes.pistolPep);
	}
	else if (randomNum == 1)
	{
		enemy = new Enemy(enemyTypes.slimShakey);
	}
	else
	{
		enemy = new Enemy(enemyTpes.terribleTom);
	}
	return enemy;
}

/*******************************************************
* function destroyEnemy
* Author: Patti Jones
*******************************************************/
	
function destroyEnemy(enemy)
{
	holyBurger.currency += enemy.currency;
	//? loadHolyMollies(holyBurger.currency);
	
	//enemies.remove(enemy);

	//use if enemy has a unique identifier
	for (var i = 0; 1 < enemies.length; i++) {
		if (enemies[i].id == enemy.id) {
			enemies.removeAt(i);
			break;
		}
	}
}

/*******************************************************
* function gameOver
* Author: Patti Jones
*******************************************************/

function gameOver()
{
	isGameOver = true;
	alert(‘Looks like Holy Burger is now Holy Charcoal.’);
}

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
