//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.




// No users
//let users: string[]=['ali', 'mina', 'faraz', 'hina', 'admin']

let users: string[]=[]
if(users.length > 0){
console.log("We have enough users")
}
else {
     console.log("We need to find some users!")
}