$("body").css('overflow', 'hidden');

 setTimeout(() => {
 $("body").css('overflow', 'unset');
 $(".loader").fadeOut(500);
 $(".content-container").removeClass('hide');
 }, 700);


function dom_loaded(){

    let loader = document.getElementById("splash");

    AOS.init();

    var scroll = new SmoothScroll('a[href*="#"]');

    document.title = "Gareth Barnett UX/UI Portfolio"
  
}

document.addEventListener("DOMContentLoaded", dom_loaded);