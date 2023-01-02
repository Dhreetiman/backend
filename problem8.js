// problem 8 create two variables and store numbers in them. Now, write code, which return true if one of the variable is 50 or if their sum is 50. Otherwise, you need to return false. Also handle edge cases (in real world, these two numbers will be supplied by the users. Now think what if they supply something which is not a number ?)

function checkFifty(a,b){

    if (typeof(a)=="number" || typeof(b)=='number'){
        if (a===50 || b===50 || a+b === 50){
            console.log(true);
        }
        else{
            console.log(false);
        }   
    }else{
        console.log("error")
    }

}
checkFifty(3,50)