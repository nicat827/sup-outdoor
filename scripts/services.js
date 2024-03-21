let isShowSlider = false;
function showSLider() {
    const screenWidth = window.innerWidth;
    const sliderContainer = document.querySelector(".slider-container");
    const sliderContainer2 = document.querySelector(".slider-container2");
    const sliderContainer3 = document.querySelector(".slider-container3");
    const sliderContainer4 = document.querySelector(".slider-container4");
    const sliderContainer5 = document.querySelector(".slider-container5");
    if (screenWidth <= 768 && !isShowSlider) {
        isShowSlider = true;
        let sliderHTML = `
            <div class="slider">
            <input type="radio" name="slider" id="slide1" checked>
            <input type="radio" name="slider" id="slide2">
            <input type="radio" name="slider" id="slide3">
            
            <div class="slides">
                <div class="slide" id="slide-1"><img src="./images/services/smallFirst.png"  /></div>
                <div class="slide" id="slide-2"><img src="./images/services/middleBig.png"  /></div>
                <div class="slide" id="slide-3"><img src="./images/services/smallLast.png" /></div>
            </div>
            
            <div class="navigation">
                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
            </div>
            </div>
        `;
        sliderContainer.innerHTML = sliderHTML;
        sliderHTML = `
        <div class="slider">
        <input type="radio" name="sliderGift" id="slideGift1" checked>
        <input type="radio" name="sliderGift" id="slideGift2">
        
        <div class="slides">
            <div class="slide" id="slide-gift1"><img src="./images/services/giftSectionBig.png"  /></div>
            <div class="slide" id="slide-gift2"><img src="./images/services/giftSectionSmall.png"  /></div>
        </div>
        
        <div class="navigation">
            <label for="slideGift1"></label>
            <label for="slideGift2"></label>
        </div>
        </div>
    `;
        sliderContainer2.innerHTML = sliderHTML;
        sliderHTML = `
        <div class="slider">
        <input type="radio" name="sliderRent" id="slideRent1" checked>
        <input type="radio" name="sliderRent" id="slideRent2">
        
        <div class="slides">
            <div class="slide" id="slide-rent1"><img src="./images/services/rentSectionFirst.png"  /></div>
            <div class="slide" id="slide-rent2"><img src="./images/services/rentSectionSecond.png"  /></div>
        </div>
        
        <div class="navigation">
            <label for="slideRent1"></label>
            <label for="slideRent2"></label>
        </div>
        </div>
    `;
        sliderContainer4.innerHTML = sliderHTML;
        sliderHTML = `
        <div class="slider">
        <input type="radio" name="sliderHoliday" id="slideHolidays1" checked>
        <input type="radio" name="sliderHoliday" id="slideHolidays2">
        <input type="radio" name="sliderHoliday" id="slideHolidays3">
        
        <div class="slides">
            <div class="slide" id="slide-holiday1"><img src="./images/services/holidaysSection1.png"  /></div>
            <div class="slide" id="slide-holiday2"><img src="./images/services/holidaysSection2.png"  /></div>
            <div class="slide" id="slide-holiday3"><img src="./images/services/holidaysSection3.png"  /></div>
        </div>
        
        <div class="navigation">
            <label for="slideHolidays1"></label>
            <label for="slideHolidays2"></label>
            <label for="slideHolidays3"></label>
        </div>
        </div>
    `;
        sliderContainer5.innerHTML = sliderHTML;

        sliderHTML = `
        <div class="slider">
        <input type="radio" name="sliderTour" id="slideTour1" checked>
        <input type="radio" name="sliderTour" id="slideTour2">
        
        <div class="slides">
            <div class="slide" id="slide-tour1"><img src="./images/services/toursSection1.png"  /></div>
            <div class="slide" id="slide-tour2"><img src="./images/services/toursSection2.png"  /></div>
        </div>
        
        <div class="navigation">
            <label for="slideTour1"></label>
            <label for="slideTour2"></label>
        </div>
        </div>
    `;
        sliderContainer5.innerHTML = sliderHTML;

    }
    else if (screenWidth > 768 && isShowSlider) {
        isShowSlider = false;
        const sliders = document.querySelectorAll(".slider")
        console.log(sliders)
        sliders.forEach(slider => {
            if (slider) slider.remove();
        });
        
    }
}
showSLider();
window.addEventListener("resize", showSLider);

const upBtn = document.querySelector("#goToUpBtn")
window.addEventListener("scroll", () => {
    if (this.window.scrollY > 0) {
        upBtn.style.display = 'block';
    } else {
        upBtn.style.display = 'none';
    }
})

upBtn.addEventListener("click", () => {
    const scrollDuration = 500; // Продолжительность анимации в миллисекундах
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Шаг скролла

    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
})