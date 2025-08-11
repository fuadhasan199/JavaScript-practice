const phones = [
    { model: "16pro", brand: "Iphone", price: 95000 },
    { model: "galaxy7", brand: "Samsung", price: 40000 },
    { model: "note 12", brand: "Oppo", price: 26000 },
    { model: " n8", brand: "Nokia", price: 35000 },
    { model: " 14pro", brand: "Iphone", price: 105000 },
    { model: " abc45", brand: "HTC", price: 48000 },
]; 

function findAveragePhonePrice(value){
  
  let total_price=0 

  for(let i=0 ;i<value.length;i++){

    total_price=total_price+value[i].price

  } 

   let avaragePrice=total_price /phones.length

     return avaragePrice


} 
console.log(findAveragePhonePrice(phones));