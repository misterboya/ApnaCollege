var newUser = {
    name: "Venu",
    email: "venu@email.com",
    isPaid: true
};
function aliasObject(user) {
    console.log("this is user ".concat(user.name));
    console.log("this is email ".concat(user.email));
    console.log("user is paid? ".concat(user.isPaid));
}
aliasObject(newUser);
