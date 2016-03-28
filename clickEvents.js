// Health Upgrade Click Event 

var healthCanvas = document.getElementById('gameScreen'),
    healthLeft = healthCanvas.offsetLeft,
    healthTop = healthCanvas.offsetTop,
    context2 = healthCanvas.getContext('2d'),
    healthItems = [];

// Add event listener for `click` events.
healthCanvas.addEventListener('click', function(event) {
    var a = event.pageX - healthLeft,
        b = event.pageY - healthTop;
    console.log(a, b);
    healthItems.forEach(function(health) {
        if (b > health.top && b < health.top + health.height && a > health.left && a < health.left + health.width) {
            alert('clicked a HEALTH UPGRADE');
           
        }
    });

}, false);

// Add element.
healthItems.push({
    colour: 'green',
    width: 130,
    height: 130,
    top: 600,
    left:22.5
});

// Render elements.
healthItems.forEach(function(health) {
    context2.fillStyle = health.colour;
    context2.fillRect(health.left, health.top, health.width, health.height);
});

// Defense Upgrade Click Event 

var defenseCanvas = document.getElementById('gameScreen'),
    defenseLeft = defenseCanvas.offsetLeft,
    defenseTop = defenseCanvas.offsetTop,
    context3 = defenseCanvas.getContext('2d'),
    defenseItems = [];

// Add event listener for `click` events.
defenseCanvas.addEventListener('click', function(event) {
    var c = event.pageX - defenseLeft,
        d = event.pageY - defenseTop;
    console.log(c, d);
    defenseItems.forEach(function(defense) {
        if (d > defense.top && d < defense.top + defense.height && c > defense.left && c < defense.left + defense.width) {
            alert('clicked a DEFENSE UPGRADE');
           
        }
    });

}, false);

// Add element.
defenseItems.push({
    colour: 'blue',
    width: 130,
    height: 130,
    top: 600,
    left:175
});

// Render elements.
defenseItems.forEach(function(defense) {
    context3.fillStyle = defense.colour;
    context3.fillRect(defense.left, defense.top, defense.width, defense.height);
});

// Attack Upgrade Click Event 

var attackCanvas = document.getElementById('gameScreen'),
    attackLeft = attackCanvas.offsetLeft,
    attackTop = attackCanvas.offsetTop,
    context4 = attackCanvas.getContext('2d'),
    attackItems = [];

// Add event listener for `click` events.
attackCanvas.addEventListener('click', function(event) {
    var e = event.pageX - attackLeft,
        f = event.pageY - attackTop;
    console.log(e, f);
    attackItems.forEach(function(attack) {
        if (f > attack.top && f < attack.top + attack.height && e > attack.left && e < attack.left + attack.width) {
            alert('clicked a ATTACK UPGRADE');
           
        }
    });

}, false);

// Add element.
attackItems.push({
    colour: 'red',
    width: 130,
    height: 130,
    top: 600,
    left:327.5
});

// Render elements.
attackItems.forEach(function(attack) {
    context4.fillStyle = attack.colour;
    context4.fillRect(attack.left, attack.top, attack.width, attack.height);
});

// Holy Burger Attack Click Event 

var burgerCanvas = document.getElementById('gameScreen'),
    burgerLeft = burgerCanvas.offsetLeft,
    burgerTop = burgerCanvas.offsetTop,
    context5 = burgerCanvas.getContext('2d'),
    burgerItems = [];

// Add event listener for `click` events.
burgerCanvas.addEventListener('click', function(event) {
    var  g = event.pageX - burgerLeft,
         h = event.pageY - burgerTop;
    console.log(g, h);
    burgerItems.forEach(function(burger) {
        if (h > burger.top && h < burger.top + burger.height && g > burger.left && g < burger.left + burger.width) {
            alert('clicked a HOLY BURGER ATTACK');
           
        }
    });

}, false);

// Add element.
burgerItems.push({
    colour: 'yellow',
    width: 130,
    height: 130,
    top: 100,
    left:50
});

// Render elements.
burgerItems.forEach(function(burger) {
    context5.fillStyle = burger.colour;
    context5.fillRect(burger.left, burger.top, burger.width, burger.height);
});


