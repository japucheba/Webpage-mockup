//Swiper Slider
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    autoplay: { delay: 4000, },
    thumbs: {
      swiper: swiper,
    },
  });


  var mySwiper = new Swiper('.swiper-container', {
  // other swiper options...
});
  document.querySelector('.swiper-slide img').addEventListener('click', function() {
    mySwiper.slideNext();
  });

//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

/*Responsive nav menu toggle*/
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});


     //COUNT ELEMENT
     // Define a function to start the animation when the element is in view
     function startAnimation(entries, observer) {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           // Get the target value display element
           const valueDisplay = entry.target;

           let startValue = 0;
           let endValue = parseInt(valueDisplay.getAttribute("data-val"));
           let duration = Math.floor(interval / endValue);
           let counter = setInterval(function () {
             startValue += 2;
             valueDisplay.textContent = startValue;
             if (startValue >= endValue) { // Use >= instead of ==
               clearInterval(counter);
             }
           }, duration);

           // Unobserve the target once animation starts to prevent repeating animation
           observer.unobserve(valueDisplay);
         }
       });
     }

     // Select all value display elements
     let valueDisplays = document.querySelectorAll(".num");
     let interval = 4000;

     // Create a new IntersectionObserver
     const observer = new IntersectionObserver(startAnimation, { threshold: 0.5 });

     // Observe each value display element
     valueDisplays.forEach((valueDisplay) => {
       observer.observe(valueDisplay);
     });
