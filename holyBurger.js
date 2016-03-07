var height = 0;
var width = 0;

function changeBurgerHealth(newPercent)
{
    document.getElementById("burgerInnerHealth").style.width = newPercent + "%";
}

function changeEnemyHealth(newPercent)
{
    document.getElementById("enemyInnerHealth").style.width = newPercent + "%";
}

function initializeScreen() {
  width = window.innerWidth;
  height = window.innerHeight;
  document.getElementById("gameScreen").width = width * 0.98;
  document.getElementById("gameScreen").height = height * 0.7;
  document.getElementById("controlsDiv").style.width = width * 0.98;
  document.getElementById("controlsDiv").style.height = height * 0.3;
  loadHolyMolies(0);
}

function loadHolyMolies(molies) {
  var screen = document.getElementById("gameScreen").getContext('2d');;
  screen.font = '24px "Slackey" cursive';
  screen.fillStyle = '#FFDF00';
  screen.textBaseline = 'top';
  screen.fillText  (molies, width*0.01, height * 0.01);
}