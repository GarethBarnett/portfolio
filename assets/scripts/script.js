 $("body").css('overflow', 'hidden');
 $(".loader").show();
 setTimeout(() => {
 $("body").css('overflow', 'unset');
 $(".loader").fadeOut(300);
 }, 1800);


function dom_loaded(){

    let loader = document.getElementById("splash");

    AOS.init();

    var scroll = new SmoothScroll('a[href*="#"]');

    document.title = "Gareth Barnett UX/UI Portfolio"
  
}

document.addEventListener("DOMContentLoaded", dom_loaded);