
const string='Hello Bangladesh'
const vowel='aeiouAEIOU'
let vowel_count=0 

for(let i=0;i<string.length;i++){

if(vowel.includes(string[i])){

    vowel_count=vowel_count+1
}

} 
console.log(vowel_count);