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