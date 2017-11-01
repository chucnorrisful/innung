function setup() {
	
	var canvas = createCanvas(1000, 1000);
	canvas.parent('sketch-holder');
	
	angleMode(DEGREES);
	
}

var mouseStartX = 0;
var mouseStartY = 0;
var mouseEndX = 0;
var mouseEndY = 0;
var oldDist = 0;
var dist = 0;

function draw() {
	clear();
	
	translate(500, 500);
	rotate(-90);
	
	drawPointer();
	
	//drawSecPointer();
	
	drawBase();
	
	drawSegments();
	
	drawSleepCycle(2,0,0,7);

}

function mousePressed() {
	
	mouseStartX = mouseX;
	mouseStartY = mouseY;
	mouseEndX = mouseX;
	mouseEndY = mouseY;
	
}

function mouseReleased() {
	oldDist += dist;
	dist = 0;
}

function drawSleepCycle(sHR, sMN, sSC, duration) {
	push();
	
	let offset = 0;
	
	if (mouseIsPressed) {
		mouseEndX = mouseX;
		mouseEndY = mouseY;
		dist = Math.sqrt((mouseEndX - mouseStartX)*(mouseEndX - mouseStartX)+(mouseEndY - mouseStartY)*(mouseEndY - mouseStartY));
	}
	
	offset = dist + oldDist;
	print([dist, oldDist]);
	
	let daysecStart = (sHR * 3600) + (sMN * 60) + sSC + offset*10;
	
	let daysecEnd = daysecStart + duration*3600;
	
	let startAngle = map(daysecStart, 0, 86400, 0, 360.0);
	let endAngle = map(daysecEnd, 0, 86400, 0, 360.0);
	
	noFill();
	stroke(255, 0, 0);
	strokeWeight(4);
	arc(0, 0, 870, 870, startAngle, endAngle);
	
	pop();
}

function drawSecPointer() {
	push();
	
	let ms = millis();
	angle = map(ms, 0, 24000, 0, 360.0);

	rotate(angle);
	stroke(88, 214, 221);
	strokeWeight(1);
	line(350, 0, 450, 0);
	
	strokeWeight(4);
	line(350, 0, 370, 0);
	line(430, 0, 450, 0);
	pop();
}

function drawPointer() {
	push();
	
	let hr = hour();
	let mn = minute();
	let sc = second();
	
	let daysecs = (hr * 3600) + (mn * 60) + sc;
	angle = map(daysecs, 0, 86400, 0, 360.0);

	
	rotate(angle);
	stroke(100, 200, 100);
	line(350, 0, 450, 0);
	
	strokeWeight(3);
	line(350, 0, 380, 0);
	line(420, 0, 450, 0);
	
	pop();
}

function drawSegments(){
	
	for (i = 0; i < 24; i++) {
		push();
		stroke(200);
		if (i % 6 == 0) continue;
		let angle = map(i, 0, 24, 0, 360);
		strokeWeight(1);
		rotate(angle);
		line(380, 0, 420, 0);
		pop();
	}
	
	for (i = 1; i < 25; i++) {
		push();
		
		let angle = map(i, 0, 24, 0, 360);
		
		fill(200);
		stroke(200);
		strokeWeight(1);
		textAlign(CENTER, CENTER);
		
		if (i % 6 == 0) {
			
			rotate(angle);
			translate(250, 0);
			rotate(-angle+90);
			textFont("Arial", 30);
			
		} else {
		
			rotate(angle);
			translate(350,0);
			rotate(-angle+90);
			textFont("Arial", 20);
		}
		
		text(i, 0, 0);
		pop();
	}
	
}

function drawBase() {
	push();
	stroke(200);
	noFill();
	strokeWeight(3);
	ellipse(0, 0, 800);
	
	strokeWeight(2);
	line(-500, 0, -300, 0);
	line(0, -500, 0, -300);
	line(300, 0, 500, 0);
	line(0, 300, 0, 500);
	pop();
}

/*
	background(0);
	translate(200, 200);
	rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(8);
	stroke(255, 100, 150);
	noFill();
	let secondAngle = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, secondAngle);

	stroke(150, 100, 255);
	let minuteAngle = map(mn, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, minuteAngle);

	stroke(150, 255, 100);
	let hourAngle = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, hourAngle);

	push();
	rotate(secondAngle);
	stroke(255, 100, 150);
	line(0, 0, 100, 0);
	pop();

	push();
	rotate(minuteAngle);
	stroke(150, 100, 255);
	line(0, 0, 75, 0);
	pop();

	push();
	rotate(hourAngle);
	stroke(150, 255, 100);
	line(0, 0, 50, 0);
	pop();

	stroke(255);
	point(0, 0);
*/