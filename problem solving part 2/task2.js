/*Task -2:
Find the friend with the smallest name.


 */ 

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; 

function smallest_name(value){

let small=value[0]
for(let i=0;i <heights2.length;i++){
    if(value[i].length <small.length){
        small=value[i]
    }
} 
return small


} 
console.log(smallest_name(heights2));