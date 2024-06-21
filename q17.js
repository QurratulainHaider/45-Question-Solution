var guest_list = ["Ramal", "Gulfishan", "Shezeena"];
// for (let i=0; i< guest_list.length; i++){
//     console.log(`Dear ` + guest_list[i]+ `\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };
var not_coming = "Ramal";
var new_guest = "Razia";
guest_list[0] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };
//console.log(`Mrs ${not_coming}, is not coming tomorrow`)
guest_list.unshift("Tanveeer");
guest_list.splice(guest_list.length / 2, 2, "Kaneez");
guest_list.push("Nagina");
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };
// console.log('We have found a bigger dinner table so we invited more guest');
console.log('\n\n unfortunately We are out of space so we have space for two guest only\n\n');
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry,Dear ".concat(removed_guest, ",You are not invited for a dinner tomorrow"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are still invited for a dinner tomorrow.\n\nThank you.\n\n"));
    guest_list.splice(0, 2);
    console.log(guest_list);
}
