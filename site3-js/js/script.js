var string = "Hello";

string = string+" World";
console.log(string+"!");


console.log((5+4) / 3);
console.log(undefined/5);
test1(2);
function test1 (a) {
	console.log(a/5);
}
test1();

x='4';
y=4;
if(x==y) {
	console.log("Non-strict: x='4' is equal to y=4");
}
if(x===y) {
	console.log("Strict: x='4' is equal to y=4");
}
else {
	console.log("Not equal");
}

var sum = 0
for( var i = 0; i < 10; i++) {
	sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

function orderChickenWith(sideDish) {
	// if(sideDish === undefined) {
	// 	sideDish = "whatever";
	// } better way:
	sideDish = sideDish || "whatever";
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

// Object creation
var company = new Object();
company.name = "Facebook";
console.log(company);
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);
console.log(company["name"]);

var stockPropName = "stock of company";
company[stockPropName] = 110;
console.log("Stock price is: " + company["stock of company"]);

// Object creation with object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	"stock of company": 110
};
console.log(facebook);

// Functions explained
function multiply(x, y) {
	return x * y;
}
console.log(multiply(5,3));
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier) {
	var myFunc = function(x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);

// pass by value
function changePrimitive(primValue) {
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(primValue);

	primValue = 5;
	console.log("after:");
	console.log(primValue);
}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);

function test() {
	console.log(this);
	this.myName = "Samuel";
	console.log("Hello Coursera!");
}
test();
console.log(window.myName);

function Circle (radius) {
	this.radius = radius;
}

// make one circle method for all circles
Circle.prototype.getArea = 
	function() {
		return Math.PI * Math.pow(this.radius, 2);
	}

var myCircle = new Circle(10);
console.log(myCircle);

// Object literals and "this"
var literalCircle = {
	radius: 10,
	getArea: function() {
		var self = this;
		console.log(this);

		var increaseRadius = function() {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
}
console.log(literalCircle.getArea());

// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS, & JS"};
console.log(array);
console.log(array[1]);
array[2]("Sam");
array[2](array[0]);
console.log(array[3].course);

// Short hand array creation
var names = ["Sam", "Dave", "John"];
for(var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

names[100] = "Jim";

var names2 = ["Sam", "Dave", "John"];
var myObj = {
	name: "Sam",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}

for(var name in names2) {
	console.log("Hello " + names2[name]);
}
names2.greeting="Hi!";
for(var name in names2) {
	console.log("Hello " + names2[name]);
}
console.log(names2);

// Closures
function makeMultiplier (multiplier) {

	function b() {
		console.log("Multiplier is: " + multiplier);
	}
	b();
	return (
		function (x) {
			return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env, etc.

// Immediately Invoked Function Expression
// IIFE
(function (name) {
	console.log("Hello " + name);
})("Samuel");


