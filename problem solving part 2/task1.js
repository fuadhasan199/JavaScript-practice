/* Task -1:
Find the lowest number in the array below.


  */  
 const heights2 = [167, 190, 120, 165, 137]; 

 function lowest_number(value){

    let lowest=value[0]
    for(let i=0; i< heights2.length;i++){

      if(value[i] < lowest){

        lowest=value[i]
      }

    } 
    return lowest

 } 
 console.log(lowest_number(heights2));