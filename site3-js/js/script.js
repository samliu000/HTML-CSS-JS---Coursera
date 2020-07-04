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


