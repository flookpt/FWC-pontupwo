// #
var balloon = $('#balloon');

var colors = ['red', 'green', 'blue'];
var colorIndex = 0;

var minSize = 200;
var maxSize = 420;
var currentSize = minSize;

function updateBalloon() {
	// #
	balloon.css({
		width: currentSize + 'px',
		height: currentSize + 'px',
		backgroundColor: colors[colorIndex]
	});
}

function growBalloon() {
	currentSize += 10;
	colorIndex = (colorIndex + 1) % colors.length;

	if (currentSize > maxSize) {
		currentSize = minSize;
	}

	updateBalloon();
}

// #
balloon.on('click', growBalloon);
balloon.on('mouseleave', shrinkBalloon);

function shrinkBalloon() {
	currentSize -= 5;
	if (currentSize < minSize) {
		currentSize = minSize;
	}

	colorIndex = (colorIndex - 1 + colors.length) % colors.length;

	updateBalloon();
}