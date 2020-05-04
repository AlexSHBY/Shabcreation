$(function(){
    $( ".btn-about" ).click(function(){
      $( ".about-subtitle-more" ).fadeToggle( 100, "linear", function(){ 
         console.log("toggle completed"); 
      });
      $( ".about-subtitle" ).fadeToggle( 100, "linear", function(){ 
        console.log("toggle completed"); 
     });
    });
});
function slowScroll (id) {
    var offset = 150;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  }
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $('.header-wrap').addClass('fixed');
    } else {
        $('.header-wrap').removeClass('fixed');
    }
  });
  $(function(){
    $( ".open" ).click(function(){
      $( ".menu" ).fadeToggle( 100, "linear", function(){ 
         console.log("toggle completed"); 
      });
    });
});



$(function() {
  $(".menu-link").on("click", function() {
    if ($(window).width() < 780) {
      $( ".menu" ).fadeToggle( 100, "linear", function() { 
          console.log("toggle completed"); 
      });
    }
  });
  $(window).on("resize", function() {
    if ($(window).width() >= 780) {
        $(".menu").show();
    }
  });
});

