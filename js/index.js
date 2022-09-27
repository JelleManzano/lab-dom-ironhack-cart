// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let priceValue = price.innerText;
  let quantityValue = quantity.value;
  let subtotalAmount = quantityValue * priceValue;
  let showSubtotal = product.querySelector('.subtotal span');
  showSubtotal.innerHTML = subtotalAmount;
  return subtotalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const salesProduct = document.querySelectorAll('.product');
  let actualTotal = 0;
  salesProduct.forEach((prices) => {
    console.log(prices);

    actualTotal += updateSubtotal(prices);
  });
  // ITERATION 3
  //... your code goes here
  
  /*let subTotalSum = document.querySelectorAll(".subtotal span")
  
  subTotalSum.forEach((totalPrices) => {
   
    actualTotal += totalPrices.innerText
  })*/ //*No hace falta reusar este código teniendo el forEach anterior



  let totalSum = document.querySelector('#total-value span');
  totalSum.innerHTML = actualTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn

  //... your code goes here
  const removeButton = document.querySelectorAll(".btn btn-remove")
  removeButton.addEventListener('click', removeProduct);
});
