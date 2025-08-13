function validContact(number){
 
    if(number.length==11 && number.startsWith('01')==true && number.includes("")) {
        return true
    } 
    else{
        return false
    }


} 
console.log(validContact('787749095'));