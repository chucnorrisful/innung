function setup() {

    var canvas = createCanvas(1000, 1000);
    canvas.parent('sketch-holder2');

    angleMode(DEGREES);

    value = 0;
    valSwitch = true;

}

var value = 0;
var valSwitch = true;

function draw() {
    clear();

    translate(500, 500);
    rotate(-90);

    var augeX = 100;
    var augeY = 200;

    noFill();
    stroke(66, 207, 229);
    strokeWeight(5);
    ellipse(0,0,800,600);

    stroke(0);
    strokeWeight(2);
    ellipse(augeY,augeX,70,70);
    ellipse(augeY,-augeX,70,70);

    push();
    fill(0);
    stroke(66, 207, 229);
    strokeWeight(10);
    ellipse(augeY,augeX,20,20);
    ellipse(augeY,-augeX,20,20);
    pop();

    stroke(0);
    strokeWeight(6);
    arc(augeY,augeX,90,90,-40,40);
    arc(augeY,-augeX,90,90,-40, 40);

    if(mouseIsPressed) {
        if(valSwitch){
            value++;
            if(value>199) valSwitch = false;
        } else {
            value--;
            if(value<1) valSwitch = true;
        }
        print(value);
    }

    nose(value);

    arc(-100,0,300,250,120,240);

}

function nose(i) {

    arc(50,0,80+i,100,120,240);

}

function drawSleepCycle(sHR, sMN, sSC, duration) {
    push();

    if (mouseIsPressed) {
        mouseEndX = mouseX;
        mouseEndY = mouseY;

        dist1 = Math.sqrt((mouseEndX - 500*scale)*(mouseEndX - 500*scale)+(mouseEndY - 500*scale)*(mouseEndY - 500*scale));
        angle1 = (Math.acos(mouseEndY/dist1)*180)/Math.PI;


        if(mouseEndX>0 && mouseEndY>0) {

        } else if(mouseEndX>500*scale && mouseEndY<500*scale) {
            angle1 = 180-angle1;
        } else if(mouseEndX<500*scale && mouseEndY<500*scale) {
            angle1 += 180;
        } else if(mouseEndX<500*scale && mouseEndY>500*scale) {
            angle1 = 360-angle1;
        }

        print(angle1);
    }

    offS = dist + oldDist;
    //print([dist, oldDist]);

    var daysecStart = (sHR * 3600) + (sMN * 60) + sSC + offS*10;
    var daysecEnd = daysecStart + duration*3600;

    var startAngle = map(daysecStart, 0, 86400, 0, 360.0);
    var endAngle = map(daysecEnd, 0, 86400, 0, 360.0);

    noFill();
    stroke(255, 0, 0);
    strokeWeight(4);
    arc(0, 0, 870*scale, 870*scale, startAngle, endAngle);

    pop();
}

function drawBeerCycle() {
    push();

    var daysecStart = (16 * 3600);
    var daysecEnd = (6 * 3600);

    var startAngle = map(daysecStart, 0, 86400, 0, 360.0);
    var endAngle = map(daysecEnd, 0, 86400, 0, 360.0);

    noFill();
    stroke(239, 192, 110);
    strokeWeight(3);
    arc(0, 0, 850*scale, 850*scale, startAngle, endAngle);

    pop();
}

function drawSecPointer() {
    push();

    var ms = millis();
    angle = map(ms, 0, 24000, 0, 360.0);

    rotate(angle);
    stroke(88, 214, 221);
    strokeWeight(1);
    line(350*scale, 0, 450*scale, 0);

    strokeWeight(4);
    line(350*scale, 0, 370*scale, 0);
    line(430*scale, 0, 450*scale, 0);
    pop();
}

function drawPointer() {
    push();

    var hr = hour();
    var mn = minute();
    var sc = second();

    var daysecs = (hr * 3600) + (mn * 60) + sc;
    var angle = map(daysecs, 0, 86400, 0, 360.0);


    rotate(angle);
    stroke(100, 200, 100);
    line(350*scale, 0, 450*scale, 0);

    strokeWeight(3);
    line(350*scale, 0, 380*scale, 0);
    line(420*scale, 0, 450*scale, 0);

    pop();
}

function drawSegments(){

    for (i = 0; i < 24; i++) {
        push();
        stroke(200);
        if (i % 6 === 0) continue;
        var angle = map(i, 0, 24, 0, 360);
        strokeWeight(1);
        rotate(angle);
        line(380*scale, 0, 420*scale, 0);
        pop();
    }

    for (i = 1; i < 25; i++) {
        push();

        var angle = map(i, 0, 24, 0, 360);

        fill(200);
        stroke(200);
        strokeWeight(1);
        textAlign(CENTER, CENTER);

        if (i % 6 === 0) {

            rotate(angle);
            translate(250*scale, 0);
            rotate(-angle+90);
            textFont("Arial", 30*scale);

        } else {

            rotate(angle);
            translate(350*scale,0);
            rotate(-angle+90);
            textFont("Arial", 20*scale);
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
    ellipse(0, 0, 800*scale);

    strokeWeight(2);
    line(-500*scale, 0, -300*scale, 0);
    line(0, -500*scale, 0, -300*scale);
    line(300*scale, 0, 500*scale, 0);
    line(0, 300*scale, 0, 500*scale);
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