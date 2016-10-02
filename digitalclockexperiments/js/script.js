//Drawing
var canvas  = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var ctx = canvas.getContext("2d");
var image = document.getElementById ("image");
// document.bgColor="black";

var side = 15;
var radius = 8;
var offsetX;
var offsetY;
var shape;//new tool box //with this new object we will do different things
//var x = 0;
//if you create a variable inside a function, it will be available only within the setup function

var decoder;
ctx.strokeStyle = "black";

function addition(a,b) {
var c = a + b;
return c;
}

var result = addition (1,1);

for(var i=0; i<100; i++) {

	var newresult = addition(i,i);
}

function setup() {
offsetY = window.innerHeight/2 - (7*side)/2;
shape = new Shape(ctx); //calling for a prototype
decoder = new Decoder();
draw();


}

function draw() {
	sentence = updateTime();
	offsetX = window.innerWidth/2 - (sentence.length*side*6)/2;
ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
	for (var x = 0; x < sentence.length; x++){
	var offset = x * side * 6;


	for(var i = 0; i<5; i++) {
		for(var j = 0; j<7; j++){
			var myletterBlocks = decoder.getBlocks(sentence[x]); //analysing each letter one after another
			//console.log(numbers[0][j][i]);
			if (myletterBlocks[j][i] == 1){
			
			shape.drawCoolImage(offsetX+i*side + offset,offsetY+j*side,side,side, sentence[x]);

			}else {
				ctx.fillStyle= "black";

			}
		ctx.beginPath();
		//ctx.arc(offset+offsetX+side*i,offsetY+side*j,radius, 0,Math.PI*2);
	//shape.drawCoolImage(offsetX+i*side + offset,offsetY+j*side,side,side, sentence[x]);
		//shape.drawLines(offsetX+i*side + offset,offsetY+j*side,side,side, sentence[x])
	//	ctx.stroke();
		ctx.fill();
		ctx.closePath();

		}
	}
}
requestAnimationFrame(draw);

}


function updateTime() {
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var mseconds = date.getMilliseconds();
//leading zeros

if (hours < 10) {
	hours = "0" + hours;
}

if (minutes < 10) {
	minutes = "0" + minutes;
}

if (seconds < 10) {
	seconds = "0" + seconds;
}


//final sentence
var sentence = hours+ ":" + minutes + ":" + seconds;

return sentence;
}

setup();
