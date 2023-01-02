// function number_of_InversionsNaive(arr) {
//     var ctr = 0;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) 
//               ctr++;
//         }
//     }
//     return ctr;
// }

// console.log(number_of_InversionsNaive([2,4,1,3,5]));   
// console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
// console.log(number_of_InversionsNaive([10, 30, 20, -10]));  


// function checkPalindrome(arr) {
//     const len = arr.length;
//     if (len % 2 == 0) return false;
    
//     for (let i = 0; i < len / 2; i++) {
//         if (arr[i] !== arr[len - i - 1]) return false;
//     }
//     return true;
// }
// console.log(checkPalindrome([1, 3, 5, 3, 1]));

let palindromeArray = (arr) => {
    //initialize to true
    let isPalindrome = true;
    
    //loop through half length of the array
    for(let i = 0; i < arr.length / 2; i++) {

        //check if first half is equal to the second half
        if(arr[i] !== arr[arr.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    
    return isPalindrome;
}