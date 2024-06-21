//T-Shirt
var sizeofShirt = ['small', 'medium', 'large'];
var shirt1 = "this shirt is for casual wearing";
var shirt2 = "this shirt is for formal wearing";
var shirt3 = "this shirt is for party wearing";
function make_tshirt() {
    var simpleFunction = "This is a ".concat(sizeofShirt[1], " shirt, and ").concat(shirt3);
    console.log(simpleFunction);
    return simpleFunction;
}
var response = make_tshirt();
console.log(response);
