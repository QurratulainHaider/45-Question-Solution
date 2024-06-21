//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




//Shrinking Guest.
let guest_list: string[] = ["Ramal", "Gulfishan", "Shezeena"];
// for (let i=0; i< guest_list.length; i++){
//     console.log(`Dear ` + guest_list[i]+ `\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };


let not_coming: string = "Ramal";
let new_guest: string = "Razia";
guest_list[0] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };
//console.log(`Mrs ${not_coming}, is not coming tomorrow`)


guest_list.unshift(`Tanveeer`)
guest_list.splice(guest_list.length/2, 2, "Kaneez");
guest_list.push("Nagina");
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// };
// console.log('We have found a bigger dinner table so we invited more guest');

console.log('\n\n unfortunately We are out of space so we have space for two guest only\n\n');
while(guest_list.length>2){
    let removed_guest = guest_list.pop();
    console.log(`Sorry,Dear ${removed_guest},You are not invited for a dinner tomorrow`);

}
for (let i=0; i<guest_list.length; i++){
        console.log(`Dear ${guest_list[i]}\n\nYou are still invited for a dinner tomorrow.\n\nThank you.\n\n`);
        guest_list.splice(0,2);
        console.log(guest_list);
    }

