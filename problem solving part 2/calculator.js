
function add(num1,num2){
    return num1+num2
} 
function sub(num1,num2){
    return num1-num2
} 

function multi(num1,num2){
    return num1*num2
} 
function div(num1,num2){
    return num1 /num2 
} 
  

function calculator(a,b,operation) {
  
       if(operation===add){
          let result=add(a,b) 
          return result
       } 
       else if(operation===sub){

        let result=sub(a,b) 
        return result
       } 
       else if(operation===multi){
        let result= multi(a,b)
        return result
       } 
       else if(operation===div){
           

        let result=div(a,b) 
       
          return  result } 
           else{
            return "result is not defined"
         
          } 
          



} 
console.log("add is:",calculator(10,17,add))
console.log("sub is:",calculator(100,17,sub))
console.log("multi is:",calculator(10,10,multi))
console.log("devide is:",calculator(100,10,div))