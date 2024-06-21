//Seeing the world.

let places: string[]= ["Ialamabad", "Beijing", "Newyork", "Paris"];


//print your array in its original order.
console.log(`original` + places);

//print your array in alphabetical order without modifing the actual list.
console.log(`copy` + [...places].sort());
// Show that your array is still its original order by printing it.
console.log(`original` + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`copy` + [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log(`copy` + [...places].sort().reverse());
// Reverse the order of your list.print thr array to show that its order has changed
console.log(`copy` + [...places].sort());

//Reverse the order of your list again.print the list to show its back to its original order.
console.log(`copy` + [...places].sort().reverse());
//sort your array soits stored in alphabatical order has been changed.
console.log(`copy` + [...places].sort());