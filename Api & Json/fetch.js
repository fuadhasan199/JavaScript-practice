

 const Load=() => {
   const abc=fetch('https://jsonplaceholder.typicode.com/todos/1') 
.then((response) => response.json()) 
 .then((dipu) =>console.log(dipu)) 
 }


 const porag=() => {
   
    const fuad=fetch("https://jsonplaceholder.typicode.com/posts")
    .then((bangla) => bangla.json())
    .then((hasan) => console.log(hasan))
 }