const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})


let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.item-box');

for( let i = 0; i < list.length;  i++ ){
list[i].addEventListener('click', function(){
    for(let j = 0; j < list.length; j++){
        list[j].classList.remove('active');
    }
    this.classList.add('active');
    let dataFilter = this.getAttribute('data-filter');

    for(let k = 0; k<itemBox.length; k++){
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item') == dataFilter || 
        dataFilter == 'all'){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
})
}

