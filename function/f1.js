 /*
 function porag(){
  
    console.log('Fuad Hasan');
    console.log('khandakar');

} 

porag() 

function square(num){
      let result=num*num
    console.log( 'the square value of :',result); 
} 

square(10) 
  function add_num(num1,num2){
    let result=num1+num2 
    console.log('The add number value of :',result);
  } 
  add_num(10,20)  */  

  function double_or_triple(number,doDouble){
     if (doDouble===true){
        const result=number*2
        return result
     } 
     else{
        const result=number*3 
        return result
     }

  } 
   console.log(double_or_triple(10,true));