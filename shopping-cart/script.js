
// document.getElementById('case-increase').addEventListener('click', function(){
//     handleProductChange(true);
//     })
//     document.getElementById('case-decrease').addEventListener('click', function(){
//     handleProductChange(false);
//     });

    function handleProductChange(product, isIncrease){
        const productInput = document.getElementById(product + '-quantity');
        const productQuantity = parseInt(productInput.value);
        let productQuantityUpdate = productQuantity;
        if(isIncrease == true){
            productQuantityUpdate = productQuantity + 1;
        }
        if(isIncrease == false && productQuantity > 1){
            productQuantityUpdate = productQuantity - 1;
        }
        productInput.value = productQuantityUpdate;
        let productPrice = 0;
        if(product == 'phone'){
            productPrice = productQuantityUpdate * 1219;
        }
        if(product == 'case'){
            productPrice = productQuantityUpdate * 59;
        }
        document.getElementById(product + '-price').innerText = '$' + productPrice;
        calculationTotalAmount();
    }

    function calculationTotalAmount(){
        const phoneQuantity = getInputValue('phone');
        const caseQuantity = getInputValue('case');

        const totalAmount = phoneQuantity * 1219 + caseQuantity * 59;
        document.getElementById('total-price').innerText = '$' + totalAmount;

        const tax = Math.round(totalAmount * 0.1);
        document.getElementById('tax-amount').innerText = '$' + tax;

        const grandTotal = totalAmount + tax;
        document.getElementById('grand-total').innerText = '$' + grandTotal;
    }
    
   function getInputValue(product){
       const productInput = document.getElementById(product + '-quantity');
       const productQuantity = parseInt(productInput.value);
       return productQuantity;
   }


   function removeItem(item){
    document.getElementById(item).style.display = 'none';
   }



