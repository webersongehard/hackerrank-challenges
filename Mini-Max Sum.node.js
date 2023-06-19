'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let max = arr[0]
    let min = arr[0]
    let sum = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] < min) {
            min = arr[i] 
            }
            
        else if (arr[i] > max) {
            max = arr[i]
        }
    }    
    console.log(sum - max, sum - min);   
   
    }
    
    
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
