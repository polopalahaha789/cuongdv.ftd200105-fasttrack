var currentSlider = 0;
var sliders = document.querySelectorAll(".item-slider");
var slider = document.querySelectorAll(".eclip");
function nextSlider() {
    currentSlider ++;
    if (currentSlider > sliders.length - 1) {
        currentSlider = 0;
    }
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('active');
        slider[i].classList.remove('slider');
    }
    sliders[currentSlider].classList.add('active');
    slider[currentSlider].classList.add('slider');
}
function prevSlider() {
    currentSlider --;
    if (currentSlider < 0) {
        currentSlider = 3;
    }
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('active');
        slider[i].classList.remove('slider');
    }
    sliders[currentSlider].classList.add('active');
    slider[currentSlider].classList.add('slider');
}
function showSlider(){
    currentSlider ++;
    if (currentSlider > sliders.length - 1) {
        currentSlider = 0;
    }
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('active');
        slider[i].classList.remove('slider')
    }
    sliders[currentSlider].classList.add('active');
    slider[currentSlider].classList.add('slider');
}
function selectSlider(n){
    currentSlider =n;
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('active');
        slider[i].classList.remove('slider');
    }
    sliders[currentSlider].classList.add('active');
    slider[currentSlider].classList.add('slider');
}
setInterval(showSlider, 3000);