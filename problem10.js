// problem 10 you have 3 numbers. write a program which can find the largest number

const a = 858
const b = 743
const c = 523

if(a>b){
    if(a>c){
        console.log(a , "is the largest number")
    }else{
        console.log(c, "is the largest number")
    }
}else{
    if(b>c){
        console.log(b, "is the largest number")
    }else{
        console.log(c, "is the largest number")
    }
}