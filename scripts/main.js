let isShowSlider = false;
function showSLider() {
    const screenWidth = window.innerWidth;
    const sliderContainer = document.querySelector(".slider-container");
    const sliderContainer2 = document.querySelector(".slider-container2");
    const sliderContainer3 = document.querySelector(".slider-container3");
    if (screenWidth <= 768 && !isShowSlider) {
        isShowSlider = true;
        let sliderHTML = `
            <div class="slider">
            <input type="radio" name="slider" id="slide1" checked>
            <input type="radio" name="slider" id="slide2">
            <input type="radio" name="slider" id="slide3">
            
            <div class="slides">
                <div class="slide" id="slide-1"><img src="./images/smallFirst.png"  /></div>
                <div class="slide" id="slide-2"><img src="./images/middleBig.png"  /></div>
                <div class="slide" id="slide-3"><img src="./images/smallLast.png" /></div>
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
            <div class="slide" id="slide-gift1"><img src="./images/giftSectionBig.png"  /></div>
            <div class="slide" id="slide-gift2"><img src="./images/giftSectionSmall.png"  /></div>
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
            <div class="slide" id="slide-rent1"><img src="./images/rentSectionFirst.png"  /></div>
            <div class="slide" id="slide-rent2"><img src="./images/rentSectionSecond.png"  /></div>
        </div>
        
        <div class="navigation">
            <label for="slideRent1"></label>
            <label for="slideRent2"></label>
        </div>
        </div>
    `;
        sliderContainer3.innerHTML = sliderHTML;

    }
    else if (screenWidth > 768) {
        isShowSlider = false;
        const sliders = document.querySelectorAll(".slider")
        sliders.forEach(slider => {
            if (slider) sliderContainer.removeChild(slider)
        });
        
    }
}
showSLider();
window.addEventListener("resize", showSLider);