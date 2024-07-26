$(document).ready(function(){
  $('#quote').fadeIn(2000);
});

$(window).on('scroll', function(){
  if ($(this).scrollTop() >= 150) {
    $('#quote').fadeOut(300);
    $('#arrow-up').slideDown(500);
  } else {
    $("#quote").fadeIn(1000);
    $('#arrow-up').slideUp(500);
  }
  if ($(this).scrollTop() + $(window).height() >= $(document).height()-35){
    $('#arrow-up').css("color", "#fff");
  } else {
    $('#arrow-up').css("color", "#333");
  }
});

$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');
});

$('a').on('click', function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

/* Chatbot Functionality */

document.querySelector(".openChatBtn").addEventListener("click", openForm);
document.querySelector("#chatbot-exit").addEventListener("click", closeForm);

function openForm() {
  document.querySelector(".openChat").style.display = "flex";
  document.querySelector(".openChatBtn").style.display = "none";
}

function closeForm() {
  document.querySelector(".openChat").style.display = "none";
  document.querySelector(".openChatBtn").style.display = "block";
}