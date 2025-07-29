let age= 26
let  isStudent=false

let ticket_price;
if(age <10 ){
    ticket_price=0
} 
else if(isStudent){
    ticket_price=800*50/100 ;
}
else if (age >=60){
    ticket_price=800*30/100;
} 
else{
  ticket_price=800;
} 
document.write("your ticket price",ticket_price)