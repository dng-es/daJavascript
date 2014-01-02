$(document).ready(function(){
  $("nav ol li a").click(function(e) {
      e.preventDefault(); 
      var that = $( this ); 
      $('html, body').animate({
          scrollTop: $("#" + $(this).attr("data-dest")).offset().top
      }, 500,function(){
          $("nav ol li a").removeClass("navSelected");
          that.addClass("navSelected");
      });
  });

  $("section h2, section h3, section h3, section h4").addClass("fa fa-code");

  $("#nav-trigger").click(function(){
    $("header nav").slideToggle();
  });

  $("#top-trigger").click(function(){
    $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  })

  $(window).scroll(function(){
    var posscroll = $(window).scrollTop(),
        elem = null;
    $("section h2, section h3").each(function(){
      if ( (posscroll+200 > $(this).offset().top)){
        elem = this;
      }
    });

    $("nav ol li a").removeClass("navSelected");
    $("#nav-" + elem.id ).addClass("navSelected");

    //button gotop
    if (posscroll > 50){
      $("#top-trigger").fadeIn();
    }
    else{
      $("#top-trigger").fadeOut();
    }
  });

  $(window).resize(function(event) {
      if ($(window).width()>960){
          $("header nav").slideDown();    
      }
  });

});
