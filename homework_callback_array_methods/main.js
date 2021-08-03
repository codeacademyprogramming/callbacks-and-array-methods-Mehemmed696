/*1--> reverse method */
// function customReverse(arr = []) {
//     const result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {

//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(customReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*2--> foreach method */

// function customForeach(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);

//     }

// }

// const callbackForach = (value, index, array) => console.log(value);
// customForeach([1, 2, 3, 4, 5, 6, 7, 8, 9], callbackForach);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3--> filter method  */

// function customFilter(arr = [], cb) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {

//         if (callbackFilter(arr[i]) == true) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const callbackFilter = (a) => a % 2 == 0;
// console.log(customFilter([1, 2, 3, 4, 5, 6, 7, 8, 34, 532, 52, 21, 12, 35, 563], callbackFilter));


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4--> every method */
// function customEvery(arr = [], cb) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i]) == true) {
//             count++;
//         }



//     }
//     if (count == arr.length) {
//         return true;
//     }
//     else {
//         return false;
//     }

//     // return count;
// }




// const callbackEvery = (x) => x % 2 == 0;

// console.log(customEvery([5, 4, 12, 6, 14, 8], callbackEvery));


/* SoMe method 2 */
// function customSome(arr, cb) {

//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             return true;
//         }
//     }
//     return false;

// }
// const callbackSome = (value, index, array) => value > 5;

// console.log(customSome([1, 2, 3, 4, 5, 6], callbacSome));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* Every method 2 */

// function customEvery2(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!(cb(arr[i]))) {
//             return false;
//         }
//     }
//     return true;
// }




// const callbackEvery2 = (value, index, array) => value > 6;

// console.log(customEvery2([7, 7, 8], callbackEvery2))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function customMap(arr = [], cb) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));

    }
    return result;
}





const callbackMap = (value, index, array) => value * 2;
console.log(customMap([1, 2, 3, 44, 5, 6, 7, 8, 9], callbackMap));

// arry = [1, 2, 3, 4, 5, 67]

// arr.forEach(element => {
//     console.log(element)

// });
forEach(function callbackMap(array) { });


