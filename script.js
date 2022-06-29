/*const images = document.querySelectorAll('.image');
const promotions = document.querySelectorAll(".promotion-item");
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


promotions.forEach(promotion => {
    promotion.addEventListener('click', () => {
        removeActiveClasses()
        promotion.classList.add('lightBox')
    })
})



function removeActiveClasses() {
    promotions.forEach(promotion => {
        promotion.classList.remove('lightBox')
    })
}

promotions.forEach(promotion => {
    next.addEventListener('click', () => {
        activeSlide++
        if(activeSlide > promotions.length -1) {
            activeSlide = 0;
        }
        promotion.classList.add('lightBox')
        prev.classList.add('show')
    })
})


/*prevBtn.onclick = ()=>{ 
  newIndex--; //decrement index
  if(newIndex == 0){
      preview(); 
      prevBtn.style.display = "none"; 
  }else{
      preview();
      nextBtn.style.display = "block";
  } 
}*/






let activeSlide = 0;

next.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > images.length - 1) {
        activeSlide = 0;
    }

   setActiveSlide()
})

prev.addEventListener('click', ()  => {
    activeSlide--
    if(activeSlide < 0) {
        activeSlide = images.length - 1;
    }
  setActiveSlide()
    
})

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'old car one',
        tag: 'blah',
        price: 15,
        inCart: 0
    }
];

for(let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if( productNumbers ) {
        localStorage.setItem('cartNumbers',  productNumbers  + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}







