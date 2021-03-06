var canvas;
var ctx;
var game;
var mousePos;
var pressed;
var bgm;

window.onload = function() {
	canvas = document.getElementById("canvas");
	var size = Math.min(window.innerWidth, window.innerHeight);
	size = Math.floor(size / 64) * 64;
	canvas.width = size;
	canvas.height = size;

	ctx = canvas.getContext("2d");

	game = new Game(size, size);
	requestAnimationFrame(draw);
	
	bgm = new Audio("way-home.wav");
	bgm.onended = function() { bgm.play(); };

	canvas.onmousedown = function(event) {
		mousePos = new Position(event.offsetX / game.level.size, event.offsetY / game.level.size);
		pressed = true;
		bgm.play();
	}
	canvas.onmousemove = function(event) {
		if(pressed) mousePos = new Position(event.offsetX / game.level.size, event.offsetY / game.level.size);
	}
	window.onmouseup = function(event) {
		pressed = false;
	}

	canvas.ontouchstart = function(event) {
		event.preventDefault();
		mousePos = new Position((event.touches[0].clientX - canvas.offsetLeft) / game.level.size, (event.touches[0].clientY - canvas.offsetTop) / game.level.size);
		pressed = true;
		bgm.play();
	}
	canvas.ontouchmove = function(event) {
		event.preventDefault();
		if(pressed) mousePos = new Position((event.touches[0].clientX - canvas.offsetLeft) / game.level.size, (event.touches[0].clientY - canvas.offsetTop) / game.level.size);
	}
	window.ontouchend = function(event) {
		pressed = false;
	}
};

function draw()
{
	window.requestAnimationFrame(draw);
	game.update();
	game.draw();
}
