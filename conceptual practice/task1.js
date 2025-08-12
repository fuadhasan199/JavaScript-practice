
// // function add(a,b){
// //     let result=a+b 
// //      return result
// // }  
// // function multiplay(a,b){
// //     let result=a*b 
// //     return result
// // } 

// // let a=2
// // let b=3 

// // let final_result=add(a,b)+multiplay(a,b)
// // console.log(final_result); 

// function cashOut(money){
//     let charge= money * (1.75/100) 
//     return charge
// } 
// console.log(cashOut(100).toFixed(2)); 



function validNumber(contact){ 
    if(typeof contact !=='string'){
    return " valid number "
}
  

if(contact.length==11 && contact.startsWith("01")==true && contact.includes("")==true){
     return true 
} else{
    return false
} 
  

} 
console.log(validNumber('01787749095'));