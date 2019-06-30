$("body").css('overflow', 'hidden');

 setTimeout(() => {
 $("body").css('overflow', 'unset');
 $(".loader").fadeOut(300);
 $(".content-container").removeClass('hide');
 AOS.init();
 }, 800);


function dom_loaded(){

    var scroll = new SmoothScroll('a[href*="#"]');

    document.title = "Gareth Barnett - Portfolio"
  
}

document.addEventListener("DOMContentLoaded", dom_loaded);