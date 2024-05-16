const imgs = document.querySelectorAll(".header-slider ul img")
const controlRight = document.querySelector(".header-slider .right")
const controlLeft = document.querySelector(".header-slider .left")

let n = 0

function changeSlider() {
    for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none'        
    }
    imgs[n].style.display = 'block'
}

changeSlider()

controlLeft.addEventListener('click',() => {
    
    console.log('clicked');
    if(n > 0){
        n--
    }else {
        n = imgs.length-1
    }
    changeSlider();

})

controlRight.addEventListener('click',() => {

    if(n < imgs.length-1){
        n++
    }else {
        n = 0
    }
    changeSlider();

})

const scrollContainer = document.querySelectorAll('.product')
console.log(scrollContainer);

for(item of scrollContainer) {
    item.addEventListener('wheel', (e) => {
        e.preventDefaul()
        item.scrollLeft += e.deltaY;
    })
}

