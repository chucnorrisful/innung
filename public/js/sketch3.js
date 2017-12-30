function setup() {

    var viewPort = viewport();

    if (checkMob()) {
        scale = viewPort.width / 1200;
    } else {
        scale = viewPort.height / 1200;
    }
    var canvas = createCanvas(1000 * scale, 1000 * scale);
    canvas.parent('sketch-holder');

    angleMode(DEGREES);

    angle = 0;
    oldAngle = 0;
    mouseStartX = 0;
    mouseStartY = 0;
    mouseEndX = 0;
    mouseEndY = 0;
    offS = 0;

    speakCurrentTime();
}

var scale = 1;

var mouseStartX;
var mouseStartY;
var mouseEndX;
var mouseEndY;
var offS;
var oldAngle;
var angle;

function draw() {
    clear();

    translate(500 * scale, 500 * scale);
    rotate(-90);

    var viewPort = viewport();
    scale = viewPort.height / 1200;

    if (checkMob()) {
        scale = viewPort.width / 1200;
    }

    drawSleepCycle(2, 0, 0, 7);

    drawBeerCycle();

    drawBase();

    drawSegments();

    drawPointer();
    //drawSecPointer();

}

function checkMob() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

function windowResized() {
    resizeCanvas(1000 * scale, 1000 * scale);
}

function viewport() {
    var e = window
        , a = 'inner';
    if (!( 'innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
}

function mousePressed() {

    mouseStartX = mouseX - 500 * scale;
    mouseStartY = mouseY - 500 * scale;
    mouseEndX = mouseX - 500 * scale;
    mouseEndY = mouseY - 500 * scale;


}

function speakCurrentTime() {
    var min = minute();
    var now = hour() + ":";
    if(min/10 < 1){
        now += "0";
    }
    now += minute();
    responsiveVoice.speak(now + " Uhr", "Deutsch Female");
}

function mouseReleased() {
    oldAngle += angle;
    angle = 0;
}

function calcAngle(mX, mY) {
    return Math.atan2(mY, mX) * 180 / Math.PI;
}

function drawSleepCycle(sHR, sMN, sSC, duration) {
    push();

    if (mouseIsPressed) {
        mouseEndX = mouseX - 500 * scale;
        mouseEndY = mouseY - 500 * scale;

        var angle1 = calcAngle(mouseStartX, mouseStartY);
        var angle2 = calcAngle(mouseEndX, mouseEndY);

        angle = angle2 - angle1;

    }

    offS = angle + oldAngle;

    var daysecStart = (sHR * 3600) + (sMN * 60) + sSC;
    var daysecEnd = daysecStart + duration * 3600;

    var startAngle = map(daysecStart, 0, 86400, 0, 360.0);
    var endAngle = map(daysecEnd, 0, 86400, 0, 360.0);

    noFill();
    stroke(255, 0, 0);
    strokeWeight(4);
    arc(0, 0, 870 * scale, 870 * scale, startAngle + offS, endAngle + offS);

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
    arc(0, 0, 850 * scale, 850 * scale, startAngle, endAngle);

    pop();
}

function drawSecPointer() {
    push();

    var ms = millis();
    angle = map(ms, 0, 24000, 0, 360.0);

    rotate(angle);
    stroke(88, 214, 221);
    strokeWeight(1);
    line(350 * scale, 0, 450 * scale, 0);

    strokeWeight(4);
    line(350 * scale, 0, 370 * scale, 0);
    line(430 * scale, 0, 450 * scale, 0);
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
    line(350 * scale, 0, 450 * scale, 0);

    strokeWeight(3);
    line(350 * scale, 0, 380 * scale, 0);
    line(420 * scale, 0, 450 * scale, 0);

    pop();
}

function drawSegments() {

    for (i = 0; i < 24; i++) {
        push();
        stroke(200);
        if (i % 6 === 0) continue;
        var anglePhi = map(i, 0, 24, 0, 360);
        strokeWeight(1);
        rotate(anglePhi);
        line(380 * scale, 0, 420 * scale, 0);
        pop();
    }

    for (i = 1; i < 25; i++) {
        push();

        anglePhi = map(i, 0, 24, 0, 360);

        fill(200);
        stroke(200);
        strokeWeight(1);
        textAlign(CENTER, CENTER);

        if (i % 6 === 0) {

            rotate(anglePhi);
            translate(250 * scale, 0);
            rotate(-anglePhi + 90);
            textFont("Arial", 30 * scale);

        } else {

            rotate(anglePhi);
            translate(350 * scale, 0);
            rotate(-anglePhi+ 90);
            textFont("Arial", 20 * scale);
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
    ellipse(0, 0, 800 * scale);

    strokeWeight(2);
    line(-500 * scale, 0, -300 * scale, 0);
    line(0, -500 * scale, 0, -300 * scale);
    line(300 * scale, 0, 500 * scale, 0);
    line(0, 300 * scale, 0, 500 * scale);
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