 
 var price = 50000; // 상품 가격

 function updatePrice() {
   var input = document.getElementById('quantity');
   var value = parseInt(input.value, 10);
   value = isNaN(value) ? 1 : value;
   var totalPrice = price * value;
   var priceElement = document.getElementById('price');
   priceElement.innerText = totalPrice.toLocaleString() + '원';
 }
 
 function increment() {
   var input = document.getElementById('quantity');
   var value = parseInt(input.value, 10);
   value = isNaN(value) ? 1 : value;
   value++;
   input.value = value;
   updatePrice();
 }
 
 function decrement() {
   var input = document.getElementById('quantity');
   var value = parseInt(input.value, 10);
   value = isNaN(value) ? 1 : value;
   value--;
   if(value < 1) {
     value = 1;
   }
   input.value = value;
   updatePrice();
 }


 function handleKeyPress(event) {
  if (event.keyCode === 13) {
    updatePrice();
  }
}


 

 updatePrice(); // 초기화
 



