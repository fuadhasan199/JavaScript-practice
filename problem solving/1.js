
// function kilo_to_mile(value){

//     let kilo=value * 0.621371 
//     return kilo
// } 
// console.log(kilo_to_mile(10)); 

// function mileTOkilo(value){
//     let mile = value * 1.60934 
//     return mile
// } 
// console.log(mileTOkilo(10)); 

// function isleaper(year){ 

//    if(year % 400 ===0 && year%100 !==0 && year % 4===0) {

//      return "This is leaper"
//    } 
//    else{
//     return 'this is not leaper'
//    }
// } 
// console.log(isleaper(1900)); 


// function height(value){
//     let result= value / 12 
//     return result
// } 
// console.log('Your height is',height(70),'fit'); 




// function even(value){

// const even=[] 

// for (const el of array) { 

//     if(el %2===0){
//         even.push(el)
//     }
    
// } 
// return even

// }
// console.log(even()); 


// const array=[10,11,13,15,16,18,20,21] 

// function odd_avg(value){
//     let odd=[]

//     for (const el of array) { 

//         if(el%2===1){
//             odd.push(el)
            
//         } 
       
        
//     }  
//     let sum=0

//     for (const ele of odd) {
//         sum=sum+ele
//     } 
//     let avarage=sum /odd.length
//     return avarage
    
// } 
// console.log(odd_avg()); 

/*
const array=['fuad','porag','abul','sujon','porag','fuad','kabul'] 
 
const new_array=[...new Set(array)] 
console.log(new_array);
*/ 

const fruits = ["apple", "banana", "apple", "orange", "banana", "grape"];

const unique=[]  
function remove(value){


for(let i=0; i<fruits.length;i++){
    if(!unique.includes(value[i])){
        unique.push(value[i])
    }
} 
return unique
} 
console.log(remove(fruits));

