//Task 31
//No Users: Add an if test to Exercise 28 to make sure the list of
// users is not empty.
//• If the list is empty, print the message We need to find some
// users!
//• Remove all of the usernames from your array, and make sure the
// correct message is printed.
let usernames = ["Admin", "Erik", "john", "jackson", "johnson"];
if (usernames.length === 0) {
    console.log(" we need to find some users ! ");
}
else {
    usernames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else
            (`Hellow ${username} , thank you for logging in again.`);
    });
}
usernames = [];
if (usernames.length === 0) {
    console.log("we need to find some new users");
}
export {};
