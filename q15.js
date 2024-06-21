var guest_list = ["Ramal", "Gulfishan", "Shezeena"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear " + guest_list[i] + "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n");
}
;
var not_coming = "Ramal";
var new_guest = "Razia";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
;
console.log("Mrs ".concat(not_coming, ", is not coming tomorrow"));
