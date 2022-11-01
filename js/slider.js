function slider() {

    const slider = document.querySelector('#slider');
    const sliderItem = Array.from(slider.children);
    const bntN = document.querySelector('#btnN');
    const bntP = document.querySelector('#btnP');

    sliderItem.forEach((slide, index) => {
        if(index !== 0) {
            slide.classList.add('hidden');
        }

        slide.dataset.index = index;
        sliderItem[0].setAttribute('data-active', '');

        slide.addEventListener('click', () => {
            // скрываем текущий слайд
            slide.classList.add('hidden');
            slide.removeAttribute('data-active');
    
            // рассчитываем индекс следующего слайда
            const nextSlideIndex = index + 1 === sliderItem.length ? 0 : index + 1;
    
            // находим следующий слайд
            const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    
            // отображаем следующий слайд
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');
    
            
        });

    });

    bntN.addEventListener('click', () => {
    
        // скрываем текущий слайд
        const currentSlide = slider.querySelector('[data-active]');
        const currentSlideIndex = +currentSlide.dataset.index;
        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active');
    
        // показывваем следующий слайд
        const nextSlideIndex = currentSlideIndex + 1 === sliderItem.length ? 0 : currentSlideIndex + 1;
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    
    });
    
    bntP.addEventListener('click', () => {
        
        // скрываем текущий слайд
        const currentSlide = slider.querySelector('[data-active]');
        const currentSlideIndex = +currentSlide.dataset.index;
        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active');
    
        // показывваем следующий слайд
        const nextSlideIndex = currentSlideIndex === 0 ? sliderItem.length - 1 : currentSlideIndex - 1;
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    });

}

slider();