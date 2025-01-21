type userObj = {
    name: string;
    email: string;
    isPaid: boolean
}

let newUser = {
    name: "Venu",
    email: "venu@email.com",
    isPaid: true
}

function aliasObject(user: userObj){
    console.log(`this is user ${user.name}`);
    console.log(`this is email ${user.email}`);
    console.log(`user is paid? ${user.isPaid}`);
}
aliasObject(newUser);
