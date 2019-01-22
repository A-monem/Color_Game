var sq = document.querySelectorAll(".square")
var colorDis = document.getElementById("colorDisplay")
var btnNewColor = document.querySelector(".left button")
var btnEasy = document.getElementById("easy")
var btnHard = document.getElementById("hard")
var cont_1 = document.getElementById("container_1")

//page loading
btnHard.classList.add("btnSelect")
newGame(6)

//add listeners to "NEW GAME" button
btnNewColor.addEventListener("click", function(){
	if (btnHard.classList[0] === "btnSelect"){
    newGame(6)
	}
	else{
		newGame(3)
	}
})

btnNewColor.addEventListener("mouseover", function(){
	this.classList.add("btnSelect")
})

btnNewColor.addEventListener("mouseout", function(){
	this.classList.toggle("btnSelect")
})

//add listeners to "EASY" button
btnEasy.addEventListener("click", function(){
	this.classList.add("btnSelect")
	btnHard.classList.remove("btnSelect")
	newGame(3)
})

//add listeners to "HARD" button
btnHard.addEventListener("click", function(){
	this.classList.add("btnSelect")
	btnEasy.classList.remove("btnSelect")
	newGame(6)
})

//function to generate a new game 
function newGame(num){
	cont_1.style.backgroundColor="steelblue"
	var d = Math.floor(Math.random()*num)
	// generate array of colours
	colors = generateNewColor(num)

	// display picked colour
	pickedColor = colors[d]
	colorDis.textContent = pickedColor
	number = num

	// loop over all squares
	for (i = 0; i < sq.length; i++){
		// change background colour
		sq[i].style.backgroundColor = colors[i]
		
		// //add an event when clicking the square
		sq[i].addEventListener("click", function(){
			if (this.style.backgroundColor === pickedColor){
				uniteColors(pickedColor, number)
			}
			else{
				this.style.backgroundColor = "#232323"
			}	
		})
	}
}

//generate 3 or 6 new colors
function generateNewColor(num){
	colors=[]
	// generate random rgb colors
	for (i = 0; i < num; i++){
		r=Math.floor(Math.random()*256)
		g=Math.floor(Math.random()*256)
		b=Math.floor(Math.random()*256) 
		//combine colours into a string  
		c = "rgb(" + r + ", " + g + ", "+ b + ")"

		colors.push(c)
	}
	if (num === 3){
		for(j=0; j<3; j++){
			colors.push("#232323")
		}
	}
	return colors
}

//change squares background color to picked color
function uniteColors(color, num){
	for (i = 0; i < num; i++){
		sq[i].style.backgroundColor = color
	}
	cont_1.style.backgroundColor=color
}