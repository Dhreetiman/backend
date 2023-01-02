// 3. print all numbers that are divisible by 5 - [12, 45, 67, 89, 90, 34, 35, 55] 

arr = [12, 45, 67, 89, 90, 34, 35, 55];

function divisible(a){
    let ar =[]
    for (x in a){
        if((a[x]%5)==0){
            ar.push(a[x])
        }

    }
    return ar;
}

console.log(divisible(arr))