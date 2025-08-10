
// const height=[50,65,55,49,80]

// function min_height(number){
 
//     let min=number[0] 
     
//     for(let i=1; i<height.length;i++){

//         if(number[i] < min){
//             min=number[i]
//         }

//     } 
//      return min



// } 
// console.log(min_height(height)); 



const height=[50,65,55,49,80]

function max_height(number){
 
    let max=number[0] 
     
    for(let i=1; i<height.length;i++){

        if(number[i] > max){
            max=number[i]
        }

    } 
     return max



} 
console.log(max_height(height));