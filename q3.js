//lowercase
var personName = "Anie";
console.log("lowercase", personName.toLowerCase());
//uppercase
console.log("uppercase", personName.toUpperCase());
//title case
console.log("titlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));