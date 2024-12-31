//callback function
//async call/task = once this task is completed then only callback function is called

//basic callback
function greet(name, callbak) {
    console.log('Hello ' + name);//normal/sync step/task, could be async call/api
    callbak();
}

//callback function
function welcome() {
    console.log('Welcome !!!');
}

greet('Venu', welcome);

//callback with async function
function printInfo(name, callbak) {
    //async function/task/step
    setTimeout(function() {
        console.log('Printing info for ' + name);
        callbak('Please call be back.....');
    }, 5000);
}
//callback
function displayMsg(message) {
    console.log(message);
}

printInfo('Lisa', displayMsg);

//Another callback function example
function fetchUserData(userId, callbak) {
    setTimeout(function() {
        const users = {
            1 : {id:1, name:'Venu'},
            2 : {id:2, name: 'Tom'}
        }
        const user = users[userId];
        if (user) {
            callbak(null, user);
        } else {
            callbak('User not found !!!', null);
        }
    }, 3000);
}
//callback function
function handleUserData(error, user) {
    if (error) {
        console.error('Error : ', error);
    } else {
        console.log('User : ', user);
    }
}

fetchUserData(2, handleUserData);