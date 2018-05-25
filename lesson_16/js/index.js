// VARIABLES AND CONSTANTS

const n = 10;

let count_index = document.getElementById('count_index');
const start_btn = document.getElementById('start_btn');
const pause_btn = document.getElementById('pause_btn');
const stop_btn = document.getElementById('stop_btn');
const x1_btn = document.getElementById('x1_btn');
const x2_btn = document.getElementById('x2_btn');
const x3_btn = document.getElementById('x3_btn');




// FUNCTIONS

// Forms an array of numbers
function display(a) {
	let start = a;
	let result = [];
	while (start > 0) {
		result.push(start--);
	}
return result.reverse();
}


// Adds numbers to the timer display
function addEl(arr) {
	let number = '';
	for(let i = 0; i < arr.length; i += 1){
		if (i + 1 == arr.length) {
			number += '<li>' + arr[i] + '</li>';//for last element of "display" array
		} else {
			number += '<li>' + arr[i] + ',' + '</li>';
		}
	}
return number;
}

document.getElementById('display').innerHTML = addEl(display(n));


// Display counter on the timer monitor

pointer = 0;
count_index.appendChild(document.createTextNode(pointer));

function counter() {
	let timerId = setInterval(function(){  

		pointer += 1;
		return pointer;
	}, 1000);
}



//Function
function pause() {

}


//Function
function restart() {

}


//Function
function speed_x1() {
	
}


//Function
function speed_x2() {
	
}


//Function
function speed_x3() {
	
}




// PROCESSING EVENTS

start_btn.addEventListener("click", counter);
pause_btn.addEventListener("click", pause);
stop_btn.addEventListener("click", restart);
x1_btn.addEventListener("click", speed_x1);
x2_btn.addEventListener("click", speed_x2);
x3_btn.addEventListener("click", speed_x3);



// for(let i = 0; i < display(n).length; i += 1) {
// 	display(n)[i].style.backgroundColor = 'green';
// }