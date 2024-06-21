var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Ialamabad", "Beijing", "Newyork", "Paris"];
//print your array in its original order.
console.log("original" + places);
//print your array in alphabetical order without modifing the actual list.
console.log("copy" + __spreadArray([], places, true).sort());
// Show that your array is still its original order by printing it.
console.log("original" + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("copy" + __spreadArray([], places, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("copy" + __spreadArray([], places, true).sort().reverse());
// Reverse the order of your list.print thr array to show that its order has changed
console.log("copy" + __spreadArray([], places, true).sort());
//Reverse the order of your list again.print the list to show its back to its original order.
console.log("copy" + __spreadArray([], places, true).sort().reverse());
//sort your array soits stored in alphabatical order has been changed.
console.log("copy" + __spreadArray([], places, true).sort());
