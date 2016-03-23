function HolyBurger()
{
    //object data
    this.attackValue = 1;
	this.healthPoints = 20;
    this.defense = 1;
	this.currency = 0;
    
    //object function
    this.saveCharacter = saveCharacter();
    this.loadCharacter = loadCharacter();
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