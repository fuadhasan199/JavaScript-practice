const num=[1,2,3,4,5,6] 

const result=num.reverse()

console.log(result); 

// deff way
 const rev=[]
for(let i=0;i<num.length;i++){
    rev.unshift(num[i]) 
} 
console.log(rev); 


