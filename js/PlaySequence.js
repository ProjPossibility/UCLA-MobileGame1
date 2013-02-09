function PlaySequence(input_string) {
	this.left 	= new Audio("sounds/leftSword.wav");
	this.center = new Audio("sounds/centerSword.wav");
	this.right 	= new Audio("sounds/rightSword.wav");
	this.run;
	this.input_string = input_string.split("");
	this.init();
}


PlaySequence.prototype.init = function() {
	oThis = this;
	this.play_back_sound()

	run = setInterval(function() {
		oThis.play_back_sound();
		if ( oThis.input_string[0] == null ) {
			clearInterval(run);
		}
	}, 1000);
}

PlaySequence.prototype.play_back_sound = function() {
	var move = this.input_string[0];
	this.input_string.splice(0, 1);

	if (move == "L") {
		this.left.play();
	} else if (move == "R") {
		this.right.play();
	} else if (move == "U") {
		this.center.play();
	} else if (move == " ") {
		// do nothing
	}
}