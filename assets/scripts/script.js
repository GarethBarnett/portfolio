// let loader = document.getElementById("splash");

// /* Splash Animation */
// setTimeout(function () {
//    'use strict';
//    loader.classList.add('slideOutUp');
// }, 2000);


// /* Splash Removal */
// setTimeout(function () {
//    'use strict';
//    loader.parentNode.removeChild(loader);
// }, 3000);


$("body").css('overflow', 'hidden');
$(".loader").fadeIn();
setTimeout(() => {
$("body").css('overflow', 'unset');
$(".loader").fadeOut(300);
}, 2200);



function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    headerEl = document.getElementById('dynamicHeader');
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
  
  window.addEventListener('scroll', resizeHeaderOnScroll);



var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  speed: 800,
  // slidesPerView: 3,
  // spaceBetween: 70,
  watchSlidesVisibility: !0,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },



  // breakpoints: {
  //           768: {
  //               spaceBetween: 20,
  //               slidesPerView: 1
  //           },
  //           1200: {
  //               spaceBetween: 30,
  //               slidesPerView: 2
  //           },
  //           1440: {
  //               spaceBetween: 30,
  //               slidesPerView: 3
  //           }
  //       }





  
});

