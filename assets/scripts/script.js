function dom_loaded(){

    AOS.init();
}

document.addEventListener("DOMContentLoaded", dom_loaded);
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

//working
// $("body").css('overflow', 'hidden');
// $(".loader").fadeIn();
// setTimeout(() => {
// $("body").css('overflow', 'unset');
// $(".loader").fadeOut(300);
// }, 2200);