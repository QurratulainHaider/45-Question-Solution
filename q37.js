var size = ['medium', 'large'];
var defultMessage = "I love typescript";
var mediumShirt = ("Size of shirt is : ".concat(size[0], ",").concat(defultMessage));
var largeShirt = ("Size of shirt is : ".concat(size[1], ",").concat(defultMessage));
var smallShirt = ("Size of shirt is : small and i love paintaing");
var extraLarge = ("Size of shirt is : extralarge and i love hiking");
function make_tshirt() {
    var simpleFunction = (extraLarge);
    console.log(simpleFunction);
    return simpleFunction;
}
var response = make_tshirt();
console.log(response);
