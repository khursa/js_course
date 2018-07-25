function Human(data) {
    this.name = data.name;
    this.age = data.age;
};

Human.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
};

function AlevelStudent(data) {
	Human.apply(this, arguments);
	this.marks = data.marks;
};

AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.constructor = AlevelStudent;

AlevelStudent.prototype.averageMark = function() {
	let sum = 0;
	let result = 0;
	for(let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}
	return result = sum / this.marks.length;
};

let person = new Human({
	name: "Vasya",
	age: 20
});

let myProfile = new AlevelStudent({
	name: "Alexandr",
	age: 27,
	marks: [2, 2, 2, 2, 2]
});