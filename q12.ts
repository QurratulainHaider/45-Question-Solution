//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



//Greeting

let friends: string[] = ["Gull",  "Alina",  "Nighat", "Aroosha"];
let message: string = "you are invited for a picnic tomorrow ";
for (let i = 0; i < friends.length; i++) {
    console.log(message+friends[i]);
}