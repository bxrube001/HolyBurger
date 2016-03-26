//    Health Meter
var ctx1 = document.getElementById('health').getContext('2d');
var ctx1b = document.getElementById('health').getContext('2d');
var al1 = 0;
var hea = "Health";
var start1 = 4.72;
var cw1 = ctx1.canvas.width;
var ch1 = ctx1.canvas.height; 
var diff1;

progressSim1()

function progressSim1(){
	diff1 = ((al1 / 100) * Math.PI*2*10).toFixed(2);
	ctx1.clearRect(0, 0, cw1, ch1);
	ctx1.lineWidth = 15;
//        ctx1.font = 'slackey'; refer to HolyBurger HTML and Javascript file
	ctx1.fillStyle = '#68FF19';
	ctx1.strokeStyle = "#68FF19";
	ctx1.textAlign = 'center';
        if (al1 <100){
	ctx1.fillText(al1+'%', cw1*.5, ch1*.5+2, cw1);
        ctx1.fillText(hea, cw1*.5, ch1*.5+14, cw1)
        }else{
        ctx1b.fillStyle = '#fff';
        ctx1b.strokeStyle = '#fff';
        ctx1b.font = 'bold 14px';
        ctx1b.fillText("Upgrade Now", cw1*.5, ch1*.5+2, cw1);
        }
	ctx1.beginPath();
	ctx1.arc(65, 65, 50, start1, diff1/10+start1, false);
	ctx1.stroke();
	if(al1 >= 100){
		clearTimeout(sim1);
	    // Add scripting here that will run when progress completes
	}
	al1++;
}
var sim1 = setInterval(progressSim1, 50);

//  Defense Meter
var ctx2 = document.getElementById('defense').getContext('2d');
var ctx2b = document.getElementById('defense').getContext('2d');
var al2 = 0;
var def = "Defense";//add if statement for Defense or change out to Upgrade Now
var start2 = 4.72;
var cw2 = ctx2.canvas.width;
var ch2 = ctx2.canvas.height; 
var diff2;

function progressSim2(){
	diff2 = ((al2 / 100) * Math.PI*2*10).toFixed(2);
	ctx2.clearRect(0, 0, cw2, ch2);
	ctx2.lineWidth = 15;
	ctx2.fillStyle = '#1522B2';
	ctx2.strokeStyle = "#1522B2";
	ctx2.textAlign = 'center';
        if (al2 <100){
	ctx2.fillText(al2+'%', cw2*.5, ch2*.5+2, cw2);
        ctx2.fillText(def, cw2*.5, ch2*.5+14, cw2);
        }else{
        ctx2b.fillStyle = '#fff';
        ctx2b.strokeStyle = '#fff';
        ctx2b.font = 'bold 14px';
        ctx2b.fillText("Upgrade Now", cw2*.5, ch2*.5+2, cw2);
        }
	ctx2.beginPath();
	ctx2.arc(65, 65, 50, start2, diff2/10+start2, false);
	ctx2.stroke();
	if(al2 >= 100){
		clearTimeout(sim2);
	    // Add scripting here that will run when progress completes
	}
	al2++;
}
var sim2 = setInterval(progressSim2, 50);

//  Attack Meter
var ctx3 = document.getElementById('attack').getContext('2d');
var ctx3b = document.getElementById('attack').getContext('2d');
var al3 = 0;
var att = "Attack";
var start3 = 4.72;
var cw3 = ctx3.canvas.width;
var ch3 = ctx3.canvas.height; 
var diff3;

function progressSim3(){
//        if(al3 >100){
//            al3 = 100;
//        } May need this to keep below 100% for earnings.
	diff3 = ((al3 / 100) * Math.PI*2*10).toFixed(2);
	ctx3.clearRect(0, 0, cw3, ch3);
	ctx3.lineWidth = 15;
	ctx3.fillStyle = '#FF4B00';
	ctx3.strokeStyle = "#FF4B00";
	ctx3.textAlign = 'center';
        if (al3 <100){
            ctx3.fillText(al3+'%', cw3*.5, ch3*.5+2, cw3);
            ctx3.fillText(att, cw3*.5, ch3*.5+14, cw3);
        }else{
            ctx3b.fillStyle = '#fff';
            ctx3b.strokeStyle = '#fff';
            ctx3b.font = 'bold 14px';
            ctx3b.fillText("Upgrade Now", cw3*.5, ch3*.5+2, cw3);//Searchfor way to add more CSS annimation to the button when message changes
        }
	ctx3.beginPath();
	ctx3.arc(65, 65, 50, start3, diff3/10+start3, false);
	ctx3.stroke();
	if(al3 >= 100){
		clearTimeout(sim3);
	    // Add scripting here that will run when progress completes
	}
	al3++;
}
var sim3 = setInterval(progressSim3, 50);
