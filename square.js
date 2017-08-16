var Square = function() {
	this.squareDiv;
	this.init();
}

Square.prototype.init = function() {
		var square = document.createElement("div");
		square.id = "square";
		document.body.appendChild(square);
		this.styleDiv();
	};

	Square.prototype.styleDiv = function() {
		this.squareDiv = document.getElementById("square");
		this.squareDiv.style.width = "300px";
		this.squareDiv.style.height = "300px";
		this.squareDiv.style.border = "2px solid red";
	}



//Public methods: fade, change background, change background with interval,
//Private variable counts how many effects took place