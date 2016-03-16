//Global Variables
var enemyAttack; //used for the periodical enemy strikes
var attackRate = 1000/1; //number of periodical attacks per second

//TODO these need fixed?
/*var holyBurger = new Character();
var pistolPep = new Enemy(enemyTypes.pistolPep);
var slimShakey = new Enemy(enemyTypes.slimShakey);
var terribleTom = new Enemy(enemyTypes.terribleTom);*/
enemies = [];

function EnemyObject() {
    //object data
    this.healthPoints = 10;
	this.attackValue = 1;
	this.currencyValue = 2;
	this.defense = 1;
    
    //object functions
    this.destroyEnemy = destroyEnemy;
    this.createEnemy = createEnemy;
    this.attack = attack;
    
    //TODO some of this may need changed
	/*if (enemyType == enemyTypes.pistolPep)
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
		//throw ArgumentException('Enemy type not recognized.')
	}*/
}
var enemyTypes = {
	pistolPep: 0,
	slimShakey: 1,
	terribleTom: 2
};

/*******************************************************
* function destroyEnemy
* Author: Patti Jones
*******************************************************/
	
function destroyEnemy(enemy)
{
    //TODO this need fixed
	//holyBurger.currency += enemy.currency;
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
* function createEnemy
* Author: Patti Jones
*******************************************************/

function createEnemy()
{
var randomNum = Math.floor(Math.random() *3); //0,1,2

var enemy = new Enemy(randomNum);

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
		//}		
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