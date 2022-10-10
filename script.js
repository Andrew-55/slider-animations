const slides = document.querySelectorAll('.slide')

slides.forEach((elem) => {
    elem.onclick = () => {
        if(elem.classList.contains('active')){
            elem.classList.remove('active')
        }else{
            document.querySelector('.slide.active')?.classList.remove('active')
            elem.classList.add('active')
        }
    }
})