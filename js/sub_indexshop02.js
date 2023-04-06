

document.addEventListener('DOMContentLoaded', () => {
    // 삭제 버튼 클릭 시 해당 상품 삭제
    const deleteButtons = document.querySelectorAll('.button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.parentNode.parentNode.remove();
        updateTotalItems(); // 삭제 후 총 주문 상품 개수 업데이트
      });
    });
  
    // 수량 변경 시 총 가격 변경
    const quantityInputs = document.querySelectorAll('#quantity');
    quantityInputs.forEach(input => {
      input.addEventListener('change', () => {
        const quantity = input.value;
        const price = input.parentNode.nextElementSibling.textContent.replace(',', '').replace('원', '');
        const total = quantity * price;
        input.parentNode.nextElementSibling.nextElementSibling.textContent = total.toLocaleString() + '원';
        updateTotalItems(); // 수량 변경 후 총 주문 상품 개수 업데이트
      });
    });
  
    // 총 주문 상품 개수 업데이트 함수
    const updateTotalItems = () => {
      const totalItems = document.querySelectorAll('tbody tr').length;
      document.querySelector('#contentsub2 span').textContent = `총 주문 상품 개수: ${totalItems}`;
    };
    // 주문 버튼 클릭 시 알림창 띄우기
    const orderButton = document.getElementById("order-button");

    orderButton.addEventListener("click", function() {
        alert("이용해 주셔서 감사합니다!!");
  });
  
});

  