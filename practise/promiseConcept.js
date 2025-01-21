const randomNumberePromise = new Promise((resolve, reject) => {
    //async operation
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);
        } else {
            reject(new Error('value is too small'));
        }
    }, 3000);
});

randomNumberePromise.then(result => {
    console.log('Promise is fullfilled with value: ' , result);
}).catch(error => {
    console.error('Promise is rejected with error: ' , error);
});