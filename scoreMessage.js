/*******************************************************
 * Score Keeper Function
 *******************************************************/
 var score = 0;
document.getElementById("score").innerHTML = score;
        
//Add Score Function for Enemy defeat or other Bonus
function addScore(points){
    score = score + points;
    document.getElementById("score").innerHTML = score;
}

/*******************************************************
 * Message Center Function
 *******************************************************/

function addMessage(message){
    var newItem = document.createElement("li");
    var textnode = document.createTextNode(message);
    newItem.appendChild(textnode);
    
    var list = document.getElementById("messageCenter");
    list.insertBefore(newItem, list.childNodes[0]);
}
