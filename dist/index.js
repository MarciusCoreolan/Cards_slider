(function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    slides.forEach((item)=>{
        item.addEventListener('click', ()=>{
            removeActiveClass()
            item.classList.add('active')
        })
    })
    function removeActiveClass() {
        slides.forEach((item)=>{
            item.classList.remove('active')
        })
    }
})()