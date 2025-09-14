
const abc=() => {
  const name= document.getElementById("name").value
  const mail= document.getElementById("mail").value
    
  const data={name,mail} 
   localStorage.setItem('name',JSON.stringify(data))
} 
