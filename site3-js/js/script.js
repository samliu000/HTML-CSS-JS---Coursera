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

