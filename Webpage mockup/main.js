//Swiper Slider
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,

});
  var swiper2 = new Swiper(".bg-slider", {
    spaceBetween: 0,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    },
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
  document.querySelector('.bg-slider-thumbs').addEventListener('click', function() {
    swiper2.stop();
    swiper2.pause();
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

const section = document.getElementById('projects-section');
