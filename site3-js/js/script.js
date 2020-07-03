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