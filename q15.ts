//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.










// Changing gueste list.

let guest_list: string[] = ["Ramal", "Gulfishan", "Shezeena"];
for (let i=0; i< guest_list.length; i++){
    console.log(`Dear ` + guest_list[i]+ `\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
};


let not_coming: string = "Ramal";
let new_guest: string = "Razia";
guest_list[0] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
};
console.log(`Mrs ${not_coming}, is not coming tomorrow`)
