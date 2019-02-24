$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });

    
    $(document).ready(function() {
        
        $("#cf7_controls").on('click', 'span', function() {
          $("#cf7 img").removeClass("opaque");
          
      
          var newImage = $(this).index();
      
          $("#cf7 img").eq(newImage).addClass("opaque");
      
          $("#cf7_controls span").removeClass("selected");
          $(this).addClass("selected");
        });
      });