// Callback

// function doSomething(callback) {
//     setTimeout(function() {
//         callback('First data');
//     }, 1000);
// }

// function doOtherThing(callback) {
//     setTimeout(function() {
//         callback('Second data')
//     }, 1000);
// }

// function doAll() {
//     try {

//         doSomething(function(data) {
//             var processedData = data.split('');
    
//                 doOtherThing(function(data2) {
//                     var processedData2 = data2.split('');

//                 setTimeout(function() {
//                     console.log(processedData, processedData2);
//                 }, 1000);
//             });
//         });
//     }catch (err) {

//     }
// }

// doAll();

// Estados das promise / Pending, Fulfilied, Rejected

const doSomethingPromise = new Promise((resolve, reject) => {
    // throw new Error('Something went wrong');
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Second data')
    }, 1000);
});

// Promise.all([doSomethingPromise, doOtherThingPromise]).then(data => console.log(data));
Promise.all([doSomethingPromise, doOtherThingPromise])
.then(data => console.log(data[0].split(''), data[1].split('')));

// Promise.resolve([doSomethingPromise, doOtherThingPromise])
// .then(data => console.log(data))
// .catch(err => console.log(err));

// doSomethingPromise
//     .then(data => console.log(data.split('')))
//     .then(doOtherThingPromise.then(data2 => console.log(data2.split(''))))
//     .catch(err => console.log(err));

