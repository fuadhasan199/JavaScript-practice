
// // const abc=(...numbers) => {
// //     console.log(numbers); 
// // } 
// // abc(1,2,3,4,5) 

// const arry=[1,2,3,4,5,12,10,11,15,16] 

// const [one,two, , four,...rest]=arry 
// console.log(one,four,two,rest[2,5]); 

const greet=(name,callback)=>{
    console.log('Hi !',name);
    callback()
} 
function  say(){
    console.log('Kemon aco');
} 
greet('Fuad',say)