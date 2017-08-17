document.addEventListener("DOMContentLoaded", function(event) { 
	var squareButton = document.getElementById("new-square");
	squareButton.addEventListener("click", function() {
		newSquare = new Square();
		newSquare.fadeSquare();
		this.style.display = "none";
	})
});
//Code above shows one example of how to use this component

function Square() {
    this.squareDiv = document.createElement("div");
    this.squareDiv.id = "square" + this.add();
    this.squareDiv.style.width = "300px";
    this.squareDiv.style.height = "300px";
    this.squareDiv.style.border = "2px solid black";
    this.squareDiv.style.backgroundColor = "blue";
    this.squareDiv.style.margin = "0 auto";
    document.body.appendChild(this.squareDiv);
}


Square.prototype = function() {
	//private methods
	var _changeRandomColor = function(elm) {
		var colorArray = ["red", "orange", "purple", "green"];
		var randomNumber = Math.floor(Math.random()*colorArray.length);
		elm.style.backgroundColor = colorArray[randomNumber];
		elm.style.opacity = 1;
	};


	var _fadeElement = function(elm) {
		var fadeEffect = setInterval(function () {
	        if (!elm.style.opacity) {
	            elm.style.opacity = 1;
	        }
	        if (elm.style.opacity < 0.3) {
	            clearInterval(fadeEffect);
	        } else {
	            elm.style.opacity -= 0.1;
	        }
    	}, 200);
	}

	var _counterFunc = function () {
	  var counter = 0;
	  return function () {
	  	return counter += 1;
	  }
	}

	var add = _counterFunc();

	//public methods(API)
	var changeBackgroundColorSquare = function() {
		_changeRandomColor(this.squareDiv);
	};


	var fadeSquare = function() {
		_fadeElement(this.squareDiv);
	}

	return {
		changeBackgroundColorSquare: changeBackgroundColorSquare,
		fadeSquare: fadeSquare,
		add: add
	}
}();




