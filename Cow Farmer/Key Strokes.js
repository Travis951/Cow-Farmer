let pressedKeys = {};

function keyPressed() {
	pressedKeys[key] = true;
}

function keyReleased() {
	delete pressedKeys[key];
}
