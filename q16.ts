 //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 
 
 
 
 //More guest.
 
 let guest_list: string[] = ["Ramal", "Gulfishan", "Shezeena"];
// for (let i=0; i< guest_list.length; i++){
//     console.log(`Dear ` + guest_list[i]+ `\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };


let not_coming: string = "Ramal";
let new_guest: string = "Razia";
guest_list[0] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
};
console.log(`Mrs ${not_coming}, is not coming tomorrow`)


guest_list.unshift(`Tanveeer`)
guest_list.splice(guest_list.length/2, 2, "Kaneez");
guest_list.push("Nagina");
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
};
console.log('We have found a bigger dinner table so we invited more guest');
