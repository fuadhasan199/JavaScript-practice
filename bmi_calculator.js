
/*

document.write("Your bmi is :"+bmi)


if(bmi < 18.5) {
    document.write("vai tumi patlu")
} 
 else if ( bmi >= 18.5 && bmi <=24.9) {
    document.write("tomar body perfect")
 } 
 else if (bmi >=25 && bmi<= 29.9 ){
    document.write("tumi porag vai er moto motu")
 } 

 else{
    document.write("khaoya koma ,noile morbi")
 }  */ 

const weight=35
const height=1.62
let bmi= (weight/(height*height))  


let message=(bmi < 18.5) ?"paltu":

            (bmi >= 18.5 && bmi <=24.9) ?"normal":
            (bmi >=25 && bmi<= 29.9) ? "over-weight":
             "morbi"
             document.write("your bmi is",bmi)
             document.write( message)
