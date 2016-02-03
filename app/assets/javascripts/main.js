$(document).ready(function() {

var cycleImages = function() {
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler div:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(3000,function(){//fade out the top image
	       $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
         $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }
setInterval(cycleImages, 15000);

  $("div.panel img, div.nav-bar-item, div.icon-container").hover(function() {
     $(this).animate({opacity: 0.6}, 250);
     },
       function() {
         $(this).animate({opacity: 1}, 250);
       }
  )

  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $('[name="' + this.getAttribute('href').substr(1) + '"]').offset().top
      }, 500);
      return false;
  });

})
