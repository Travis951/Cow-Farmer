function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	background(255);
	testWorld = new World(1000, 1000, 35);
}

function draw() {
	background(255,0,255);
	testWorld.tickWorld();
}
