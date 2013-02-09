var Game  = (function( p1, p2) {
	
	var _p1;
	var _p2;
	
	function Game (p1 , p2 ) {
	
		this._p1 = p1;
		this._p2 = p2;
	};
	
	Game.prototype.playMusic() {		
	
	}
	
	Game.prototype.attacking( attackingPlayer , defendingPlayer ) {
			
	}	
	

}();

var Player = (function() {

	var _life;
	var _isActive;
	var _moves;
	// var _wins;
	
	function Player( ) {
		this._life = 10;
		this._isActive = false;
	};
	
	Player.prototype.getLife = function() {
		return this._life;
	}

	Player.prototype.takeHit = function() {
		return this._life -= 1;
	}
	
	Player.prototype.makeActive = function() {
		this._isActive = true;
	}
	
	Player.prototype.makeInactive = function() {
		this._isActice = false;
	}
	
}();