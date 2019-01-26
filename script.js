var canvas;
var ctx;
var game;
var mousePos;
var pressed;

window.onload = function() {
	canvas = document.getElementById("canvas");
	var size = Math.min(window.innerWidth, window.innerHeight);
	size = Math.floor(size / 64) * 64;
	canvas.width = size;
	canvas.height = size;
	
	ctx = canvas.getContext("2d");
	
	game = new Game(size, size);
	requestAnimationFrame(draw);
	
	canvas.onmousedown = function(event) {
		mousePos = new Position(event.offsetX / game.level.size, event.offsetY / game.level.size);
		pressed = true;
	}
	canvas.onmousemove = function(event) {
		if(pressed) mousePos = new Position(event.offsetX / game.level.size, event.offsetY / game.level.size);
	}
	window.onmouseup = function(event) {
		mousePos = null;
		pressed = false;
	}
};

function draw()
{
	window.requestAnimationFrame(draw);
	game.update();
	game.draw();
}