// 4. Print all numbers of this array [[1,2], [3,4], [5,6], [7,8]]

let obj = [[1,2],[3,4],[5,6],[7,8]] 
for(let i=0 ; i<obj.length ; i++){ 
    for(let j=0 ; j<obj.length ; j++){ 
        if(obj[i][j] == undefined){ 
            continue; 
        } 
        else{ 
            console.log(obj[i][j]); 
        }; 
    }; 
};