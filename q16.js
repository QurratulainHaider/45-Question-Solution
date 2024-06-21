var guest_list = ["Ramal", "Gulfishan", "Shezeena"];
// for (let i=0; i< guest_list.length; i++){
//     console.log(`Dear ` + guest_list[i]+ `\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };
var not_coming = "Ramal";
var new_guest = "Razia";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
;
console.log("Mrs ".concat(not_coming, ", is not coming tomorrow"));
guest_list.unshift("Tanveeer");
guest_list.splice(guest_list.length / 2, 2, "Kaneez");
guest_list.push("Nagina");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
;
console.log('We have found a bigger dinner table so we invited more guest');
