let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'old car one',
        tag: 'blah',
        price: 15,
        inCart: 0
    },
      {
        name: 'old car two',
        tag: 'blah',
        price: 20,
        inCart: 0
    },
      {
        name: 'old car three',
        tag: 'blah',
        price: 25,
        inCart: 0
    },
    {
        name: 'old car four',
        tag: 'blah',
        price: 30,
        inCart: 0
    }
];

for(let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}



function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if( productNumbers ) {
        localStorage.setItem('cartNumbers',  productNumbers  + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
    if(cartItems[product.tag] != undefined {
      cartItems = {
         ...cartItems,
         [product.tag]: product
      }
    }
      cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems =  {
      [product.tag]: product
    } /*should this be in here?*/
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
  
     if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost +
        product.price);
     } else {
       localStorage.setItem('totalCost', product.price);
     }
}

function dispayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector
  ('.products');
  if(cartItems && productContainer) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
          <i class="fas fa-chevron-right"></i>
          <img src="./images/${item.tag}.jpg">
          <span>${item.name}</span>
        </div>
        <div class="price">${item.price},00</div>
        <div class="quantity">
             
        </div>
        <div class="total">
          $${item.inCart * item.price},00
        </div> `
      })

      productContainer.innerHTML +=
        <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">Basket Total</h4>
          <h4 class="BasketTotal">$${cartCost}, 00</h4>
        </div>
  }
}


onLoadCartNumbers();
dispayCart();