// if(window.innerWidth <= 768){
//     let currentSlide = 0;
//     const mains = document.querySelectorAll('main');
//     const totalSlides = slides.length;

//     document.querySelector('.next').addEventListener('click', () => {
//         currentSlide = (currentSlide + 1 ) % totalSlides;
//         updateSlider();
//     });
//     document.querySelector('.prev').addEventListener('click', () => {
//       currentSlide = (currentSlide - 1 + totalSlides)% totalSlides;
//       updateSlider();
//     });

//     function updateSlider(){
//         const offset = -currentSlide * 100;

//         document.querySelector('.poly').style.transform = `translateX(${offset}%`;
//     }
// }
