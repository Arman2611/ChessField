
// Creating cells of the chess field
let field = document.getElementById('chess-field');
function createCells (field) {
	for (var i = 0; i < 64; i++) {
		field.innerHTML += "<div class='cell'></div>"
	}
}
createCells(field);


// Painting cells with white and black colors
let cells = document.getElementsByClassName('cell');
function paintWhite (i) {cells[i].classList.add("white")}
function paintBlack (i) {cells[i].classList.add("black")}
function paintCells (cells) {
	let currentColor = "white";
	function changeColor () {
		if (currentColor == "white") {
			currentColor = "black"
		} else {currentColor = 'white'};
	}
	for (var i = 0; i < cells.length; i++) {
		if (currentColor == "white") {
			paintWhite(i)
		} else {
			paintBlack(i)
		};
		changeColor();
		if ( i === 7 || i === 15 || i === 23 || i === 31 || i === 39 || i === 47 || i === 55 ) {changeColor()}
	}
}
paintCells(cells);


// Figures lists
let blacks = [
	{role: "rook",data: "&#9820",alive: true,posY: 0,posX: 0},
	{role: "horse",data: "&#9822",alive: true,posY: 0,posX: 1},
	{role: "bishop",data: "&#9821",alive: true,posY: 0,posX: 2},
	{role: "queen",data: "&#9819",alive: true,posY: 0,posX: 3},
	{role: "king",data: "&#9818",alive: true,posY: 0,posX: 4},
	{role: "bishop",data: "&#9821",alive: true,posY: 0,posX: 5},
	{role: "horse",data: "&#9822",alive: true,posY: 0,posX: 6},
	{role: "rook",data: "&#9820",alive: true,posY: 0,posX: 7},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 0},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 1},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 2},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 3},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 4},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 5},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 6},
	{role: "soldier",data: "&#9823",alive: true,posY: 1,posX: 7},
]
let whites = [
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 0},
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 1},
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 2},
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 3},
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 4},
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 5},
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 6},
	{role: "soldier",data: "&#9817",alive: true,posY: 6,posX: 7},
	{role: "rook",data: "&#9814",alive: true,posY: 7,posX: 0},
	{role: "horse",data: "&#9816",alive: true,posY: 7,posX: 1},
	{role: "bishop",data: "&#9815",alive: true,posY: 7,posX: 2},
	{role: "queen",data: "&#9813",alive: true,posY: 7,posX: 3},
	{role: "king",data: "&#9812",alive: true,posY: 7,posX: 4},
	{role: "bishop",data: "&#9815",alive: true,posY: 7,posX: 5},
	{role: "horse",data: "&#9816",alive: true,posY: 7,posX: 6},
	{role: "rook",data: "&#9814",alive: true,posY: 7,posX: 7},
]

// Drawing figures
function drawFigures (figures) {
	for (var i = 0; i < figures.length; i++) {
		let cellNumber = figures[i].posY * 8 + figures[i].posX;
		if (figures == blacks) {
			cells[cellNumber].style.color = "black";
			cells[cellNumber].classList.remove("shadow");
		} else {
			cells[cellNumber].style.color = "white";
			cells[cellNumber].classList.add("shadow");
		}		
		cells[cellNumber].innerHTML = figures[i].data;
	}
}
drawFigures(blacks);
drawFigures(whites);
