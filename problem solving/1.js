
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


const array=[10,11,13,15,16,18,20,21] 

function even(value){

const even=[] 

for (const el of array) { 

    if(el %2===0){
        even.push(el)
    }
    
} 
return even

}
console.log(even());



