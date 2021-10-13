let sliderItem = document.querySelectorAll('.slider-item');
let sliderLeft = document.querySelector('.slider-counter-arrow-left');
let sliderRight = document.querySelector('.slider-counter-arrow-right');
let offSet = 0;

// console.log(sliderItem)

sliderRight.onclick = function() {



    if (offSet <= (-80)) {
        return offSet = (-80);
    }
    offSet -= 20;
    for (let i = 0; i < sliderItem.length; i++)
        sliderItem[i].style.left = offSet + '%';
    console.log(offSet + 'rightbutton')
    console.log(offSet)

    if (offSet <= (-20)) {
console.log(sliderLeft.src)
 
    }
}

sliderLeft.onclick = function() {
    if (offSet === 0) {
        offSet = 0;
        return offSet
    }
    offSet += 20;
    for (let i = 0; i < sliderItem.length; i++)
        sliderItem[i].style.left = offSet + '%';
    console.log(offSet)
}
