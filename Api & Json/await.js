async function loadUser() {

 try{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    
    const users=await response.json() 
     users.forEach(user => { 
        console.log( user.name); 
     });
 } 

 catch(eror){
  console.log('eror is here',eror);
 }

 

}

loadUser()