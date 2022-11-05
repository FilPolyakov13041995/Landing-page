// function slider() {

//     const slider = document.querySelector('#slider');
//     const sliderItem = Array.from(slider.children);
//     const btnN = document.querySelector('#btnN');
//     const btnP = document.querySelector('#btnP');

//     sliderItem.forEach((slide, index) => {
//         if(index !== 0) {
//             slide.classList.add('hidden');
//         }

//         slide.dataset.index = index;
//         sliderItem[0].setAttribute('data-active', '');

//         slide.addEventListener('click', () => {
//             // скрываем текущий слайд
//             slide.classList.add('hidden');
//             slide.removeAttribute('data-active');
    
//             // рассчитываем индекс следующего слайда
//             const nextSlideIndex = index + 1 === sliderItem.length ? 0 : index + 1;
    
//             // находим следующий слайд
//             const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    
//             // отображаем следующий слайд
//             nextSlide.classList.remove('hidden');
//             nextSlide.setAttribute('data-active', '');
    
            
//         });

//     });

//     btnN.addEventListener('click', () => {
    
//         // скрываем текущий слайд
//         const currentSlide = slider.querySelector('[data-active]');
//         const currentSlideIndex = +currentSlide.dataset.index;
//         currentSlide.classList.add('hidden');
//         currentSlide.removeAttribute('data-active');
    
//         // показывваем следующий слайд
//         const nextSlideIndex = currentSlideIndex + 1 === sliderItem.length ? 0 : currentSlideIndex + 1;
//         const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
//         nextSlide.classList.remove('hidden');
//         nextSlide.setAttribute('data-active', '');
    
//     });
    
//     btnP.addEventListener('click', () => {
        
//         // скрываем текущий слайд
//         const currentSlide = slider.querySelector('[data-active]');
//         const currentSlideIndex = +currentSlide.dataset.index;
//         currentSlide.classList.add('hidden');
//         currentSlide.removeAttribute('data-active');
    
//         // показывваем следующий слайд
//         const nextSlideIndex = currentSlideIndex === 0 ? sliderItem.length - 1 : currentSlideIndex - 1;
//         const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
//         nextSlide.classList.remove('hidden');
//         nextSlide.setAttribute('data-active', '');
//     });

// }

// slider();



// Slider 1

const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

  let slideIndex = 1;



  showSlides(slideIndex);


  if(slides.length < 10) {
      total.textContent = `0${slides.length}`;
  } else {
      total.textContent = slides.length;
  }


  function showSlides(n) {
      if(n > slides.length) {
          slideIndex = 1;
      }

      if(n < 1) {
          slideIndex = slides.length;
      }

      slides.forEach(item => item.style.display = 'none');

      slides[slideIndex - 1].style.display = 'block';

      if(slides.length < 10) {
          current.textContent = `0${slideIndex}`;
      } else {
          current.textContent = slideIndex;
      }
  }

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  prev.addEventListener('click', () => {
      plusSlides(-1);
  });

  next.addEventListener('click', () => {
      plusSlides(+1);
  });