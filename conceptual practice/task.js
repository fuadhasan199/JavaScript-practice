function cashOut(money){
    if(typeof money !=="string"){
       return "invalid number"
    }
    let result=money * 1.75/100 
    return result


} 
 console.log(cashOut('two'));