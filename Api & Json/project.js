async function loadPost() {
    try{ 
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts=await response.json()
        console.log(posts);
         
        const container=document.getElementById("post-container") 
        container.innerHTML=""

        posts.forEach(post => {
            container.innerHTML +=` <div class=" border border-black-1 m-5 p-5 text-center rounded-md w-[280px] h-[90px]">
             ${post.title}
             </div>
            
            `
        });

    } 
    catch(eror){
       console.log("is here fucking some eror",eror);
    }
}  

const btn=document.getElementById("hello").addEventListener("click",loadPost)

