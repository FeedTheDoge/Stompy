function level() {
	this.current = 0;
	this.levels = [
		[
			[100, 550, 50, 50],
			[200, 450, 50, 50],
			[300, 350, 50, 50],
			[300, 300, 50, 50],
			[300, 250, 50, 50]
		],
		[
			[200, 550, 50, 50]
		],
		[
			[300, 500, 50, 50]
		]
	];
	
	this.next = function() {
		var level;
		if(this.current >= this.levels.length) this.current = 0
		var level = this.levels[this.current];
		this.current++;
		
		return level;
	};
}