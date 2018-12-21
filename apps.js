var colors = ["orange", "yellow", "green", "blue", "purple",];
console.log(colors[0]);
console.log(colors[2]);

colors[4] = "ultraviolet";
var fourthColor = colors[3];
console.log(colors[4]);
colors.push("indigo");

colors.unshift("red");
//console.log(colors[0]);  //just checking to make sure the first color is now red
console.log(colors.length);

colors.pop();
console.log(colors.length);
//console.log(colors);  //checking to see if the last color was removed
var i;
for(i=0; i<colors.length; i++) {
	console.log(colors[i]);
};

for(i=0; i<colors.length; i++) {
	console.log(i, colors[i]);
}


var lastColor =  colors[colors.length - 1];
console.log(lastColor);