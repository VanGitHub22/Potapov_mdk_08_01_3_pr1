const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
const slides = Array.from(slider.querySelectorAll('img'))
const slideCount = slides.length
let slideIndex = 0;





prevButton.addEventListener('click', showPreviousSlide)
nextButton.addEventListener('click', showNextSlide)

function showPreviousSlide(){
    slideIndex = (slideIndex - 1 +  slideCount) % slideCount
    updateSlider()
}

function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount
    updateSlider()
}


function updateSlider(){
    slides.forEach((slide, index) => {
        if(index === slideIndex){
            slide.style.opacity = 1
            setTimeout(function () {slide.style.display = 'block'}, 200)
            
        } else{
            slide.style.opacity = 0
            setTimeout(function () {slide.style.display = 'none'}, 200)
            
        }
    })
}

updateSlider()




const hamb = document.querySelector('.hamburger')
const backHumb = document.querySelector('#backHumb')
const nav_links = document.querySelector('.nav_links2')

let a = 0
let i = 100

hamb.addEventListener('click', () => {
        let first = setInterval(function () {
            nav_links.style.transform = "translateY(-" + i + "%)"
            i--
            if(i===0){
                clearInterval(first)
            }
        }, 3)
})

backHumb.addEventListener('click', () => {
    let first = setInterval(function () {
        nav_links.style.transform = "translateY(-" + i + "%)"
        i++
        if(i===101){
            clearInterval(first)
        }
    }, 3)
})