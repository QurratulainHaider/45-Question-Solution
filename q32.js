var current_users = ['ali', 'mina', 'faraz', 'hina', 'admin'];
var new_users = ['faraz'];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter new user name"));
    }
    else {
        console.log("".concat(new_users, " is avilable"));
    }
});
