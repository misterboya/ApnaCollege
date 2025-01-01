const fetchUserInfo = async ()=>{
    const response = await fetch('https://reqres.in/api/users?page=2');//async step
    if (!response.ok) {
        throw new Error('user data not found...');
    }
    //parse json response
    const userData = await response.json();//async step
    console.log(userData);
}
//call the function
fetchUserInfo();
console.log('this is my first line of code in 2025!!!!');